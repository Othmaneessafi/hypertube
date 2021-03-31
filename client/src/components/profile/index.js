import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Grid } from "@material-ui/core";
import Chip from "@material-ui/core/Chip";
import CardMedia from "@material-ui/core/CardMedia";
import ChatBubbleOutlineIcon from "@material-ui/icons/Chat";
import Divider from "@material-ui/core/Divider";
import LinearProgress from "@material-ui/core/LinearProgress";
import EditIcon from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";
// import {ResponsiveGridLayout } from 'react-grid-layout';
import AddIcon from "@material-ui/icons/Add";
import { Paper } from "@material-ui/core";

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor:
      theme.palette.grey[theme.palette.type === "light" ? 100 : 700],
  },
  bar: {
    borderRadius: 5,
    background: "linear-gradient(30deg, #34ada4 10%, #0b777d 90%)",
  },
}))(LinearProgress);

const useStyles = makeStyles((theme) => ({
  // root: {
  //   padding: '10px',
  //   boxShadow: 3,
  // },
  card: {
    height: "100%",
    borderTopLeftRadius: "10px",
    borderBottomLeftRadius: "10px",
    borderTopRightRadius: "0px",
    borderBottomRightRadius: "0px",
    [theme.breakpoints.down(425 + theme.spacing(3) * 2)]: {
      justifyContent: "center",
      borderTopLeftRadius: "10px",
      borderBottomLeftRadius: "0px",
      borderTopRightRadius: "10px",
      borderBottomRightRadius: "0px",
    },
  },
  greenpaper: {
    padding: "20px",
    width: "100%",
    [theme.breakpoints.down(425 + theme.spacing(3) * 2)]: {
      justifyContent: "center",
      height: "auto",
      borderTopLeftRadius: "0px",
      borderBottomLeftRadius: "10px",
      borderTopRightRadius: "0px",
      borderBottomRightRadius: "10px",
    },
  },
  cardMedia: {
    maxWidth: 200,
    maxHeight: 200,
    borderRadius: "300px",
  },
  cardHeader: {
    // backgroundColor : "red",
    maxWidth: 400,
    maxHeight: 200,
  },

  cardContent: {
    maxWidth: 400,
    maxHeight: 200,
  },
  cardAction: {
    maxWidth: 400,
    maxHeight: 50,
  },
  avatarON: {
    backgroundColor: "#00FB0C",
    width: 5,
    height: 5,
    margin: 5,
  },
  avatarOF: {
    backgroundColor: "#e42416",
    width: 5,
    height: 5,
    margin: 5,
  },
  chip: {
    marginRight: "5px",
  },
  root: {
    maxWidth: 400,
    flexGrow: 1,
  },
  img: {
    height: 255,
    display: "block",
    maxWidth: 400,
    overflow: "hidden",
    width: "100%",
  },
  pics: {
    height: "100%",
    width: "100%",
    // background: "linear-gradient(30deg, #34ada4 10%, #0b777d 90%)",
    // display: "flex",
    // flexDirection: "wrap",
    // maxWidth: "600px",
    borderTopRightRadius: "10px",
    borderBottomRightRadius: "10px",
    borderTopLeftRadius: "0px",
    borderBottomLeftRadius: "0px",
    border: "1px solid #D7D4D3",
    alignContent: "center",
    justifyContent: "center",
    // padding: "2%",
  },
  type: {
    ...theme.typography.h5,
  },
  type1: {
    ...theme.typography.username,
  },
  type2: {
    ...theme.typography.username,
  },
  secondpaper: {
    background: "linear-gradient(140deg, #34ada4 20%, #0b777d 80%)",
    width : "100%",
    borderTopRightRadius: "10px",
    borderBottomRightRadius: "10px",
    borderTopLeftRadius: "0px",
    borderBottomLeftRadius: "0px",
    [theme.breakpoints.down(425 + theme.spacing(3) * 2)]: {
      justifyContent: "center",
      height: "auto",
      borderTopLeftRadius: "0px",
      borderBottomLeftRadius: "10px",
      borderTopRightRadius: "0px",
      borderBottomRightRadius: "10px",
    },
  },
  bigbox: {
    borderRadius: "10px",
    height: "750px",
    [theme.breakpoints.down(425 + theme.spacing(3) * 2)]: {
      justifyContent: "center",
      margin: "5%"
    },
  }
}));

const ViewProfile = (props) => {
  const { user, images, tags } = props;
  const classes = useStyles();
  const rating = user.rating;
  return (
    // <Box  boxShadow={10}>
    <Grid
      item
      xs={12}
      sm={12}
      container
      alignItems="center"
      justify="center"
      style={{
        // backgroundColor : "red",
        boxShadow: "10px",
        marginTop: "6%",
      }}
    >
      <Box
        component={Grid}
        container
        item
        sm={11}
        xs={12}
        md={11}
        lg={6}
        boxShadow={10}
        className={classes.bigbox}
      >
       hello
      </Box>
    </Grid>
    // </Box>
  );
};
export default ViewProfile;