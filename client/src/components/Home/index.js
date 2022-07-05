import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import "./home.css";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Icon } from '@iconify/react';

const useStyles = makeStyles((theme) => ({
  upBtn: {
    zIndex: 99,
    position: "fixed",
    bottom: "7%",
    right: "1%",
  },
  rating: {
    maxWidth: 400,
  },
  block: {
    display: "block",
  },
  none: {
    display: "none",
  },
  loading: {
    position: "fixed",
    top: "10%",
    width: "100%",
    height: "30%",
  },
}));

export default function Home(props) {
  const {
    movies,
    handleMovie,
  } = props;
  const classes = useStyles();
  console.log(movies);

  const handleNotFound = (e) =>{
    e.target.src = 'https://images-na.ssl-images-amazon.com/images/I/41bLP6NzvKL.jpg';
  }

  return (
    <main className="w-full h-full pl-24 pt-32" >
      {movies.status !== "loading" && (
          <div className="w-full h-full justify-center flex flex-wrap" >
            {/* <Fab
              className={classes.upBtn}
              color="secondary"
              size="medium"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <KeyboardArrowUpIcon />
            </Fab> */}
            {movies.movies &&
              movies.movies.length > 0 &&
              movies.movies.map((element, index) => (
                <React.Fragment key={index}>
                  {console.log(element.large_cover_image)}
                  {(element.large_cover_image ) && (
                      <div className="group relative overflow-hidden rounded-2xl shadow-sm shadow-secondary md:w-1/3  lg:w-1/6 h-1/3 mx-4 my-4">
                          <img
                            className=" w-full h-full "
                            onError={handleNotFound}
                            src={element.large_cover_image || element.poster_big}
                            alt={element.title}
                          />
                          <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-gradient-to-t group-hover:flex items-end from-black hidden" >
                            <div className="w-full h-full flex flex-col items-center p-4">
                              <div className="w-full h-1/4" ></div>
                              <div className="w-full h-2/4 flex justify-center items-center " >
                                <span className="text-primaryRed cursor-pointer hover:scale-105" onClick={(e) => handleMovie(element)} >
                                  <Icon icon="bi:play-circle-fill" width={70}  />
                                </span>
                              </div>
                              <div className="w-full h-1/4 text-center flex flex-col items-center justify-center " >
                                <span className="text-primaryWhite font-bold text-center" >
                                  {element.title.replace(/ *\([^)]*\) */g, "")} ({element.year})
                                </span>
                                <span className="text-primaryWhite flex items-center justify-center w-full text-center" >
                                  {(element.rating.percentage &&
                                    (
                                      (element.rating.percentage * 10) /
                                      100
                                    ).toFixed(1)) ||
                                    (element.rating &&
                                      (element.rating * 1).toFixed(1))}
                                      <Icon icon="ant-design:star-filled" className="ml-1" />
                                </span>
                              </div>
                              
                              
                            </div>
                          </div>
                        {/* <div className="container">
                          <img
                            className="media"
                            onError={handleNotFound}
                            src={element.large_cover_image || element.poster_big}
                            alt={element.title}
                            />
                          <Grid
                            container
                            className="overlay"
                            alignItems="center"
                            onClick={(e) => handleMovie(element)}
                            >
                            <Grid item xs={12} className="text">
                            <h1> */}
          
        
                              {/* </h1>
                            </Grid>
                            <Grid item xs={12} style={{ height: "25%" }}></Grid>
                            <Grid
                              item
                              container
                              xs={12}
                              component="legend"
                              style={{ color: "white", padding: "10px" }}
                              direction="row"
                              alignItems="center"
                            >
                              <StarIcon
                                style={{ fill: "yellow", marginRight: 3 }}
                              />
                              {(element.rating.percentage &&
                                (
                                  (element.rating.percentage * 10) /
                                  100
                                ).toFixed(1)) ||
                                (element.rating &&
                                  (element.rating * 1).toFixed(1))}
                            </Grid>
                          </Grid>
                        </div> */}
                      </div>
                    )}
                </React.Fragment>
              ))}
            {!movies.movies && movies.movies.length === 0 && (
              <p className="noMovies">No movies found</p>
            )}
          </div>
      )}
      {movies.status === "loading" && (
        <Grid className={classes.loading} container justify="center">
          <CircularProgress color ="secondary"/>
        </Grid>
      )}
    </main>
  );
}
