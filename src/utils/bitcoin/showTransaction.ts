import { ESPLORA_URL } from "@env";
import { useSettingsStore } from "../../store/settingsStore/useSettingsStore";
import { openURL } from "../web/openURL";
import { getBlockExplorerUrl } from "./getBlockExplorerUrl";

export const showTransaction = (txId: string, network: BitcoinNetwork) => {
  const blockExplorer = useSettingsStore.getState().blockExplorer;
  const baseUrl = getBlockExplorerUrl(blockExplorer, network);
  const link = network === "regtest" ? `${ESPLORA_URL}/tx/${txId}` : `${baseUrl}/tx/${txId}`;

  return openURL(link);
};
