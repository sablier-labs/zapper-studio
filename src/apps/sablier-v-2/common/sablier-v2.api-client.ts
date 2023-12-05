import { Injectable } from '@nestjs/common';
import { gql } from 'graphql-request';

import { gqlFetch } from '~app-toolkit/helpers/the-graph.helper';

export enum CHAINS {
  ETHEREUM = 1,
  ARBITRUM = 42161,
  AVALANCHE = 43114,
  BASE = 8453,
  BSC = 56,
  OPTIMISM = 10,
  POLYGON = 137,
  GNOSIS = 100,
}

export enum CoreCategory {
  LOCKUP_LINEAR_20 = 'LockupLinear20',
  LOCKUP_DYNAMIC_20 = 'LockupDynamic20',
  LOCKUP_LINEAR_21 = 'LockupLinear21',
  LOCKUP_DYNAMIC_21 = 'LockupDynamic21',
}

export const contracts: Record<number, Record<string, { alias: string; address: string; subgraph: string }>> = {
  [CHAINS.ETHEREUM]: {
    [CoreCategory.LOCKUP_LINEAR_20]: {
      alias: 'LockupLinear (LL)', // SablierV2LockupLinear
      address: '0xb10daee1fcf62243ae27776d7a92d39dc8740f95',
      subgraph: 'https://api.thegraph.com/subgraphs/name/sablier-labs/sablier-v2?source=zapper',
    },
    [CoreCategory.LOCKUP_DYNAMIC_20]: {
      alias: 'LockupDynamic (LD)', // SablierV2LockupDynamic
      address: '0x39efdc3dbb57b2388ccc4bb40ac4cb1226bc9e44',
      subgraph: 'https://api.thegraph.com/subgraphs/name/sablier-labs/sablier-v2?source=zapper',
    },
    [CoreCategory.LOCKUP_LINEAR_21]: {
      alias: 'LockupLinear2 (LL2)', // SablierV2LockupLinear
      address: '0x5b82362ad180fb39d7501264530e4701d4ad0143',
      subgraph: 'https://api.thegraph.com/subgraphs/name/sablier-labs/sablier-v2?source=zapper',
    },
    [CoreCategory.LOCKUP_DYNAMIC_21]: {
      alias: 'LockupDynamic2 (LD2)', // SablierV2LockupDynamic
      address: '0xe0faf09b8c28f7a1e21a685a1beb5f60a2e5e76c',
      subgraph: 'https://api.thegraph.com/subgraphs/name/sablier-labs/sablier-v2?source=zapper',
    },
  },
  [CHAINS.POLYGON]: {
    [CoreCategory.LOCKUP_LINEAR_20]: {
      alias: 'LockupLinear (LL)', // SablierV2LockupLinear
      address: '0x67422c3e36a908d5c3237e9cffeb40bde7060f6e',
      subgraph: 'https://api.thegraph.com/subgraphs/name/sablier-labs/sablier-v2-polygon?source=zapper',
    },
    [CoreCategory.LOCKUP_DYNAMIC_20]: {
      alias: 'LockupDynamic (LD)', // SablierV2LockupDynamic
      address: '0x7313addb53f96a4f710d3b91645c62b434190725',
      subgraph: 'https://api.thegraph.com/subgraphs/name/sablier-labs/sablier-v2-polygon?source=zapper',
    },
    [CoreCategory.LOCKUP_LINEAR_21]: {
      alias: 'LockupLinear2 (LL2)', // SablierV2LockupLinear
      address: '0x5b82362ad180fb39d7501264530e4701d4ad0143',
      subgraph: 'https://api.thegraph.com/subgraphs/name/sablier-labs/sablier-v2-polygon?source=zapper',
    },
    [CoreCategory.LOCKUP_DYNAMIC_21]: {
      alias: 'LockupDynamic2 (LD2)', // SablierV2LockupDynamic
      address: '0xe0faf09b8c28f7a1e21a685a1beb5f60a2e5e76c',
      subgraph: 'https://api.thegraph.com/subgraphs/name/sablier-labs/sablier-v2-polygon?source=zapper',
    },
  },
  [CHAINS.ARBITRUM]: {
    [CoreCategory.LOCKUP_LINEAR_20]: {
      alias: 'LockupLinear (LL)', // SablierV2LockupLinear
      address: '0x197d655f3be03903fd25e7828c3534504bfe525e',
      subgraph: 'https://api.thegraph.com/subgraphs/name/sablier-labs/sablier-v2-arbitrum?source=zapper',
    },
    [CoreCategory.LOCKUP_DYNAMIC_20]: {
      alias: 'LockupDynamic (LD)', // SablierV2LockupDynamic
      address: '0xa9efbef1a35ff80041f567391bdc9813b2d50197',
      subgraph: 'https://api.thegraph.com/subgraphs/name/sablier-labs/sablier-v2-arbitrum?source=zapper',
    },
    [CoreCategory.LOCKUP_LINEAR_21]: {
      alias: 'LockupLinear2 (LL2)', // SablierV2LockupLinear
      address: '0x5b82362ad180fb39d7501264530e4701d4ad0143',
      subgraph: 'https://api.thegraph.com/subgraphs/name/sablier-labs/sablier-v2-arbitrum?source=zapper',
    },
    [CoreCategory.LOCKUP_DYNAMIC_21]: {
      alias: 'LockupDynamic2 (LD2)', // SablierV2LockupDynamic
      address: '0xe0faf09b8c28f7a1e21a685a1beb5f60a2e5e76c',
      subgraph: 'https://api.thegraph.com/subgraphs/name/sablier-labs/sablier-v2-arbitrum?source=zapper',
    },
  },
  [CHAINS.AVALANCHE]: {
    [CoreCategory.LOCKUP_LINEAR_20]: {
      alias: 'LockupLinear (LL)', // SablierV2LockupLinear
      address: '0x610346e9088afa70d6b03e96a800b3267e75ca19',
      subgraph: 'https://api.thegraph.com/subgraphs/name/sablier-labs/sablier-v2-avalanche?source=zapper',
    },
    [CoreCategory.LOCKUP_DYNAMIC_20]: {
      alias: 'LockupDynamic (LD)', // SablierV2LockupDynamic
      address: '0x665d1c8337f1035cfbe13dd94bb669110b975f5f',
      subgraph: 'https://api.thegraph.com/subgraphs/name/sablier-labs/sablier-v2-avalanche?source=zapper',
    },
    [CoreCategory.LOCKUP_LINEAR_21]: {
      alias: 'LockupLinear2 (LL2)', // SablierV2LockupLinear
      address: '0x5b82362ad180fb39d7501264530e4701d4ad0143',
      subgraph: 'https://api.thegraph.com/subgraphs/name/sablier-labs/sablier-v2-avalanche?source=zapper',
    },
    [CoreCategory.LOCKUP_DYNAMIC_21]: {
      alias: 'LockupDynamic2 (LD2)', // SablierV2LockupDynamic
      address: '0xe0faf09b8c28f7a1e21a685a1beb5f60a2e5e76c',
      subgraph: 'https://api.thegraph.com/subgraphs/name/sablier-labs/sablier-v2-avalanche?source=zapper',
    },
  },
  [CHAINS.GNOSIS]: {
    [CoreCategory.LOCKUP_LINEAR_20]: {
      alias: 'LockupLinear (LL)', // SablierV2LockupLinear
      address: '0x685e92c9ca2bb23f1b596d0a7d749c0603e88585',
      subgraph: 'https://api.thegraph.com/subgraphs/name/sablier-labs/sablier-v2-gnosis?source=zapper',
    },
    [CoreCategory.LOCKUP_DYNAMIC_20]: {
      alias: 'LockupDynamic (LD)', // SablierV2LockupDynamic
      address: '0xeb148e4ec13aaa65328c0ba089a278138e9e53f9',
      subgraph: 'https://api.thegraph.com/subgraphs/name/sablier-labs/sablier-v2-gnosis?source=zapper',
    },
    [CoreCategory.LOCKUP_LINEAR_21]: {
      alias: 'LockupLinear2 (LL2)', // SablierV2LockupLinear
      address: '0x5b82362ad180fb39d7501264530e4701d4ad0143',
      subgraph: 'https://api.thegraph.com/subgraphs/name/sablier-labs/sablier-v2-gnosis?source=zapper',
    },
    [CoreCategory.LOCKUP_DYNAMIC_21]: {
      alias: 'LockupDynamic2 (LD2)', // SablierV2LockupDynamic
      address: '0xe0faf09b8c28f7a1e21a685a1beb5f60a2e5e76c',
      subgraph: 'https://api.thegraph.com/subgraphs/name/sablier-labs/sablier-v2-gnosis?source=zapper',
    },
  },
  [CHAINS.BSC]: {
    [CoreCategory.LOCKUP_LINEAR_20]: {
      alias: 'LockupLinear (LL)', // SablierV2LockupLinear
      address: '0x3fe4333f62a75c2a85c8211c6aefd1b9bfde6e51',
      subgraph: 'https://api.thegraph.com/subgraphs/name/sablier-labs/sablier-v2-bsc?source=zapper',
    },
    [CoreCategory.LOCKUP_DYNAMIC_20]: {
      alias: 'LockupDynamic (LD)', // SablierV2LockupDynamic
      address: '0xf2f3fef2454dca59eca929d2d8cd2a8669cc6214',
      subgraph: 'https://api.thegraph.com/subgraphs/name/sablier-labs/sablier-v2-bsc?source=zapper',
    },
    [CoreCategory.LOCKUP_LINEAR_21]: {
      alias: 'LockupLinear2 (LL2)', // SablierV2LockupLinear
      address: '0x5b82362ad180fb39d7501264530e4701d4ad0143',
      subgraph: 'https://api.thegraph.com/subgraphs/name/sablier-labs/sablier-v2-bsc?source=zapper',
    },
    [CoreCategory.LOCKUP_DYNAMIC_21]: {
      alias: 'LockupDynamic2 (LD2)', // SablierV2LockupDynamic
      address: '0xe0faf09b8c28f7a1e21a685a1beb5f60a2e5e76c',
      subgraph: 'https://api.thegraph.com/subgraphs/name/sablier-labs/sablier-v2-bsc?source=zapper',
    },
  },
  [CHAINS.OPTIMISM]: {
    [CoreCategory.LOCKUP_LINEAR_20]: {
      alias: 'LockupLinear (LL)', // SablierV2LockupLinear
      address: '0xb923abdca17aed90eb5ec5e407bd37164f632bfd',
      subgraph: 'https://api.thegraph.com/subgraphs/name/sablier-labs/sablier-v2-optimism?source=zapper',
    },
    [CoreCategory.LOCKUP_DYNAMIC_20]: {
      alias: 'LockupDynamic (LD)', // SablierV2LockupDynamic
      address: '0x6f68516c21e248cddfaf4898e66b2b0adee0e0d6',
      subgraph: 'https://api.thegraph.com/subgraphs/name/sablier-labs/sablier-v2-optimism?source=zapper',
    },
    [CoreCategory.LOCKUP_LINEAR_21]: {
      alias: 'LockupLinear2 (LL2)', // SablierV2LockupLinear
      address: '0x5b82362ad180fb39d7501264530e4701d4ad0143',
      subgraph: 'https://api.thegraph.com/subgraphs/name/sablier-labs/sablier-v2-optimism?source=zapper',
    },
    [CoreCategory.LOCKUP_DYNAMIC_21]: {
      alias: 'LockupDynamic2 (LD2)', // SablierV2LockupDynamic
      address: '0xe0faf09b8c28f7a1e21a685a1beb5f60a2e5e76c',
      subgraph: 'https://api.thegraph.com/subgraphs/name/sablier-labs/sablier-v2-optimism?source=zapper',
    },
  },
  [CHAINS.BASE]: {
    [CoreCategory.LOCKUP_LINEAR_20]: {
      alias: 'LockupLinear (LL)', // SablierV2LockupLinear
      address: '0x6b9a46c8377f21517e65fa3899b3a9fab19d17f5',
      subgraph: 'https://api.thegraph.com/subgraphs/name/sablier-labs/sablier-v2-base?source=zapper',
    },
    [CoreCategory.LOCKUP_DYNAMIC_20]: {
      alias: 'LockupDynamic (LD)', // SablierV2LockupDynamic
      address: '0x645b00960dc352e699f89a81fc845c0c645231cf',
      subgraph: 'https://api.thegraph.com/subgraphs/name/sablier-labs/sablier-v2-base?source=zapper',
    },
    [CoreCategory.LOCKUP_LINEAR_21]: {
      alias: 'LockupLinear2 (LL2)', // SablierV2LockupLinear
      address: '0x5b82362ad180fb39d7501264530e4701d4ad0143',
      subgraph: 'https://api.thegraph.com/subgraphs/name/sablier-labs/sablier-v2-base?source=zapper',
    },
    [CoreCategory.LOCKUP_DYNAMIC_21]: {
      alias: 'LockupDynamic2 (LD2)', // SablierV2LockupDynamic
      address: '0xe0faf09b8c28f7a1e21a685a1beb5f60a2e5e76c',
      subgraph: 'https://api.thegraph.com/subgraphs/name/sablier-labs/sablier-v2-base?source=zapper',
    },
  },
};

