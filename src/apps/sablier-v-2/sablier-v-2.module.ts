import { Module } from '@nestjs/common';

import { AbstractApp } from '~app/app.dynamic-module';

import { ArbitrumSablierV2LockupDynamic2ContractPositionFetcher } from './arbitrum/sablier-v-2.lockup-dynamic-2.contract-position-fetcher';
import { ArbitrumSablierV2LockupDynamicContractPositionFetcher } from './arbitrum/sablier-v-2.lockup-dynamic.contract-position-fetcher';
import { ArbitrumSablierV2LockupLinear2ContractPositionFetcher } from './arbitrum/sablier-v-2.lockup-linear-2.contract-position-fetcher';
import { ArbitrumSablierV2LockupLinearContractPositionFetcher } from './arbitrum/sablier-v-2.lockup-linear.contract-position-fetcher';
import { AvalancheSablierV2LockupDynamic2ContractPositionFetcher } from './avalanche/sablier-v-2.lockup-dynamic-2.contract-position-fetcher';
import { AvalancheSablierV2LockupDynamicContractPositionFetcher } from './avalanche/sablier-v-2.lockup-dynamic.contract-position-fetcher';
import { AvalancheSablierV2LockupLinear2ContractPositionFetcher } from './avalanche/sablier-v-2.lockup-linear-2.contract-position-fetcher';
import { AvalancheSablierV2LockupLinearContractPositionFetcher } from './avalanche/sablier-v-2.lockup-linear.contract-position-fetcher';
import { BaseSablierV2LockupDynamic2ContractPositionFetcher } from './base/sablier-v-2.lockup-dynamic-2.contract-position-fetcher';
import { BaseSablierV2LockupDynamicContractPositionFetcher } from './base/sablier-v-2.lockup-dynamic.contract-position-fetcher';
import { BaseSablierV2LockupLinear2ContractPositionFetcher } from './base/sablier-v-2.lockup-linear-2.contract-position-fetcher';
import { BaseSablierV2LockupLinearContractPositionFetcher } from './base/sablier-v-2.lockup-linear.contract-position-fetcher';
import { BinanceSmartChainSablierV2LockupDynamic2ContractPositionFetcher } from './binance-smart-chain/sablier-v-2.lockup-dynamic-2.contract-position-fetcher';
import { BinanceSmartChainSablierV2LockupDynamicContractPositionFetcher } from './binance-smart-chain/sablier-v-2.lockup-dynamic.contract-position-fetcher';
import { BinanceSmartChainSablierV2LockupLinear2ContractPositionFetcher } from './binance-smart-chain/sablier-v-2.lockup-linear-2.contract-position-fetcher';
import { BinanceSmartChainSablierV2LockupLinearContractPositionFetcher } from './binance-smart-chain/sablier-v-2.lockup-linear.contract-position-fetcher';
import { SablierV2ApiClient } from './common/sablier-v2.api-client';
import { SablierV2ViemContractFactory } from './contracts';
import { EthereumSablierV2LockupDynamic2ContractPositionFetcher } from './ethereum/sablier-v-2.lockup-dynamic-2.contract-position-fetcher';
import { EthereumSablierV2LockupDynamicContractPositionFetcher } from './ethereum/sablier-v-2.lockup-dynamic.contract-position-fetcher';
import { EthereumSablierV2LockupLinear2ContractPositionFetcher } from './ethereum/sablier-v-2.lockup-linear-2.contract-position-fetcher';
import { EthereumSablierV2LockupLinearContractPositionFetcher } from './ethereum/sablier-v-2.lockup-linear.contract-position-fetcher';
import { GnosisSablierV2LockupDynamic2ContractPositionFetcher } from './gnosis/sablier-v-2.lockup-dynamic-2.contract-position-fetcher';
import { GnosisSablierV2LockupDynamicContractPositionFetcher } from './gnosis/sablier-v-2.lockup-dynamic.contract-position-fetcher';
import { GnosisSablierV2LockupLinear2ContractPositionFetcher } from './gnosis/sablier-v-2.lockup-linear-2.contract-position-fetcher';
import { GnosisSablierV2LockupLinearContractPositionFetcher } from './gnosis/sablier-v-2.lockup-linear.contract-position-fetcher';
import { OptimismSablierV2LockupDynamic2ContractPositionFetcher } from './optimism/sablier-v-2.lockup-dynamic-2.contract-position-fetcher';
import { OptimismSablierV2LockupDynamicContractPositionFetcher } from './optimism/sablier-v-2.lockup-dynamic.contract-position-fetcher';
import { OptimismSablierV2LockupLinear2ContractPositionFetcher } from './optimism/sablier-v-2.lockup-linear-2.contract-position-fetcher';
import { OptimismSablierV2LockupLinearContractPositionFetcher } from './optimism/sablier-v-2.lockup-linear.contract-position-fetcher';
import { PolygonSablierV2LockupDynamic2ContractPositionFetcher } from './polygon/sablier-v-2.lockup-dynamic-2.contract-position-fetcher';
import { PolygonSablierV2LockupDynamicContractPositionFetcher } from './polygon/sablier-v-2.lockup-dynamic.contract-position-fetcher';
import { PolygonSablierV2LockupLinear2ContractPositionFetcher } from './polygon/sablier-v-2.lockup-linear-2.contract-position-fetcher';
import { PolygonSablierV2LockupLinearContractPositionFetcher } from './polygon/sablier-v-2.lockup-linear.contract-position-fetcher';

