import React from "react";
import "./signin.css";
import Grid from "@material-ui/core/Grid";
import { Field } from "redux-form";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import renderField from "../shared/TextField";
import GitHubIcon from "@material-ui/icons/GitHub";
import { MDBIcon } from "mdbreact";
import Logo from "../../image/logo.png";

export default function signin(props) {
  const { handleSubmit, status, errors, registredStatus } = props;
  const handleAuth2 = async () => {
    window.open("http://localhost:3001/auth/github", "_parent");
  };
  const handleAuth4 = async () => {
    window.open("http://localhost:3001/auth/google", "_parent");
  };
  const handleAuth5 = async () => {
    window.open("http://localhost:3001/auth/42", "_parent");
  };
  return (
    <main className="signinContainer w-full h-screen flex items-center justify-start p-10 ">
      <div className="w-2/3 flex justify-center">
        <div className="w-1/2 bg-bgBlack rounded-3xl flex flex-col items-center p-6 shadow-lg shadow-bgBlack">
          <div className="logo w-full flex justify-center mb-6">
            <img src={Logo} className="w-1/2" />
          </div>
          <div className="fields w-full flex flex-col items-center justify-center">
            
            <Field
              name="username"
              className="logupInput"
              component={renderField}
              label="Username"
              type="text"
              rows="1"
            />
            <Field
              name="password"
              component={renderField}
              label="Password"
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
              Sign In
            </button>
          </div>
          <div className="w-full flex justify-center">
            <span className="text-secondary text-center">
              Don’t have an account ?{" "}
              <Link
                to="/register"
                style={{ textDecoration: "none" }}
                className="text-primaryRed"
              >
                Sign Up
              </Link>
            <br />
              <Link
                to="/forgotPassword"
                style={{ textDecoration: "none" }}
                className="text-primaryRed"
              >
                Forgot password ?
              </Link>
            </span>
          </div>
        </div>
        <div className="w-1/3"></div>
      </div>
    </main>
  );
}

{
  /* <Grid
        container
        className="signinContainer"
        // justify="center"
        // alignItems="center"
      >
        <Grid item sm={11} lg={4} container className="loginContainer">
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
              sm={12}
              lg={6}
              container
              direction="column"
              justify="center"
              alignItems="center"
            >
              <img src={Logo} style={{ width: "70%", marginBottom: '50px' }} />
              <Field
                name="username"
                label="Username"
                type="text"
                component={textField}
                className="loginInput"
                color="secondary"
                InputProps={{ className: "loginInput" }}
                InputLabelProps={{ className: "loginInputLabel" }}
              />

              <Field
                name="password"
                type="password"
                component={textField}
                rows="1"
                label="Password"
                color="secondary"
                className="loginInput"
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
                Login
              </Button>
              <Link to="/register" style={{ textDecoration: "none" }}>
                <Button color="secondary" className="registerBtn">
                  Regiter
                </Button>
              </Link>
              <Link to="/forgotPassword" style={{ textDecoration: "none" }}>
                <Button color="secondary" className="registerBtn">
                  Forgot password?
                </Button>
                </Link>
                <Grid item xs={12}>
                  <Button onClick={handleAuth2}>
                    <GitHubIcon style={{ width: 40, height: 40, color: "white" }} />
                  </Button>
                  <Button onClick={handleAuth4} >
                    <img
                      alt="google"
                      className="omniImg"
                      src="https://www.pinclipart.com/picdir/big/152-1525702_google-google-g-white-png-clipart.png"
                      style={{ width: 40, height: 40 }}
                    />
                  </Button>
                  <Button onClick={handleAuth5} >
                    <img
                      className="omniImg"
                      alt="42"
                      src="https://profile.intra.42.fr/assets/42_logo-7dfc9110a5319a308863b96bda33cea995046d1731cebb735e41b16255106c12.svg"
                      style={{ width: 40, height: 40 }}
                    />
                  </Button>
                  <MDBIcon fab icon="google" />
                </Grid>
              
            </Grid>
          </Grid>
        </Grid>
      </Grid> */
}
