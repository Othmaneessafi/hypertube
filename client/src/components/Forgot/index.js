import React from "react";
import "./index.css";
import Grid from "@material-ui/core/Grid";
import { Field } from "redux-form";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import renderField from "../shared/TextField";
import Logo from "../../image/logo.png";

export default function forgot(props) {
  const { handleSubmit } = props;

  return (
    <main className="forgotContainer w-full h-screen flex items-center justify-start p-10 ">
      <div className="w-full flex justify-center">
        <div className="w-1/3 bg-bgBlack rounded-3xl flex flex-col items-center p-6 shadow-lg shadow-bgBlack">
          <div className="logo w-full flex justify-center mb-6">
            <img src={Logo} className="w-1/2" />
          </div>
          <div className="fields w-full flex flex-col items-center justify-center">
            <Field
              name="email"
              label="Email"
              type="email"
              className="logupInput"
              component={renderField}
            />
          </div>
          <div className="w-full flex justify-center">
            <button
              className="bg-primaryRed py-2 w-2/3 rounded-md text-2xl text-center text-primaryWhite flex justify-center my-4 items-center"
              onClick={handleSubmit}
            >
              Send email
            </button>
          </div>
          <div className="w-full flex justify-center">
            <span className="text-secondary text-center">
              return to login page{" "}
              <Link
                to="/register"
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

{
  /* <>
      <Grid
        container
        className="errorContainer"
        justify="center"
        alignItems="center"
        style={{ height: "80vh" }}
      >
        <Grid item xs={11} lg={3} container className="forgotContainer">
          <Grid
            item
            container
            xs={12}
            lg={12}
            className="loginInputContainer"
            justify="center"
            alignItems="center"
          >
            <Grid
              item
              xs={12}
              lg={10}
              container
              direction="column"
              justify="center"
              alignItems="center"
            >
              <Link to="/login" style={{ textDecoration: "none", display: 'flex', justifyContent: "center" }}>
                <img src={Logo} alt="logo" style={{width: "70%"}} />
              </Link>
              <h3 className="message" style={{ color: 'white', textAlign: 'center' }}>Please enter your email</h3>
              <Field
                name="email"
                label="Email"
                type="email"
                component={textField}
                className="loginInput"
                color="secondary"
                InputProps={{ className: "loginInput" }}
                InputLabelProps={{ className: "loginInputLabel" }}
              />
              <div style={{ height: 30 }} />
              <Button
                variant="contained"
                color="secondary"
                className="loginBtn"
                type="submit"
                value="ok"
                onClick={handleSubmit}
              >
                Send Email
              </Button>
              <Link to="/signup" style={{ textDecoration: "none" }}></Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </> */
}
