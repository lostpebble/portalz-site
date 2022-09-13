import React from "react";
import { IoMdInformationCircle } from "react-icons/io";
import { AppStore } from "../state/AppStore";
import { CgArrowsExchangeAlt } from "react-icons/cg";

export interface ICPFormSection_ChooseNetwork {
  [prop: string]: any;
}

export const FormSection_ChooseNetwork: React.FC<ICPFormSection_ChooseNetwork> = () => {
  return (
    <div id="formContentInput">
      <div className="formControl">
        <p>
          {" "}
          Select your network <IoMdInformationCircle />
        </p>
        <select
          onChange={(e) => {
            const index = e.target.selectedIndex;
            const optionElement: any = e.target.childNodes[index]!;
            const optionElementId = optionElement.getAttribute("id");

            AppStore.update((s) => {
              s.formInputs.symbol = optionElementId;
            });
          }}
        >
          <option id={"sol"}> Solana</option>
          <option id={"btc"} disabled>
            {" "}
            Bitcoin
          </option>
        </select>
      </div>
      <div className="formControl">
        <p>
          {" "}
          Receiver Address <IoMdInformationCircle />
        </p>
        <input type="text" placeholder="Ex: 2Mi1q7GGVFQkjCERZ4mDMMQ4Yq6MWVSHxgAkprf65b8A" />
      </div>
      <div className="flexControl">
        <div className="formControl">
          <p> You Send </p>
          <input type="number" step="0.0001" />
        </div>
        <CgArrowsExchangeAlt id="exchangeSvg" />
        <div className="formControl">
          <p> You Receive </p>
          <input type="number" step="0.0001" disabled />
        </div>
      </div>
      <button id="formSubmitButton"> Pay</button>
    </div>
  );
};
