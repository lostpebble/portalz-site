import React from "react";
import HeaderImage from "../assets/img/picture/landingbg.png";
import Circle1 from "../assets/img/picture/circle1.png";
import Circle2 from "../assets/img/picture/circle2.png";
import { IoMdInformationCircle } from "react-icons/io";
import { CgArrowsExchangeAlt } from "react-icons/cg";
import { AppStore } from "../state/AppStore";
import { FormSection_ChooseNetwork } from "./FormSection_ChooseNetwork";

function Form() {
  const [{ symbol, amount }] = AppStore.useState((s) => [s.formInputs] as const);

  return (
    <div id="formContainer">
      <div id="imageWrapperContainer">
        <div id="imageWrapper">
          <img id="circle1" src={Circle1} />
          <img id="circle2" src={Circle1} />
          <img id="circle3" src={Circle2} />
          <div id="homeImage">
            <img src={HeaderImage} />
          </div>
        </div>
      </div>
      <div id="formContent">
        <div id="formContentTitle">
          <h1> Get your NEAR in a second </h1>
          <p> A portal for your assets</p>
        </div>
      </div>
      <FormSection_ChooseNetwork />
    </div>
  );
}

export default Form;
