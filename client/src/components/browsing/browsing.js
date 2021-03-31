import React, { useState } from "react";
import Cards from "../Cards/Cards";
import Navbar from "../../containers/Navbar";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Select from "react-select";
import "./browsing.css";
import { Button } from "@material-ui/core";

function valuetext(value) {
  return `${value}`;
}

export default function Browsing(props) {
  const {
    users,
    handle,
    handleSubmit,
    handleBlock,
    handleLike,
    handleDislike,
    handleViewProfile,
    handleChangeAge,
    handleChangeLoc,
    handleChangeRating,
    handleChangeTags,
    handleChangeNbrTags,
    handleReport,
    selectTags,
    age,
    nbrTags,
    loc,
    rating,
  } = props;

  return (
    <>
      <Navbar />
      <Grid
        container
        className="BrowsingContainer"
        justify="center"
        alignItems="center"
      >
        <Grid item container xs={11} lg={10} className="filter" spacing={0}>
          <Grid item xs={12} lg={2} style={{ marginRight: "60px" }}>
            <h6 style={{ color: "#C51162" }}>
              Rating{" "}
              <i
                className="fas fa-sort-up"
                onClick={(e) => handle("-rating")}
              ></i>{" "}
              <i
                className="fas fa-sort-down"
                onClick={(e) => handle("rating")}
              ></i>
            </h6>
            <Slider
              value={rating}
              getAriaValueText={valuetext}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto"
              onChange={handleChangeRating}
              step={1}
              marks
              min={0}
              max={5}
              color="secondary"
              style={{ width: 300 }}
            />
          </Grid>
          <Grid item xs={12} lg={2} style={{ marginRight: "60px" }}>
            <h6 style={{ color: "#C51162" }}>
              Age{" "}
              <i className="fas fa-sort-up" onClick={(e) => handle("-age")}></i>{" "}
              <i
                className="fas fa-sort-down"
                onClick={(e) => handle("age")}
              ></i>
            </h6>
            <Slider
              value={age}
              getAriaValueText={valuetext}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto"
              onChange={handleChangeAge}
              step={1}
              marks
              min={18}
              max={70}
              color="secondary"
              style={{ width: 300 }}
            />
          </Grid>
          <Grid item xs={12} lg={2} style={{ marginRight: "60px" }}>
            <h6 style={{ color: "#C51162" }}>
              Localisation{" "}
              <i
                className="fas fa-sort-up"
                onClick={(e) => handle("-rating")}
              ></i>{" "}
              <i
                className="fas fa-sort-down"
                onClick={(e) => handle("rating")}
              ></i>
            </h6>
            <Slider
              value={loc}
              getAriaValueText={valuetext}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto"
              onChange={handleChangeLoc}
              step={10}
              marks
              min={0}
              max={100}
              color="secondary"
              style={{ width: 300 }}
            />
          </Grid>
          <Grid item xs={12} lg={2} style={{ marginRight: "60px" }}>
            <h6 style={{ color: "#C51162" }}>
              Number of Tags <i className="fas fa-sort-up"></i>{" "}
              <i className="fas fa-sort-down"></i>
            </h6>
            <Slider
              value={nbrTags}
              getAriaValueText={valuetext}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto"
              onChange={handleChangeNbrTags}
              step={1}
              marks
              min={0}
              max={5}
              color="secondary"
            />
          </Grid>
          <Grid item xs={12} lg={2}>
            <h6 style={{ color: "#C51162" }}>Tags</h6>
            <Select
              isMulti
              isClearable={false}
              onChange={handleChangeTags}
              options={selectTags}
            />
          </Grid>
          <Grid item xs={12} lg={5}>
            <Button
              type="submit"
              onClick={handleSubmit}
              color="secondary"
              variant="contained"
              className="filterBtn"
            >
              <h6>
                <i className="fas fa-filter"></i> Filter
              </h6>
            </Button>
          </Grid>
        </Grid>
        <Grid item container xs={12} justify="center" alignItems="center" style={{ marginTop: 20}}>
          {users.status === "success"
            ? users.users.map((user, i) => (
                <Cards
                  user={user}
                  handleLike={handleLike}
                  handleViewProfile={handleViewProfile}
                  handleBlock={handleBlock}
                  handleDislike={handleDislike}
                  handleReport={handleReport}
                  key={i}
                />
              ))
            : ""}
        </Grid>
      </Grid>
    </>
  );
}
