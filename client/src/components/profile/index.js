import React from "react";
import "./profile.css";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { EditText, EditTextarea } from 'react-edit-text';

export default function Profile(props) {
  const { user } = props;
  return (
    <>
    {console.log(user)}
      <Grid container className="profileContainer" direction="row">
        <Grid container item xs={12} className="profileCover">
          <Grid item xs={4} className="profileImage">
            <img src={`http://localhost:3001/${user.image}`} className="userImage"/>
          </Grid>
          <Grid item xs={8} style={{ border: '1px solid blue', textAlign: "center"}}>
            <h1 >{user.username}</h1>
          </Grid>
        </Grid>
        <Grid item xs={12} className="profileInfos">
          <Grid item xs={12}>
            <h3 style={{ display: 'flex', flexDirection: 'row'}}>First Name: &nbsp;<EditText placeholder={user.firstname} style={{color: 'grey'}} /></h3>
            
          </Grid>
          <Grid item xs={12}>
             <h3 style={{ display: 'flex', flexDirection: 'row'}}>Last Name: &nbsp;<EditText placeholder={user.lastname} style={{color: 'grey'}} /></h3>
          </Grid>
          <Grid item xs={12}>
             <h3 style={{ display: 'flex', flexDirection: 'row'}}>Username: &nbsp;<EditText placeholder={user.username} style={{color: 'grey'}} /></h3>
          </Grid>
          <Grid item xs={12}>
             <h3 style={{ display: 'flex', flexDirection: 'row'}}>Email: &nbsp;<EditText placeholder={user.email} style={{color: 'grey'}} /></h3>
          </Grid>
          <Grid item xs={12}>
             <Button color="secondary" variant="contained" >Update</Button>
          </Grid>
        </Grid>
        
      </Grid>
    </>
  );
}
