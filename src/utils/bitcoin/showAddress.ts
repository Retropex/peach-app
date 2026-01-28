import { ESPLORA_URL } from "@env";
import { useSettingsStore } from "../../store/settingsStore/useSettingsStore";
import { openURL } from "../web/openURL";
import { getBlockExplorerUrl } from "./getBlockExplorerUrl";

export const showAddress = (address: string, network: BitcoinNetwork) => {
  const blockExplorer = useSettingsStore.getState().blockExplorer;
  const baseUrl = getBlockExplorerUrl(blockExplorer, network);
  const link = network === "regtest" ? `${ESPLORA_URL}/address/${address}` : `${baseUrl}/address/${address}`;
  
  return openURL(link);
};
