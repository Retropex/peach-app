import { useState } from "react";
import { Header } from "../../../components/Header";
import { PeachScrollView } from "../../../components/PeachScrollView";
import { Screen } from "../../../components/Screen";
import { Button } from "../../../components/buttons/Button";
import { RadioButtons } from "../../../components/inputs/RadioButtons";
import { PeachText } from "../../../components/text/PeachText";
import { useSettingsStore } from "../../../store/settingsStore/useSettingsStore";
import tw from "../../../styles/tailwind";
import i18n from "../../../utils/i18n";

const blockExplorers: BlockExplorer[] = ["mempool.space", "mempool.guide"];

export const BlockExplorer = () => {
  const blockExplorer = useSettingsStore((state) => state.blockExplorer);
  const setBlockExplorer = useSettingsStore((state) => state.setBlockExplorer);

  const [selectedExplorer, setSelectedExplorer] =
    useState<BlockExplorer>(blockExplorer);

  const options = blockExplorers.map((explorer) => ({
    value: explorer,
    display: <PeachText>{explorer}</PeachText>,
  }));

  const submit = () => {
    setBlockExplorer(selectedExplorer);
  };

  const hasChanged = selectedExplorer !== blockExplorer;

  return (
    <Screen header={<Header title={i18n("settings.blockExplorer")} />}>
      <PeachScrollView contentContainerStyle={tw`justify-center flex-1`}>
        <PeachText style={tw`py-2 text-center mb-7 text-black-65`}>
          {i18n("settings.blockExplorer.description")}
        </PeachText>
        <RadioButtons
          items={options}
          selectedValue={selectedExplorer}
          onButtonPress={setSelectedExplorer}
        />
      </PeachScrollView>
      <Button
        onPress={submit}
        disabled={!hasChanged}
        style={tw`self-center min-w-52`}
      >
        {i18n(hasChanged ? "confirm" : "settings.blockExplorer.explorerSet")}
      </Button>
    </Screen>
  );
};
