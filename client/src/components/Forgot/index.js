import React from "react";
import "./index.css";
import Grid from "@material-ui/core/Grid";
import { Field } from "redux-form";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import textField from "../shared/TextField";

export default function forgot(props) {
  const { handleSubmit } = props;

  return (
    <>
      <Grid
        container
        className="errorContainer"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={11} lg={3} container className="loginContainer">
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
              <Link to="/" style={{ textDecoration: "none" }}>
                <h1 className="logo">HYPERTUBE</h1>
              </Link>
              <h3 className="message">Please enter your email</h3>
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
    </>
  );
}
