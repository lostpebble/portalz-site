import React from "react";
import HeaderImage from "../assets/img/picture/landingbg.png";
import Circle1 from "../assets/img/picture/circle1.png";
import Circle2 from "../assets/img/picture/circle2.png";
import { IoMdInformationCircle } from "react-icons/io";
import { CgArrowsExchangeAlt } from "react-icons/cg";



function Form() {
    return (
        <div id="formContainer">
            <div id='imageWrapperContainer'>
                <div id="imageWrapper">
                    <img id='circle1' src={Circle1} />
                    <img id='circle2' src={Circle1} />
                    <img id='circle3' src={Circle2} />
                    <div id='homeImage'>
                        <img src={HeaderImage}  />
                    </div>
                </div>
            </div>
            <div id='formContent'>
                <div id='formContentTitle'>     
                    <h1> Get your NEAR in second </h1>
                    <p> Just like a portal from one place to another</p>
                </div>
                <div id='formContentInput'>     
                    <div className='formControl'>
                        <p> Select your network <IoMdInformationCircle/> </p>
                        <select>
                            <option> Solana </option>
                        </select>
                    </div>
                    <div className='formControl'>
                        <p> Receiver Address <IoMdInformationCircle/> </p>
                        <input type='text' placeholder='Ex: 2Mi1q7GGVFQkjCERZ4mDMMQ4Yq6MWVSHxgAkprf65b8A' />
                    </div>
                    <div className='flexControl'>
                        <div className='formControl'>
                            <p> You Send </p>
                            <input type='number' step='0.0001'  />
                        </div>
                        <CgArrowsExchangeAlt id='exchangeSvg'/>
                        <div className='formControl'>
                            <p> You Receive </p>
                            <input type='number' step='0.0001'  disabled/>
                        </div>
                    </div>
                    <button id='formSubmitButton'> Pay </button>
                </div>
            </div>
        </div>      
    );
}
  
export default Form;
  