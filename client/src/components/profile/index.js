import React from "react";
import "./profile.css";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { EditText, EditTextarea } from "react-edit-text";
import FormLabel from "@material-ui/core/FormLabel";
import { Field } from "redux-form";
import renderField from "../shared/TextField";
import { Avatar } from "@material-ui/core";
import RadioGroup from "../shared/RadioGroup";

export default function Profile(props) {
  const { user, handleSubmit } = props;
  return (
    <>
      {console.log(user)}
      <Grid container className="profileContainer" justify="center" alignItems="center">
          <Grid item lg={2} xs={12} className="profileImage">
            <img
              src={`http://localhost:3001/${user.image}`}
              className="userImage"
            />
          </Grid>
        <Grid item lg={8} xs={12} className="profileInfos">
          <form>
            <Grid container justify="center" spacing={2}>
              <Grid item xs={5}>
                <FormLabel component="legend">Firstname</FormLabel>
                <Field
                  name="firstname"
                  component={renderField}
                  type="text"
                  rows="1"
                />
              </Grid>
              <Grid item xs={5}>
                <FormLabel component="legend">Lastname</FormLabel>
                <Field
                  name="lastname"
                  component={renderField}
                  type="text"
                  rows="1"
                />
              </Grid>
              <Grid item xs={5}>
                <FormLabel component="legend">Username</FormLabel>
                <Field
                  name="username"
                  component={renderField}
                  type="text"
                  rows="1"
                />
              </Grid>
              <Grid item xs={5}>
                <FormLabel component="legend">Email</FormLabel>
                <Field
                  name="email"
                  component={renderField}
                  type="email"
                  rows="1"
                />
              </Grid>
              <Grid item xs={5}>
                <FormLabel component="legend">New password</FormLabel>
                <Field
                  name="password"
                  component={renderField}
                  type="password"
                  rows="1"
                />
              </Grid>
              <Grid item xs={5}>
                <FormLabel component="legend">Confirm new password</FormLabel>
                <Field
                  name="confirmPassword"
                  component={renderField}
                  type="password"
                  rows="1"
                />
              </Grid>
              <Grid item xs={10}>
                <FormLabel component="legend">Langue</FormLabel>
                <Field
                  component={RadioGroup}
                  name="langue"
                  required={true}
                  options={[
                    { title: "English", value: "en" },
                    { title: "French", value: "fr" },
                    { title: "Arab", value: "ar" },
                  ]}
                />
              </Grid>
              <Grid item container justify="center" xs={3}>
                <Button
                  onClick={handleSubmit}
                  fullWidth
                  variant="contained"
                  type="submit"
                  color="secondary"
                  name="submit"
                  value="ok"
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </>
  );
}