export const getAssets = gql`
  query getAssets {
    assets(first: 1000) {
      id
    }
  }
`;

export type SablierV2AssetResponse = {
  assets: {
    id: string;
  }[];
};

export const getLinearStreamsQuery = gql`
  query getStreams($address: String!, $version: String!) {
    streams: streams(where: { recipient: $address, category: LockupLinear, version: $version }) {
      id
      asset {
        address
      }
    }
  }
`;

export const getDynamicStreamsQuery = gql`
  query getStreams($address: String!, $version: String!) {
    streams: streams(where: { recipient: $address, category: LockupDynamic, version: $version }) {
      id
      asset {
        address
      }
    }
  }
`;

export type SablierStreamsResponse = {
  streams: {
    id: string;
    asset: { address: string };
  }[];
};

@Injectable()
export class SablierV2ApiClient {
  async getTokens(chain: CHAINS) {
    const endpoint = contracts[chain][CoreCategory.LOCKUP_LINEAR_20].subgraph;
    const tokensResponse = await gqlFetch<SablierV2AssetResponse>({
      endpoint,
      query: getAssets,
    });

    return tokensResponse.assets.map(({ id }) => id.toLowerCase());
  }

  async getStreams(address: string, chain: CHAINS, category: CoreCategory) {
    const endpoint = contracts[chain][category].subgraph;
    const query = [CoreCategory.LOCKUP_LINEAR_20, CoreCategory.LOCKUP_LINEAR_21].includes(category)
      ? getLinearStreamsQuery
      : getDynamicStreamsQuery;
    const version = [CoreCategory.LOCKUP_LINEAR_20, CoreCategory.LOCKUP_DYNAMIC_20].includes(category) ? 'V20' : 'V21';

    const streamsResponse = await gqlFetch<SablierStreamsResponse>({
      endpoint,
      query,
      variables: { address: address, version: version },
    });

    const streams = [...streamsResponse.streams];

    return streams.map(s => ({ streamId: s.id, tokenAddress: s.asset.address }));
  }
}
