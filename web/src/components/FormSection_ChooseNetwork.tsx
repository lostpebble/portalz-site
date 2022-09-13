import React, { useEffect } from "react";
import { IoMdInformationCircle } from "react-icons/io";
import { AppStore, EProgress } from "../state/AppStore";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";

// Default styles that can be overridden by your app
import "@solana/wallet-adapter-react-ui/styles.css";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { Flex, Text } from "@chakra-ui/react";

export interface ICPFormSection_ChooseNetwork {
  [prop: string]: any;
}

export const FormSection_ChooseNetwork: React.FC<ICPFormSection_ChooseNetwork> = () => {
  const { connection } = useConnection();
  const { publicKey, sendTransaction, connect, connected } = useWallet();
  const { setVisible } = useWalletModal();
  const [symbol] = AppStore.useState((s) => [s.formInputs.symbol] as const);

  // console.log({ connect, connected, connection });

  useEffect(() => {
    if (connected && symbol) {
      AppStore.update((s) => {
        s.formInputs.progress = EProgress.P1_SEND_AMOUNT;
      });
    }
  }, [connected, symbol]);

  return (
    <div id="formContentInput">
      <div className="formControl">
        <Flex align={"center"} gap={"0.5em"}>
          <Text>Select your network</Text>
          <IoMdInformationCircle />
        </Flex>
        <select>
          <option id={"sol"}> Solana</option>
          <option id={"btc"} disabled>
            {" "}
            Bitcoin
          </option>
        </select>
      </div>
      <button
        id="formSubmitButton"
        onClick={() => {
          setVisible(true);
          AppStore.update((s) => {
            s.formInputs.symbol = "sol";
          });
        }}
      >
        {" "}
        Connect
      </button>
    </div>
  );
};
