import React, { useState } from "react";
import "./signup.css";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { Field } from "redux-form";
import renderField from "../shared/TextField";
import Avatar from "@material-ui/core/Avatar";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
import Logo from "../../image/logo.png";

export default function Signup(props) {
  const [imgUrl, setimgUrl] = useState(null);
  const { handleSubmit, status, err, fileChangedHandler } = props;

  return (
    <main className="signupContainer w-full h-screen flex items-center justify-start p-10 ">
      <div className="w-1/3"></div>
      <div className="w-2/3 flex justify-center">
        <div className="w-1/2 bg-bgBlack rounded-3xl flex flex-col items-center p-6 shadow-lg shadow-bgBlack">
          <div className="logo w-full flex justify-center mb-6">
            <img src={Logo} className="w-1/2" />
          </div>
          <div className="fields w-full flex flex-col items-center justify-center">
            <Field
              name="fullname"
              className="logupInput"
              component={renderField}
              label="Fullname"
              type="text"
              rows="1"
            />
            <Field
              name="username"
              className="logupInput"
              component={renderField}
              label="Username"
              type="text"
              rows="1"
            />
            <Field
              name="email"
              component={renderField}
              label="Email"
              type="email"
              rows="1"
              className="logupInput"
            />
            <Field
              name="password"
              component={renderField}
              label="Password"
              type="password"
              rows="1"
              className="logupInput"
            />
            <Field
              name="confirmPassword"
              component={renderField}
              label="ConfirmPassword"
              type="password"
              rows="1"
              className="logupInput"
            />
          </div>
          <div className="w-full flex justify-center">
            <button
              className="bg-primaryRed py-2 w-2/3 rounded-md text-2xl text-center text-primaryWhite flex justify-center my-4 items-center"
              onClick={handleSubmit}
            >
              Register
            </button>
          </div>
          <div className="w-full flex justify-center">
            <span className="text-secondary">
              already have an account ?{" "}
              <Link
                to="/login"
                style={{ textDecoration: "none" }}
                className="text-primaryRed"
              >
                Sign In
              </Link>
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
