import React from "react";
import "./activity.css";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Navbar from "../../containers/Navbar";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import BlockIcon from "@material-ui/icons/Block";

export default function Activity(props) {
  const {
    likedByList,
    viewProfileList,
    blockList,
    handleLike,
    handleDeblock,
    likeList,
    handleDislike,
  } = props;
  return (
    <>
      <Navbar />
      <Grid
        container
        className="profilContainer"
        justify="center"
        alignItems="center"
        direction="column"
      >
        <Grid item xs={11} lg={7} container className="profileContainer">
          <Grid
            item
            xs={12}
            lg={12}
            className="activityImageContainer"
            container
            justify="center"
            alignItems="center"
          >
            <Grid item container sm={3} justify="center" alignItems="center">
              <h1>Profile views</h1>
            </Grid>
            <Grid item container sm={3} justify="center" alignItems="center">
              <h1>You like</h1>
            </Grid>
            <Grid item container sm={3} justify="center" alignItems="center">
              <h1>You're liked by</h1>
            </Grid>
            <Grid item container sm={3} justify="center" alignItems="center">
              <h1>You blocked</h1>
            </Grid>
          </Grid>

          <Grid
            item
            container
            xs={12}
            lg={12}
            className="activityInputContainer"
          >
            <Grid item container sm={3} direction="column">
              <List >
                {viewProfileList.isUsers === true &&
                  viewProfileList.users.map((value) => (
                    <ListItem className="activityItem" key={value.id} button>
                      <ListItemText style={{ color: "white" }} id={value.id}>
                        <h5>{value.firstname + "  " + value.lastname}</h5>
                      </ListItemText>
                      <ListItemSecondaryAction>
                        {value.like === null && (
                          <Tooltip title="Like">
                            <IconButton
                              aria-label="Like"
                              onClick={(e) => handleLike(value.id)}
                            >
                              <FavoriteBorderIcon color="secondary" />
                            </IconButton>
                          </Tooltip>
                        )}
                        {value.like === "iLike" && (
                          <Tooltip title="Unlike">
                            <IconButton
                              aria-label="Unlike"
                              onClick={(e) => handleDislike(value.id)}
                            >
                              <FavoriteIcon color="secondary" />
                            </IconButton>
                          </Tooltip>
                        )}
                        {value.like === "heLiked" && (
                          <Tooltip title="Like back">
                            <IconButton
                              aria-label="Like back"
                              onClick={(e) => handleLike(value.id)}
                            >
                              <FavoriteBorderIcon color="secondary" />
                            </IconButton>
                          </Tooltip>
                        )}
                        {value.like === "match" && (
                          <Tooltip title="Unmatch">
                            <IconButton
                              aria-label="Unmatch"
                              onClick={(e) => handleDislike(value.id)}
                            >
                              <FavoriteIcon color="secondary" />
                            </IconButton>
                          </Tooltip>
                        )}
                      </ListItemSecondaryAction>
                    </ListItem>
                  ))}
              </List>
            </Grid>

            <Grid item container sm={3} direction="column">
              <List>
                {likeList.isUsers === true &&
                  likeList.users.map((value) => (
                    <ListItem className="activityItem" key={value.id} button>
                      <ListItemText style={{ color: "white" }} id={value.id}>
                        <h5>{value.firstname + "  " + value.lastname}</h5>
                      </ListItemText>
                      <ListItemSecondaryAction>
                        {value.like === "iLike" && (
                          <Tooltip title="Unlike">
                            <IconButton
                              aria-label="Unlike"
                              onClick={(e) => handleDislike(value.id)}
                            >
                              <FavoriteIcon color="secondary" />
                            </IconButton>
                          </Tooltip>
                        )}
                        {value.like === "match" && (
                          <Tooltip title="Unmatch">
                            <IconButton
                              aria-label="Unmatch"
                              onClick={(e) => handleDislike(value.id)}
                            >
                              <FavoriteIcon color="secondary" />
                            </IconButton>
                          </Tooltip>
                        )}
                      </ListItemSecondaryAction>
                    </ListItem>
                  ))}
              </List>
            </Grid>

            <Grid item container sm={3} direction="column">
              <List>
                {likedByList.isUsers === true &&
                  likedByList.users.map((value) => (
                    <ListItem className="activityItem" key={value.id} button>
                      <ListItemText style={{ color: "white" }} id={value.id}>
                        <h5>{value.firstname + " " + value.lastname}</h5>
                      </ListItemText>
                      <ListItemSecondaryAction>
                        {value.like === "heLiked" && (
                          <Tooltip title="Like back">
                            <IconButton
                              aria-label="Like back"
                              onClick={(e) => handleLike(value.id)}
                            >
                              <FavoriteBorderIcon color="secondary" />
                            </IconButton>
                          </Tooltip>
                        )}
                        {value.like === "match" && (
                          <Tooltip title="Unmatch">
                            <IconButton
                              aria-label="Unmatch"
                              onClick={(e) => handleDislike(value.id)}
                            >
                              <FavoriteIcon color="secondary" />
                            </IconButton>
                          </Tooltip>
                        )}
                      </ListItemSecondaryAction>
                    </ListItem>
                  ))}
              </List>
            </Grid>
            <Grid item container sm={3} direction="column">
              <List >
                {blockList.isUsers === true &&
                  blockList.users.map((value) => (
                    <ListItem className="activityItem" key={value.id} button>
                      <ListItemText style={{ color: "white" }} id={value.id}>
                      <h5>{value.firstname + "  " + value.lastname}</h5>
                      </ListItemText>
                      <ListItemSecondaryAction>
                        <Tooltip title="Unblock">
                          <IconButton
                            aria-label="unblock"
                            onClick={(e) => handleDeblock(value.id)}
                          >
                            <BlockIcon color="secondary" />
                          </IconButton>
                        </Tooltip>
                      </ListItemSecondaryAction>
                    </ListItem>
                  ))}
              </List>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