@Module({
  providers: [
    ArbitrumSablierV2LockupDynamic2ContractPositionFetcher,
    ArbitrumSablierV2LockupDynamicContractPositionFetcher,
    ArbitrumSablierV2LockupLinear2ContractPositionFetcher,
    ArbitrumSablierV2LockupLinearContractPositionFetcher,
    AvalancheSablierV2LockupDynamic2ContractPositionFetcher,
    AvalancheSablierV2LockupDynamicContractPositionFetcher,
    AvalancheSablierV2LockupLinear2ContractPositionFetcher,
    AvalancheSablierV2LockupLinearContractPositionFetcher,
    BaseSablierV2LockupDynamic2ContractPositionFetcher,
    BaseSablierV2LockupDynamicContractPositionFetcher,
    BaseSablierV2LockupLinear2ContractPositionFetcher,
    BaseSablierV2LockupLinearContractPositionFetcher,
    BinanceSmartChainSablierV2LockupDynamic2ContractPositionFetcher,
    BinanceSmartChainSablierV2LockupDynamicContractPositionFetcher,
    BinanceSmartChainSablierV2LockupLinear2ContractPositionFetcher,
    BinanceSmartChainSablierV2LockupLinearContractPositionFetcher,
    EthereumSablierV2LockupDynamic2ContractPositionFetcher,
    EthereumSablierV2LockupDynamicContractPositionFetcher,
    EthereumSablierV2LockupLinear2ContractPositionFetcher,
    EthereumSablierV2LockupLinearContractPositionFetcher,
    GnosisSablierV2LockupDynamic2ContractPositionFetcher,
    GnosisSablierV2LockupDynamicContractPositionFetcher,
    GnosisSablierV2LockupLinear2ContractPositionFetcher,
    GnosisSablierV2LockupLinearContractPositionFetcher,
    OptimismSablierV2LockupDynamic2ContractPositionFetcher,
    OptimismSablierV2LockupDynamicContractPositionFetcher,
    OptimismSablierV2LockupLinear2ContractPositionFetcher,
    OptimismSablierV2LockupLinearContractPositionFetcher,
    PolygonSablierV2LockupDynamic2ContractPositionFetcher,
    PolygonSablierV2LockupDynamicContractPositionFetcher,
    PolygonSablierV2LockupLinear2ContractPositionFetcher,
    PolygonSablierV2LockupLinearContractPositionFetcher,
    SablierV2ViemContractFactory,
    SablierV2ApiClient,
  ],
})
export class SablierV2AppModule extends AbstractApp() {}
