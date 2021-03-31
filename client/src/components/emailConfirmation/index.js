import React from "react";
import "./index.css";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

export default function confirmatinon(props) {
  return (
    <>
      <Grid
        container
        className="errorContainer"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={7} container className="logupContainer">
          <Grid
            item
            container
            xs={12}
            lg={6}
            className="inputContainer"
            justify="center"
            alignItems="center"
          >
            <Grid
              item
              xs={12}
              lg={12}
              container
              direction="column"
              justify="center"
              alignItems="center"
            >
              <h1 className="logo">HYPERTUBE</h1>
              <h3 className="message">
                You email verif successfully. please click the link below to
                login.
              </h3>
              <Link
                to="/signin"
                style={{ textDecoration: "none" }}
              >
                <Button
                  variant="contained"
                  className="logupBtn"
                >
                  Login
                </Button>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
