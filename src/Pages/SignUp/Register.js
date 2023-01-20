import React, { useEffect, useState } from "react";
import style from "./Register.module.css";
import CustomButton from "../../Atom/CustomButton/CustomButton";
import { isValidEmail, isValidMobile, isValidString } from "../../helper";
import styleDob from "../../Components/Dob/Dob.module.css";
import Input from "../../Atom/Input/Input";
import { Link } from "react-router-dom";
import { Month, Date, Dayy } from "../../Components/Dob/Dob";
import { useSetRecoilState } from "recoil";
import { isLoginAtom } from "../../Recoil/Atom1/Atom";
import { useNavigate } from "react-router-dom";

function Register() {
  const [isRequestForLogin, setIsRequestFoLogin] = useState(false);
  const [form, Setform] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [next, setNext] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);
  const [incl, setIncl] = useState(0);
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [date, setDate] = useState("");
  const [emailError, setEmailError] = useState();
  const [nameError, setNameError] = useState();
  const [phoneError, setPhoneError] = useState();
  const [dobError, setDobError] = useState();
  const setLoginStatus = useSetRecoilState(isLoginAtom);
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("userDetails")) {
      let data = JSON.parse(localStorage.getItem("userDetails"));
      setData(data);
      console.log(data);
    }
  }, []);
  function Form() {
    Setform(true);
  }
  function ToggleEU() {
    setToggle(!toggle);
  }
  function handleName(inputName) {
    setName(inputName);
  }
  function handleMobile(inputMobile) {
    setPhone(inputMobile);
  }
  function handleEmail(inputEmail) {
    setEmail(inputEmail);
  }
  function handleMonth(inputMonth) {
    setMonth(inputMonth);
  }
  function handleDate(inputDate) {
    setDate(inputDate);
  }
  function handleDay(inputDay) {
    setDay(inputDay);
  }

  function submitFunction() {
    console.log(date);
    const Data = {
      Name: name,
      Phone: phone,
      Email: email,

      Month: month,
      Year: day,
      Date: date,
    };

    let flag = 0;
    if (!isValidString(name)) {
      setNameError("Incorrect Name");
      flag = 0;
    } else {
      flag = 1;
      setNameError("");
    }
    if (toggle === true) {
      if (!isValidMobile(phone)) {
        setPhoneError("Incorrect Phone");
        flag = 0;
      } else {
        flag = 1;
        setPhoneError("");
      }
    } else {
      if (!isValidEmail(email)) {
        setEmailError("Incorrect email");

        flag = 0;
      } else {
        flag = 1;
        setEmailError("");
      }
    }

    if (Data.Month == "" || Data.Date == "" || Data.Year == "") {
      flag = 0;
      setDobError("Give DOB Proberly");
    } else {
      setDobError("");
    }

    if (flag == 1) {
      localStorage.setItem("user" + incl, JSON.stringify(Data));
      setIncl(incl + 1);
      alert("Sucessfully stored");
      setLoginStatus(true);
      // window.location.assign("/");/
      navigate("/");
    }
  }
  return (
    <div className={style.container}>
      <div className={style.container1}>
        <div className={style.mainContainer}>
          {form ? (
            <>
              <div className={style.form}>
                <div>
                  <h1>Create your account</h1>
                </div>
                <div>
                  <Input
                    className={style.input1}
                    placeholder="Name"
                    handleOnchange={handleName}
                  />

                  <span style={{ color: "red" }}>{nameError}</span>
                  <div className={style.toogleData}>
                    {toggle ? (
                      <>
                        <Input
                          className={style.input2}
                          placeholder="Phone"
                          handleOnchange={handleMobile}
                        />
                        <span style={{ color: "red" }}>{phoneError}</span>
                      </>
                    ) : (
                      <>
                        <Input
                          className={style.input2}
                          placeholder="email"
                          handleOnchange={handleEmail}
                        />
                        <span style={{ color: "red" }}>{emailError}</span>
                      </>
                    )}
                    <span className={style.toggle} onClick={ToggleEU}>
                      {toggle ? (
                        <h6> Use Email instead </h6>
                      ) : (
                        <h6>Use Phone instead</h6>
                      )}
                    </span>
                    <div>
                      <div>
                        <h4 style={{ color: "white" }}>Date of birth</h4>
                        <p style={{ color: "grey", width: "27rem" }}>
                          This will not be shown publicly. Confirm your own age,
                          even if this account is for a business, a pet, or
                          something else.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className={styleDob.container}>
                    <Month handleOnchange={handleMonth} />
                    <Date handleOnchange={handleDate} />
                    <Dayy handleOnchange={handleDay} />
                  </div>
                  <span style={{ color: "red" }}>{dobError}</span>
                </div>
                <div>
                  <CustomButton
                    buttonText="next"
                    customCss={style.formbtn}
                    btnNext={submitFunction}
                  ></CustomButton>
                </div>
              </div>
            </>
          ) : (
            <>
              <p className={style.logo}>
                <i class="fa fa-brands fa-twitter"></i>
              </p>
              <h1>Join Twitter today</h1>
              <div>
                <CustomButton
                  icon={<i class="fa fa-brands fa-google"></i>}
                  buttonText="Sign in with google"
                  customCss={style.CustomButton1}
                ></CustomButton>
              </div>
              <br />
              <div>
                <CustomButton
                  icon={<i class="fa fa-brands fa-apple"></i>}
                  buttonText="Sign in with Apple"
                  customCss={style.CustomButton2}
                />
              </div>
              <div className={style.or}>
                <p className={style.line}>____</p>
                OR
                <p className={style.line}>____</p>
              </div>
              <div className={style.signupbtn}>
                <CustomButton
                  btnNext={Form}
                  buttonText="sign up with phone number or email"
                  customCss={style.CustomButton2}
                />
                <p>
                  By signing up, you agree to the Terms of Service <br />
                  and Privacy Policy, including Cookie Use.
                </p>
              </div>
              <div className={style.txt2}>
                Have an Account Already..? <Link to="/"> Log in</Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Register;
