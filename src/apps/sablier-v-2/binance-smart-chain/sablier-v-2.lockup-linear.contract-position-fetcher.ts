import { Inject, NotImplementedException } from '@nestjs/common';
import { compact } from 'lodash';

import { APP_TOOLKIT, IAppToolkit } from '~app-toolkit/app-toolkit.interface';
import { PositionTemplate } from '~app-toolkit/decorators/position-template.decorator';
import { drillBalance } from '~app-toolkit/helpers/drill-balance.helper';
import { buildDollarDisplayItem } from '~app-toolkit/helpers/presentation/display-item.present';
import { getImagesFromToken, getLabelFromToken } from '~app-toolkit/helpers/presentation/image.present';
import { isViemMulticallUnderlyingError } from '~multicall/errors';
import { ContractType } from '~position/contract.interface';
import { DefaultDataProps } from '~position/display.interface';
import { ContractPositionBalance } from '~position/position-balance.interface';
import { MetaType } from '~position/position.interface';
import { ContractPositionTemplatePositionFetcher } from '~position/template/contract-position.template.position-fetcher';
import { GetTokenDefinitionsParams, GetDisplayPropsParams } from '~position/template/contract-position.template.types';

import { CHAINS, SablierV2ApiClient, contracts, CoreCategory } from '../common';
import { SablierV2ViemContractFactory } from '../contracts';
import { SablierV2LockupLinearV20 } from '../contracts/viem';

export type SablierStreamContractPositionDefinition = {
  address: string;
  tokenAddress: string;
};
const chain = CHAINS.BSC;
const category = CoreCategory.LOCKUP_LINEAR_20;
const contractAddress = contracts[chain][category].address;

@PositionTemplate()
export class BinanceSmartChainSablierV2LockupLinearContractPositionFetcher extends ContractPositionTemplatePositionFetcher<
  SablierV2LockupLinearV20,
  DefaultDataProps,
  SablierStreamContractPositionDefinition
> {
  groupLabel = contracts[chain][category].alias;

  constructor(
    @Inject(APP_TOOLKIT) protected readonly appToolkit: IAppToolkit,
    @Inject(SablierV2ViemContractFactory) protected readonly sablierV2ContractFactory: SablierV2ViemContractFactory,
    @Inject(SablierV2ApiClient) protected readonly apiClient: SablierV2ApiClient,
  ) {
    super(appToolkit);
  }

  getContract(address: string) {
    return this.sablierV2ContractFactory.sablierV2LockupLinearV20({ address, network: this.network });
  }

  async getDefinitions() {
    const tokens = await this.apiClient.getTokens(chain);
    return tokens.map(v => ({ address: contractAddress, tokenAddress: v }));
  }

  async getTokenDefinitions({
    definition,
  }: GetTokenDefinitionsParams<SablierV2LockupLinearV20, SablierStreamContractPositionDefinition>) {
    return [
      {
        address: definition.tokenAddress,
        metaType: MetaType.SUPPLIED,
        network: this.network,
      },
    ];
  }

  async getLabel({ contractPosition }: GetDisplayPropsParams<SablierV2LockupLinearV20, DefaultDataProps>) {
    return `${getLabelFromToken(contractPosition.tokens[0])} Lockup Linear Sablier Stream`;
  }

  getTokenBalancesPerPosition(): never {
    throw new NotImplementedException();
  }

  async getBalances(address: string): Promise<ContractPositionBalance<DefaultDataProps>[]> {
    const multicall = this.appToolkit.getViemMulticall(this.network);
    const streams = await this.apiClient.getStreams(address, chain, category);
    if (streams.length === 0) return [];

    const tokenLoader = this.appToolkit.getTokenDependencySelector({
      tags: { network: this.network, context: this.appId },
    });

    const contract = this.sablierV2ContractFactory.sablierV2LockupLinearV20({
      address: contractAddress,
      network: this.network,
    });
    const lockupLinear = multicall.wrap(contract);

    const underlyingAddresses = streams.map(stream => ({
      network: this.network,
      address: stream.tokenAddress.toLowerCase(),
    }));

    const tokenDependencies = await tokenLoader.getMany(underlyingAddresses).then(deps => compact(deps));

    const positions = await Promise.all(
      streams.map(async stream => {
        const tokenAddress = stream[3].toLowerCase();
        const streamBalanceRaw = await lockupLinear.read.withdrawableAmountOf([BigInt(stream.streamId)]).catch(err => {
          if (isViemMulticallUnderlyingError(err)) return null;
          throw err;
        });
        if (!streamBalanceRaw) return null;

        const token = tokenDependencies.find(t => t.address === tokenAddress.toLowerCase());
        if (!token) return null;

        const balanceRaw = streamBalanceRaw.toString();
        const tokenBalance = drillBalance(token, balanceRaw);

        const position: ContractPositionBalance = {
          type: ContractType.POSITION,
          address: contractAddress,
          network: this.network,
          appId: this.appId,
          groupId: this.groupId,
          tokens: [tokenBalance],
          balanceUSD: tokenBalance.balanceUSD,

          dataProps: {},

          displayProps: {
            label: `Available ${token.symbol} on Sablier stream #${stream.streamId}`,
            secondaryLabel: buildDollarDisplayItem(token.price),
            images: getImagesFromToken(token),
          },
        };

        position.key = this.appToolkit.getPositionKey(position);

        return position;
      }),
    );

    return compact(positions);
  }
}
