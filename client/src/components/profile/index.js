import React from "react";
import "./profile.css";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Navbar from "../../containers/Navbar";

export default function Profile(props) {
  const { user } = props;
  return (
    <>
      <Grid container className="profileContainer">
        <Grid container item xs={12} className="profileCover">
          <Grid item xs={4} className="profileImage">
            <img src={`http://localhost:3001/${user.image}`} className="userImage"/>
          </Grid>
          <Grid item xs={1}></Grid>
          <Grid container item xs={3} justify="center">
            <h1 >{user.username}</h1>
          </Grid>
        </Grid>
        <Grid item xs={12} className="profileInfos"></Grid>
        
      </Grid>
    </>
  );
}
