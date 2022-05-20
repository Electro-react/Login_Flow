import React, { useState } from "react";
import "./login_form.scss";
import BarChartWithData from "../BarChartWithData";
import { Route, Routes, NavLink, useNavigate } from "react-router-dom";

const LoginForm = function () {
  const [formData, setformData] = useState({
    email: "",
    password: "",
    confirm: "",
    fullName: "",
    phoneNumber: "",
  });

  const navigate = useNavigate();
  const [validator, setvalidator] = useState(false);
  const [validate, setvalidate] = useState("");
  const HandleSubmit = (e) => {
    e.preventDefault();
    if (formData.password === formData.confirm && validator) {
      setvalidate("")
      return navigate("/barchart");
    } else {
      setvalidate("  *password not match with confirm password or please check checkbox");
    }
  };

  console.log(formData);

  return (
    <div className="LoginForm">
      <form onSubmit={HandleSubmit}>
        <h1>Create an account</h1>
        <label htmlFor="email">Your email address</label>
        <input
          type="email"
          title="Please write valid email address"
          pattern="^+@+.[A-Z]{2,4}$"
          name="email"
          className="LoginForm__email"
          onChange={(e) => {
            setformData({ ...formData, email: e.target.value });
          }}
          required
        />
        <label htmlFor="LoginForm__password">Your password</label>
        <p style={{color:"red"}}>{validate}</p>
        <input
          type="password"
          name="password"
          className="LoginForm__password"
          onChange={(e) => {
            setformData({ ...formData, password: e.target.value });
          }}
          required
        />
        <label htmlFor="LoginForm__confirmPassword">
          Confirm your password
        </label>
        <input
          type="password"
          name="confirm"
          className="LoginForm__confirmPassword"
          onChange={(e) => {
            setformData({ ...formData, confirm: e.target.value });
          }}
          required
        />
        <label htmlFor="LoginForm__fullName">Your full name</label>
        <input
          type="text"
          name="fullName"
          className="LoginForm__fullName"
          onChange={(e) => {
            setformData({ ...formData, fullName: e.target.value });
          }}
          required
        />
        <label htmlFor="LoginForm__number">Your phone number</label>
        <input
          type="tel"
          name="phoneNumber"
          pattern=".{10,}"
          maxlength="10"
          title="minimum 10 characters needed"
          className="LoginForm__number"
          onChange={(e) => {
            setformData({ ...formData, phoneNumber: e.target.value });
          }}
          required
        />
        <input
          type="checkbox"
          name=""
          checked={validator}
          onChange={() => setvalidator(!validator)}
          className="LoginForm__ checkbox"
        />
        <span>I read and agree Terms and Conditions</span>
        <button
          type="submit"
          onclick={false}
          className="LoginForm__btn LoginForm--btn--submit"
        >
          Create account
        </button>
      </form>
    </div>
  );
};

export default function LoginFormFlow() {
  return (
    <div>
      {" "}
      <Routes>
        <Route path="/" element={LoginForm()} />
        <Route path="barchart" element={<BarChartWithData />} />
      </Routes>
    </div>
  );
}
