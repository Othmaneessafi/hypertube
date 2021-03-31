import React from "react";
import "./profile.css";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Navbar from "../../containers/Navbar";

export default function Profile(props) {
  const { user, images, resetStep } = props;
  return (
    <>
      <Navbar />
      <Grid
        container
        className="profilContainer"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={11} lg={7} container className="profileContainer">
          <Grid
            item
            xs={12}
            lg={4}
            className="profileImageContainer"
            container
            justify="center"
            alignItems="center"
          >
              <Grid
                item
                xs={10}
                className="profileUserImage"
                style={{ marginBottom: "20px" }}
              >
                {images.isImages &&
                  images.images.map((tile) => {
                    return (
                      <Grid key={tile.id}>
                        {tile.isProfilePic ? (
                          <img
                            style={{
                              width: "100%",
                              height: "25vh",
                              borderRadius: "5px",
                            }}
                            src={`http://localhost:3001/${tile.path}`}
                            alt="photos"
                          />
                        ) : null}
                      </Grid>
                    );
                  })}
              </Grid>
              <Grid item xs={11} className="profileFullName">
                <h1>{user.firstname + " " + user.lastname}</h1>
                <h3>{user.username}</h3>
                <h4 style={{textAlign: 'center', display: 'flex', flexDirection: 'wrap'}}>
                  <i className="fas fa-venus-mars"></i>&nbsp;Gender:&nbsp; <p style={{ color: "dimgrey"}}>{user.gender}</p>
                </h4>
                <h4 style={{textAlign: 'center', display: 'flex', flexDirection: 'wrap'}}>
                  <i className="far fa-grin-hearts"></i>&nbsp;Interest: &nbsp; <p style={{ color: "dimgrey"}}>{user.Sexual_orientation}</p>
                </h4>
                <h4 style={{textAlign: 'center', display: 'flex', flexDirection: 'wrap'}}>
                  <i className="fas fa-baby-carriage"></i>&nbsp;Age: &nbsp; <p style={{ color: "dimgrey"}}>{user.age}</p> 
                </h4>
                <h4 style={{textAlign: 'center', display: 'flex', flexDirection: 'wrap'}}>
                  <i className="fas fa-book"></i>&nbsp;Bio:&nbsp;<p style={{ color: "dimgrey"}}>{user.biography}</p> 
                </h4>
                <h4 style={{textAlign: 'center', display: 'flex', flexDirection: 'wrap'}}>
                <i className="fab fa-slack-hash"></i>&nbsp;Tags:&nbsp;
                  {user.tags.map((tag, i) => (
                      <p  key={i} style={{color: "dimgrey", marginTop: '6px'}}>#{tag.label}&nbsp;</p>
                  ))}
                </h4>
                <Button
                  variant="contained"
                  color="primary"
                  className="loginBtn"
                  type="submit"
                  value="ok"
                  onClick={resetStep}
                  style={{ marginTop: "10px" }}
                >
                  Edit
                </Button>
              </Grid>
          </Grid>

          <Grid item container xs={12} lg={8} className="profileInputContainer">
            {images.isImages &&
              images.images.map((tile) => {
                return (
                  <Grid
                    item
                    sm={4}
                    key={tile.id}
                    style={{
                      display: "inline",
                      float: "left",
                      padding: "10px",
                    }}
                  >
                    <img
                      style={{
                        width: "100%",
                        height: "25vh",
                        borderRadius: "12px",
                        margin: "2px",
                        boxShadow: "0px 10px 30px -5px rgba(0, 0, 0, 0.3)",
                        objectFit: "cover",
                      }}
                      src={`http://localhost:3001/${tile.path}`}
                      alt="photos"
                    />
                  </Grid>
                );
              })}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
