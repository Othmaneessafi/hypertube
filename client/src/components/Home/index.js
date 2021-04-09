import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import StarIcon from "@material-ui/icons/Star";
import SearchSharpIcon from "@material-ui/icons/SearchSharp";
import FilterListSharpIcon from "@material-ui/icons/FilterListSharp";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import TextField from "@material-ui/core/TextField";
import Select from "react-select";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import { Button } from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";
import Navbar from "../../containers/Navbar";
import "./home.css";
import CircularProgress from "@material-ui/core/CircularProgress";

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
    initializeFilter,
    movies,
    handleChangeSort,
    handleChangeCategory,
    handleChangeSearch,
    handleSubmitSearch,
    handleMovie,
  } = props;
  const classes = useStyles();
  const [filter, setFilter] = React.useState(false);
  const [search, setSearch] = React.useState(false);
  console.log(movies);

  const handleNotFound = (e) =>{
    e.target.src = 'https://images-na.ssl-images-amazon.com/images/I/41bLP6NzvKL.jpg';
  }

  return (
    <>
      <Navbar
        handleChangeCategory={handleChangeCategory}
        handleChangeSearch={handleChangeSearch}
        handleSubmitSearch={handleSubmitSearch}
        handleChangeSort={handleChangeSort}
      />
      <Grid className="filterCont" container justify="center" direction="row">
        <Tooltip title="Search" >
          <IconButton
            aria-label="Search"
            onClick={() => {
              initializeFilter();
              setSearch(!search);
              filter === true && setFilter(false);
            }}
          >
            <SearchSharpIcon
              className="searchButton"
              color="primary"
              fontSize="large"
            />
          </IconButton>
        </Tooltip>
        <Tooltip title="Filter">
          <IconButton
            aria-label="Filter"
            onClick={() => {
              initializeFilter();
              search && setSearch(!search);
              setFilter(!filter);
            }}
          >
            <FilterListSharpIcon
              className="filterButton"
              color="primary"
              fontSize="large"
            />
          </IconButton>
        </Tooltip>
      </Grid>
      <Grid
        className="filterCont"
        container
        alignContent="center"
        direction="column"
      >
        {search && (
          <Grid item xs={12}>
            <TextField
              placeholder="Find a movie ..."
              InputProps={{
                endAdornment: (
                  <InputAdornment>
                    <Button onClick={handleSubmitSearch}>Search</Button>
                  </InputAdornment>
                ),
              }}
              onChange={handleChangeSearch}
            />
          </Grid>
        )}
        {filter && (
          <Grid item xs={12}>
            <Grid container justify="center" spacing={2}>
              <Grid className={classes.rating} item xs={12}>
                <Typography id="range-slider5" gutterBottom align="center">
                  Category
                </Typography>
                <Select
                  isClearable={false}
                  onChange={handleChangeCategory}
                  options={[
                    { value: "animation", label: "Animation" },
                    { value: "action", label: "Action" },
                    { value: "adventure", label: "Adventure" },
                    { value: "comedy", label: "Comedy" },
                    { value: "drama", label: "Drama" },
                    { value: "horror", label: "Horror" },
                    { value: "music", label: "Music" },
                    { value: "romance", label: "Romance" },
                    { value: "sci-Fi", label: "Sci-Fi" },
                    { value: "thriller", label: "Thriller" },
                  ]}
                  placeholder="Select a category"
                />
              </Grid>
              <Grid item xs={12} className={classes.rating}>
                <Typography id="range-slider5" gutterBottom align="center">
                  Sort by
                </Typography>
                <Select
                  isClearable={false}
                  onChange={handleChangeSort}
                  options={[
                    { label: "Year", value: "year" },
                    { label: "Rating", value: "rating" },
                    { label: "Last added", value: "last_added" },
                    { label: "Trending", value: "trending" },
                  ]}
                  placeholder="Select ..."
                />
              </Grid>
            </Grid>
          </Grid>
        )}
      </Grid>
      {movies.status !== "loading" && (
        <>
          <Grid container justify="center" className="moviesContainer">
            <Fab
              className={classes.upBtn}
              color="secondary"
              size="medium"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <KeyboardArrowUpIcon />
            </Fab>
            {movies.movies &&
              movies.movies.length > 0 &&
              movies.movies.map((element, index) => (
                <React.Fragment key={index}>
                  {(element.large_cover_image ) ||  (element.poster_big && element.poster_big !== 'not found' && element.poster_big !== 'images/posterholder.png') && (
                      <Card className="card">
                        {console.log("dkhal")}
                        <div className="container">
                          <img
                            className="media"
                            onError={handleNotFound}
                            src={element.large_cover_image || element.poster_big}
                            alt={element.title}
                            />
                          <Grid
                            container
                            className="overlay"
                            justify="center"
                            alignItems="center"
                            onClick={(e) => handleMovie(element)}
                            >
                            {/* {console.log(element)} */}
                            <Grid item xs={12} className="text">
                              <h1>
                                {element.title ||
                                  element.title +
                                    (element.year && ` (${element.year})`)}
                              </h1>
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
                        </div>
                      </Card>
                    )}
                </React.Fragment>
              ))}
            {movies.movies && movies.movies.length === 0 && (
              <p className="noMovies">No movies found</p>
            )}
          </Grid>
        </>
      )}
      {movies.status === "loading" && (
        <Grid className={classes.loading} container justify="center">
          <CircularProgress color ="secondary"/>
        </Grid>
      )}
    </>
  );
}
