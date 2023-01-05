import { Injectable, Inject } from '@nestjs/common';
import { StaticJsonRpcProvider } from '@ethersproject/providers';
import { IAppToolkit, APP_TOOLKIT } from '~app-toolkit/app-toolkit.interface';

import { NetworkProviderService } from '~network-provider/network-provider.service';
import { Network } from '~types/network.interface';

import { BorrowController__factory } from './ethers';
import type { BorrowController } from './ethers';
import { Dbr__factory } from './ethers';
import type { Dbr } from './ethers';
import { SimpleEscrow__factory } from './ethers';
import type { SimpleEscrow } from './ethers';
import { SimpleMarket__factory } from './ethers';
import type { SimpleMarket } from './ethers';
import { ContractFactory } from '~contract/contracts';
// eslint-disable-next-line
type ContractOpts = { address: string; network: Network };

@Injectable()
export class InverseFirmContractFactory extends ContractFactory {
  constructor(@Inject(APP_TOOLKIT) protected readonly appToolkit: IAppToolkit) {
    super((network: Network) => appToolkit.getNetworkProvider(network));
  }

  borrowController({ address, network }: ContractOpts) {
    return BorrowController__factory.connect(address, this.appToolkit.getNetworkProvider(network));
  }
  dbr({ address, network }: ContractOpts) {
    return Dbr__factory.connect(address, this.appToolkit.getNetworkProvider(network));
  }
  simpleEscrow({ address, network }: ContractOpts) {
    return SimpleEscrow__factory.connect(address, this.appToolkit.getNetworkProvider(network));
  }
  simpleMarket({ address, network }: ContractOpts) {
    return SimpleMarket__factory.connect(address, this.appToolkit.getNetworkProvider(network));
  }
}

export type { BorrowController } from './ethers';
export type { Dbr } from './ethers';
export type { SimpleEscrow } from './ethers';
export type { SimpleMarket } from './ethers';