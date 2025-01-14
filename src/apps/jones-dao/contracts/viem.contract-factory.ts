import { Injectable, Inject } from '@nestjs/common';

import { IAppToolkit, APP_TOOLKIT } from '~app-toolkit/app-toolkit.interface';
import { Network } from '~types/network.interface';

import {
  JonesMetavault__factory,
  JonesMillinerV2__factory,
  JonesStakingRewards__factory,
  JonesStakingRewardsFactory__factory,
  JonesStrategyToken__factory,
  JonesStrategyVault__factory,
  JonesVault__factory,
} from './viem';

type ContractOpts = { address: string; network: Network };

@Injectable()
export class JonesDaoViemContractFactory {
  constructor(@Inject(APP_TOOLKIT) protected readonly appToolkit: IAppToolkit) {}

  jonesMetavault({ address, network }: ContractOpts) {
    return JonesMetavault__factory.connect(address, this.appToolkit.getViemNetworkProvider(network));
  }
  jonesMillinerV2({ address, network }: ContractOpts) {
    return JonesMillinerV2__factory.connect(address, this.appToolkit.getViemNetworkProvider(network));
  }
  jonesStakingRewards({ address, network }: ContractOpts) {
    return JonesStakingRewards__factory.connect(address, this.appToolkit.getViemNetworkProvider(network));
  }
  jonesStakingRewardsFactory({ address, network }: ContractOpts) {
    return JonesStakingRewardsFactory__factory.connect(address, this.appToolkit.getViemNetworkProvider(network));
  }
  jonesStrategyToken({ address, network }: ContractOpts) {
    return JonesStrategyToken__factory.connect(address, this.appToolkit.getViemNetworkProvider(network));
  }
  jonesStrategyVault({ address, network }: ContractOpts) {
    return JonesStrategyVault__factory.connect(address, this.appToolkit.getViemNetworkProvider(network));
  }
  jonesVault({ address, network }: ContractOpts) {
    return JonesVault__factory.connect(address, this.appToolkit.getViemNetworkProvider(network));
  }
}
