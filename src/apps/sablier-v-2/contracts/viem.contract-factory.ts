import { Injectable, Inject } from '@nestjs/common';

import { IAppToolkit, APP_TOOLKIT } from '~app-toolkit/app-toolkit.interface';
import { Network } from '~types/network.interface';

import {
  SablierV2LockupDynamicV20__factory,
  SablierV2LockupDynamicV21__factory,
  SablierV2LockupLinearV20__factory,
  SablierV2LockupLinearV21__factory,
} from './viem';

type ContractOpts = { address: string; network: Network };

@Injectable()
export class SablierV2ViemContractFactory {
  constructor(@Inject(APP_TOOLKIT) protected readonly appToolkit: IAppToolkit) {}

  sablierV2LockupDynamicV20({ address, network }: ContractOpts) {
    return SablierV2LockupDynamicV20__factory.connect(address, this.appToolkit.getViemNetworkProvider(network));
  }
  sablierV2LockupDynamicV21({ address, network }: ContractOpts) {
    return SablierV2LockupDynamicV21__factory.connect(address, this.appToolkit.getViemNetworkProvider(network));
  }
  sablierV2LockupLinearV20({ address, network }: ContractOpts) {
    return SablierV2LockupLinearV20__factory.connect(address, this.appToolkit.getViemNetworkProvider(network));
  }
  sablierV2LockupLinearV21({ address, network }: ContractOpts) {
    return SablierV2LockupLinearV21__factory.connect(address, this.appToolkit.getViemNetworkProvider(network));
  }
}
