import { ESPLORA_URL } from "@env";

export const getBlockExplorerUrl = (
  blockExplorer: BlockExplorer,
  network: BitcoinNetwork,
): string => {
  if (network === "regtest") return ESPLORA_URL;

  const baseUrl =
    blockExplorer === "mempool.guide"
      ? "https://mempool.guide"
      : "https://mempool.space";

  return network === "testnet" ? `${baseUrl}/testnet` : baseUrl;
};
