import React from "react";
import { IoMdInformationCircle } from "react-icons/io";
import { AppStore } from "../state/AppStore";
import { CgArrowsExchangeAlt } from "react-icons/cg";
import { Flex, Text } from "@chakra-ui/react";

export interface ICPFormSection_ChooseNetwork {
  [prop: string]: any;
}

export const FormSection_Sending: React.FC<ICPFormSection_ChooseNetwork> = () => {
  return (
    <div id="formContentInput">
      <div className="flexControl">
        <div className="formControl">
          <p> You Send </p>
          <Flex align={"center"} gap={"0.5em"}>
            <input type="number" step="0.0001" />
            <Text fontWeight={800}>SOL</Text>
          </Flex>
        </div>
        <CgArrowsExchangeAlt id="exchangeSvg" />
        <div className="formControl">
          <p> You Receive </p>
          <input type="number" step="0.0001" disabled />
        </div>
      </div>
      <div className="formControl">
        <p>
          {" "}
          Receiver Address <IoMdInformationCircle />
        </p>
        <input type="text" placeholder="Ex: 2Mi1q7GGVFQkjCERZ4mDMMQ4Yq6MWVSHxgAkprf65b8A" />
      </div>
      <button id="formSubmitButton"> Pay</button>
    </div>
  );
};
