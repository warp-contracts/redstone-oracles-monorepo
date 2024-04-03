import { RedstoneCommon } from "@redstone-finance/utils";
import { z } from "zod";

export const ChainConfigSchema = z.object({
  chainId: z.number().positive(),
  name: z.string(),
  publicRpcUrls: z.string().url().array().readonly(),
  avgBlockTimeMs: z.number(),
});

export type ChainConfig = z.infer<typeof ChainConfigSchema>;

export const getChainConfigByChainId = (chainId: number) =>
  RedstoneCommon.assertThenReturn(
    Object.values(ChainConfigs).find((c) => c.chainId === chainId),
    `Failed to getChainConfigByChainId chainConfig not defined for ${chainId}`
  );

export const ChainConfigs = {
  hardhat: {
    name: "hardhat",
    chainId: 31337,
    publicRpcUrls: ["http://localhost:1337"],
    avgBlockTimeMs: 10,
  },
  ethereum: {
    name: "Ethereum Mainnet",
    chainId: 1,
    publicRpcUrls: [
      "https://rpc.ankr.com/eth",
      "https://eth.llamarpc.com",
      "https://eth-mainnet.public.blastapi.io",
      "https://endpoints.omniatech.io/v1/eth/mainnet/public",
      "https://ethereum.publicnode.com",
    ],
    avgBlockTimeMs: 12_000,
  },
  arbitrumOne: {
    name: "Arbitrum One",
    chainId: 42161,
    publicRpcUrls: [
      "https://arb1.arbitrum.io/rpc",
      "https://arbitrum-one.publicnode.com",
      "https://arbitrum-one.public.blastapi.io",
      "https://arbitrum.llamarpc.com",
      "https://1rpc.io/arb",
    ],
    avgBlockTimeMs: 250,
  },
  avalanche: {
    name: "Avalanche Network",
    chainId: 43114,
    publicRpcUrls: [
      "https://api.avax.network/ext/bc/C/rpc",
      "https://avalanche.blockpi.network/v1/rpc/public",
      "https://avax.meowrpc.com",
      "https://ava-mainnet.public.blastapi.io/ext/bc/C/rpc",
      "https://avalanche-c-chain.publicnode.com",
    ],
    avgBlockTimeMs: 2_000,
  },
  optimism: {
    name: "Optimism",
    chainId: 10,
    publicRpcUrls: [
      "https://mainnet.optimism.io",
      "https://optimism.publicnode.com",
      "https://optimism-mainnet.public.blastapi.io",
      "https://rpc.ankr.com/optimism",
      "https://1rpc.io/op",
      "https://optimism.blockpi.network/v1/rpc/public",
    ],
    avgBlockTimeMs: 2_000,
  },
  polygon: {
    name: "Polygon Mainnet",
    chainId: 137,
    publicRpcUrls: [
      "https://polygon.llamarpc.com",
      "https://polygon.blockpi.network/v1/rpc/public",
      "https://polygon-mainnet.public.blastapi.io",
      "https://polygon.rpc.blxrbdn.com",
      "https://rpc-mainnet.matic.quiknode.pro",
    ],
    avgBlockTimeMs: 2_000,
  },
  celo: {
    name: "Celo Mainnet",
    chainId: 42220,
    publicRpcUrls: ["https://forno.celo.org"],
    avgBlockTimeMs: 5_000,
  },
  base: {
    name: "Base Mainnet",
    chainId: 8453,
    publicRpcUrls: [
      "https://base.llamarpc.com",
      "https://base.publicnode.com",
      "https://base-mainnet.public.blastapi.io",
      "https://mainnet.base.org",
    ],
    avgBlockTimeMs: 5_000,
  },
  canto: {
    name: "Canto",
    chainId: 7700,
    publicRpcUrls: [
      "https://canto.slingshot.finance",
      "https://canto.gravitychain.io",
      "https://mainnode.plexnode.org:8545",
      "https://canto-rpc.ansybl.io",
      "https://canto.dexvaults.com",
    ],
    avgBlockTimeMs: 6_000,
  },
  manta: {
    name: "Manta Pacific Mainnet",
    chainId: 169,
    publicRpcUrls: [
      "https://pacific-rpc.manta.network/http",
      "https://1rpc.io/manta",
      "https://manta-pacific-aperture.calderachain.xyz/http",
      "https://manta-pacific-gascap.calderachain.xyz/http",
    ],
    avgBlockTimeMs: 10_000,
  },
  blast: {
    name: "Blast Mainnet",
    chainId: 81457,
    publicRpcUrls: [
      "https://rpc.blast.io",
      "https://rpc.ankr.com/blast",
      "https://blast.din.dev/rpc",
      "https://blastl2-mainnet.public.blastapi.io",
      "https://blast.blockpi.network/v1/rpc/public",
    ],
    avgBlockTimeMs: 2_000,
  },
  "etherlink-ghostnet": {
    name: "Etherlink Ghostnet",
    chainId: 128123,
    publicRpcUrls: ["https://node.ghostnet.etherlink.com"],
    avgBlockTimeMs: 6_000,
  },
  mode: {
    name: "Mode Mainnet",
    chainId: 34443,
    publicRpcUrls: [
      "https://node.ghostnet.etherlink.com",
      "https://1rpc.io/mode",
    ],
    avgBlockTimeMs: 2_000,
  },
  mantle: {
    name: "Mantle",
    chainId: 5000,
    publicRpcUrls: [
      "https://mantle-rpc.publicnode.com",
      "https://mantle-mainnet.public.blastapi.io",
      "https://mantle.drpc.org",
      "https://rpc.ankr.com/mantle",
      "https://1rpc.io/mantle",
      "https://rpc.mantle.xyz",
    ],
    avgBlockTimeMs: 2_000,
  },
  "ethereum-sepolia": {
    name: "Ethereum Sepolia",
    chainId: 11155111,
    publicRpcUrls: [
      "https://rpc.sepolia.ethpandaops.io",
      "https://rpc.sepolia.org",
      "https://ethereum-sepolia-rpc.publicnode.com",
      "https://1rpc.io/sepolia",
    ],
    avgBlockTimeMs: 12_000,
  },
  bnb: {
    name: "Binance chain",
    chainId: 56,
    publicRpcUrls: [
      "https://binance.llamarpc.com",
      "https://bsc-dataseed.bnbchain.org",
      "https://bsc-pokt.nodies.app",
      "https://bscrpc.com",
      "https://binance.nodereal.io",
      "https://1rpc.io/bnb",
    ],
    avgBlockTimeMs: 3_000,
  },
  "bnb-testnet": {
    name: "Binance chain testnet",
    chainId: 97,
    publicRpcUrls: [
      "https://bsctestapi.terminet.io/rpc",
      "https://bsc-testnet.public.blastapi.io",
      "https://bsc-testnet-rpc.publicnode.com",
      "https://bsc-testnet.blockpi.network/v1/rpc/public",
    ],
    avgBlockTimeMs: 3_000,
  },
  "blast-testnet": {
    name: "Blast Testnet",
    chainId: 23888,
    publicRpcUrls: ["http://testnet-rpc.blastblockchain.com"],
    avgBlockTimeMs: 2_000,
  },
  "celo-baklava": {
    name: "Celo baklava",
    chainId: 62320,
    publicRpcUrls: ["https://baklava-forno.celo-testnet.org"],
    avgBlockTimeMs: 5_000,
  },
  hubble: {
    name: "Hubble",
    chainId: 1992,
    publicRpcUrls: ["https://rpc.hubble.exchange"],
    avgBlockTimeMs: 1_500,
  },
  kava: {
    name: "Kava",
    chainId: 2222,
    publicRpcUrls: [
      "https://evm.kava.io",
      "https://kava.api.onfinality.io/public",
      "https://kava-evm-rpc.publicnode.com",
      "https://kava-pokt.nodies.app",
      "https://evm.kava-rpc.com",
      "https://kava.drpc.org",
    ],
    avgBlockTimeMs: 6_000,
  },
};
