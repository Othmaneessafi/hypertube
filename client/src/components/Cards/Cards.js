import React from "react";
import { useSpring, animated } from "react-spring";
import FavoriteIcon from "@material-ui/icons/Favorite";
import BlockIcon from "@material-ui/icons/Block";
import StarIcon from "@material-ui/icons/Star";
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ReportIcon from '@material-ui/icons/Report';
import Dialog from "../shared/Dialog";
import "./Cards.css";
import { Grid } from "@material-ui/core";

const calc = (x, y) => [0, 0, 1.1];
const trans = (x, y, s) => ` scale(${s})`;

export default function Cards({
  user,
  handleLike,
  handleViewProfile,
  handleBlock,
  handleDislike,
  handleReport,
}) {

  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 150, friction: 50 },
  }));

  const stars = [];
  for (let i = 0; i < user.user.rating; i++) {
    stars.push(<StarIcon key={i} />);
  }
  return (
    <animated.div
      className="card"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{
        transform: props.xys.interpolate(trans),
        margin: 10,
      }}
    >
        {user.images[0] ? (
               <img src={`http://localhost:3001/${user.images[0].path}`} alt="imgs" className="cardImage shadow" />
            ) : console.log("error")}
      <div className="cardInfos">
        <h1 className="cardUsername">
          {user.user.username}, {user.user.age}
        </h1>
        <div className="CardDescrtion">{stars}</div>
      </div>
      <Grid container className="cardChoice" justify="center" alignItems="center">
        {user.user.like !== 'iLike' ?  (
        <Grid
          item
          container
          xs={2}
          sm={3}
          direction="row"
          justify="center"
          alignItems="center"
        >
          <div className="cardIcons">
            <FavoriteIcon onClick={(e) => handleLike(user.user.id)} />
          </div>
        </Grid>) : (
        <Grid
          item
          container
          sm={3}
          xs={3}
          direction="row"
          justify="center"
          alignItems="center"
        >
          <div className="cardIcons">
            <ThumbDownIcon  onClick={(e) => handleDislike(user.user.id)} />
          </div>
        </Grid>)}
        <Grid
          item
          container
          sm={3}
          xs={3}
          direction="row"
          justify="center"
          alignItems="center"
        >
          <div className="cardIcons">
            <BlockIcon  onClick={(e) => handleBlock(user.user.id)} />
          </div>
        </Grid>
        <Grid
          item
          container
          sm={3}
          xs={3}
          direction="row"
          justify="center"
          alignItems="center"
        >
          <div className="cardIcons">
            <ReportIcon  onClick={(e) => handleReport(user.user.id)} />
          </div>
        </Grid>
        <Grid
          item
          container
          sm={3}
          xs={3}
          direction="row"
          justify="center"
          alignItems="center"
        >
          <div className="cardIcons" onClick={(e) => handleViewProfile(user.user)}>
            <Dialog userId={user.user.id} user={user}  />
          </div>
        </Grid>
      </Grid>
    </animated.div>
  );
}
