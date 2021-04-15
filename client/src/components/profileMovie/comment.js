import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { Button, IconButton } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import InputAdornment from "@material-ui/core/InputAdornment";
import './index.css'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 500,
    overflow: 'auto',
    maxHeight: 250,
  },
  inline: {
    display: 'inline',
  },
  input: {
    width: 360,
  }
}));

const Comments = (props) => {
  const { comments, handleAddComment, handleChangeComment, handleVp } = props;
  const classes = useStyles();
  return (
    <div style= {{display: 'flex', flexDirection: 'column', justifyContent : "center", alignContent: "center", alignItems : "center"}}>
      <h1 className="movieInfos">Comments </h1>
      <List className={classes.root}>
        {comments && comments.length > 0 && comments.map((tile, index) => (
          <ListItem alignItems="flex-start" key={index}>
            <ListItemAvatar >
              <IconButton onClick={(e) => handleVp(tile)}>
                <Avatar alt={tile.username} src={`http://localhost:3001/${tile.image}`} />
              </IconButton>
            </ListItemAvatar>
            <ListItemText
              primary={<h3 style={{ color: "whitesmoke"}}>{tile.username}</h3>}
              secondary={
                  <p
                    component="span"
                    variant="body1"
                    className={classes.inline}
                    style={{ color: "grey"}}
                  >
                    {tile.content}
                  </p>
              }
            />
          </ListItem>
        ))}
      </List>
      {comments && comments.length === 0 && <h3 style={{ color: "whitesmoke"}} >No comments found</h3>}
      <form onSubmit={handleAddComment}>
        <TextField
          className={classes.input}
          placeholder="Add comment ..."
          InputProps={{
            className: "loginInput",
            'aria-label': 'description',
            'endAdornment': (
              <InputAdornment>
                <Button type="submit" style={{color: "grey"}} >ADD</Button>
              </InputAdornment>
            )
          }}
          InputLabelProps={{ className: "loginInputLabel" }}
          onChange={handleChangeComment}
          variant='outlined'
          color="secondary"
        />
      </form>
    </div>
  )
}

export default Comments;