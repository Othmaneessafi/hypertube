import React from "react";
import "./index.css";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import YouTubeIcon from "@material-ui/icons/YouTube";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import Button from "@material-ui/core/Button";
import Comment from "./comment";
import Modal from "../shared/modal";
import { Redirect } from "react-router-dom";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { LinearProgress } from "@material-ui/core";
import StarIcon from '@material-ui/icons/Star';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import CircularProgress from "@material-ui/core/CircularProgress";
const useStyles = makeStyles((theme) => ({
  gridList: {
    flexWrap: "nowrap",
    height: 320,
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
  button: {
    margin: 10,
    position: "flex",
  },
  button1: {
    margin: 10,
    position: "flex",
  },
  size: {
    width: "100%",
    height: "150px",
    display: "flex",
  },
  center: {
    position: "relative",
    left: "25px",
  },
  loading: {
    position: "fixed",
    top: "10%",
    width: "100%",
    height: "30%",
  },
}));
const sub = (subtitles) => {
  let subt = {
    ar: null,
    fr: null,
    en: null,
  };
  if (subtitles) {
    for (var i = 0; i < subtitles.length; i++) {
      if (subtitles[i].langShort == "ar")
        subt.ar = "data:text/vtt;base64," + subtitles[i].fileName;
      if (subtitles[i].langShort == "fr")
        subt.fr = "data:text/vtt;base64," + subtitles[i].fileName;
      if (subtitles[i].langShort == "en")
        subt.en = "data:text/vtt;base64," + subtitles[i].fileName;
    }
  }
  return subt;
};
const ViewMovie = (props) => {
  const {
    user,
    movieDetails,
    hash,
    handleWatch,
    isOpen,
    handleClose,
    similarMovies,
    handleMovie,
    comments,
    handleAddComment,
    handleChangeComment,
    handleVp,
  } = props;
  const subtitles = sub(movieDetails.subtitles);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const quality = movieDetails.torrents;
  const classes = useStyles();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClosee = () => {
    setAnchorEl(null);
  };
  return (
    <>
    {console.log(movieDetails)}
      {movieDetails !== "loading" && movieDetails !== "error" && movieDetails.status == "OK" && (
        <>
        <Grid
          container
          justify="center"
          alignItems="center"
          className="movieContainer"
        >
        <Grid item xs={12} className="Cover" ><img src={movieDetails.imgs.fanart} className="imageCover" alt="" /></Grid>
        <Grid item xs={12} className="CoverShading" ></Grid>
          <Grid item container className="movieInfosContainer" lg={6} >
            <Grid
              item
              container
              sm={12}
              lg={4}
              alignItems="center"
            >
              <Grid item sm={8}>
                <img src={movieDetails.imgs.poster} className="image" alt="" />
              </Grid>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClosee}
              >
                {quality &&
                  Object.keys(quality).map((tile, index) => (
                    <MenuItem
                      key={index}
                      onClick={() => {
                        handleWatch(tile);
                      }}
                    >
                      {tile}
                    </MenuItem>
                  ))}
              </Menu>
            </Grid>

          <Grid item xs={12} sm={12} lg={8}>
            <Grid item container xs={12} sm={12}>
              <Grid item xs={9}>
                <h1 className="movieInfos">
                  {movieDetails.title} ({movieDetails.year})
                </h1>
              </Grid>
              <Grid item container xs={3} alignItems="center" >
                <Grid item container xs={6} alignItems="center" style={{ display: "flex", flexDirection: "row"}}><h3 className="movieMiniInfos">{movieDetails.runtime}   </h3><AccessTimeIcon style={{ color: "grey",}}/></Grid>          
                <Grid item container xs={6} alignItems="center" style={{ display: "flex", flexDirection: "row"}} ><h3 className="movieMiniInfos">{movieDetails.imdb_rating ? Number.parseFloat(movieDetails.imdb_rating).toFixed(1) : ''}  </h3><StarIcon style={{ color: "gold"}}/></Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} style={{ padding: "10px"}}>
              <Grid item xs={11}>
                <h4 className="movieMiniInfos">{movieDetails.description}</h4>
              </Grid>
              <Grid item xs={12}>
                <h2 className="movieInfos">Genre</h2>
              </Grid>
              <Grid item xs={12}>
                <h4 className="movieMiniInfos">{movieDetails.genres.map(genre => (genre + ' - '))}</h4>
              </Grid>
              <Grid item xs={12}>
                <h2 className="movieInfos">Country</h2>
              </Grid>
              <Grid item xs={12}>
                <h4 className="movieMiniInfos">{movieDetails.countries.map(country => (country + ' - '))} </h4>
              </Grid>
              <Grid item xs={12}>
                <h2 className="movieInfos">directors</h2>
              </Grid>
              <Grid item xs={12}>
                <h4 className="movieMiniInfos">{movieDetails.directors ? movieDetails.directors : ''}</h4>
              </Grid>
            </Grid>
          </Grid>
          
            
        </Grid>
        <Grid container item xs={12} style={{zIndex: 2}}>
              {similarMovies && <Grid item xs={12}><h1 className="movieInfos">Similar movies</h1></Grid>}
                {similarMovies && similarMovies.map((tile, index) => (
                  <Grid item xs={1}  key={Math.random() + index } onClick={(e) => handleMovie(tile.id)} >
                    <img style={{ height: '310px' }} src={`http://image.tmdb.org/t/p/w185/${tile.poster_path}`} alt="s" className="similarMovie"/>
                  </Grid>
                ))}}
            </Grid>
        </Grid>
        <Grid item xs={12}>
           <Comment handleVp={handleVp} handleChangeComment={handleChangeComment} handleAddComment={handleAddComment} comments={comments} />
            </Grid>
        </>
      )}
      {movieDetails === "loading" && (
        <Grid className={classes.loading} container justify="center">
          <CircularProgress />
        </Grid>
      )}
      {movieDetails === "error" && Redirect(`http://localhost:3000/`)}
    </>
  );
};
export default ViewMovie;
{
  /* {console.log(movieDetails.torrents)} */
}
// {movieDetails.trailer && <Button href={movieDetails.trailer} target="_blank" className={classes.button1} variant="contained" color="primary" startIcon={<YouTubeIcon />}>Trailer</Button>}
// {movieDetails.torrents && <Button className={classes.button} variant="contained" color="primary" startIcon={<PlayCircleFilledIcon />} onClick={handleClick}>Watch</Button>}
// {(!movieDetails.torrents  || !movieDetails.trailer ) ? <Typography> Comming soon </Typography> : ''}
// {isOpen && <Modal isOpen={isOpen} handleClose={handleClose}>
//                 <video controls width="100%" height="500px">
//                   <source src={"http://localhost:3001/streaming/" + hash} type="video/mp4" />
//                   {subtitles.ar && <track kind="subtitles" src={subtitles.ar} srcLang="ar" default={user.langue === "ar" ? true : false} />}
//                   {subtitles.fr && <track kind="subtitles" src={subtitles.fr} srcLang="fr" default={user.langue === "fr" ? true : false} />}
//                   {subtitles.en && <track kind="subtitles" src={subtitles.en} srcLang="en" default={user.langue === "en" ? true : false} />}
//                 </video>
//               </Modal>}
