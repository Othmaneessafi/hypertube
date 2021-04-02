import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import PersonIcon from "@material-ui/icons/Person";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from '@material-ui/icons/Search';
import Select from "react-select";
import "./navbar.css";

const categories = [
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
];

const sortBy = [
  { label: "Year", value: "year" },
  { label: "Popularity", value: "seeds" },
  { label: "Date added", value: "dateadded" },
  { label: "Title", value: "title" },
];
function NavBar(props) {
  const { handleProfileOpen, user, handleLogout, handleSubmitSearch, handleChangeSearch, handleChangeCategory, handleChangeSort} = props;
  const [sort, setSort] = React.useState('none');
  const [category, setCategory] = React.useState('none');

  const handleSort = (event) => {
    setSort(event.target.value);
    handleChangeSort(event.target.value);
  };

  const handleCategory = (event) => {
    setCategory(event.target.value);
    handleChangeCategory(event.target.value);
  };

  return (
    <AppBar position="fixed" className="navbar">
      <Toolbar>
        <Grid container>
          <Grid item lg={1}>
            <h1>hypertube</h1>
          </Grid>
          <Grid item lg={4}></Grid>
          <Grid item container justify="center" alignItems="center" lg={2}>
            <TextField
              label="Search"
              color="secondary"
              fullWidth
              onChange={handleChangeSearch}
              InputProps={{ className: "loginInput",
              endAdornment: (
                <InputAdornment>
                    <SearchIcon style={{ cursor: 'pointer'}} onClick={handleSubmitSearch} />
                </InputAdornment> )}}
              InputLabelProps={{ className: "loginInputLabel" }}
            />
          </Grid>
          <Grid item container justify="center" alignItems="center" lg={2}>
            <TextField
              select
              label="Categories"
              color="secondary"
              onChange={handleCategory}
              value={category}
              // fullWidth
              style={{ width: "30%", marginRight: 10 }}
              InputProps={{className: "loginInput"}}
              InputLabelProps={{ className: "loginInputLabel" }}
            >
              {categories.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {console.log(option.value,'ghfhnfnhfnhfhnfhnfhnfh')}
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              select
              label="Sort By"
              color="secondary"
              onChange={handleSort}
              value={sort}
              // fullWidth
              style={{ width: "30%" }}
              InputProps={{ className: "loginInput" }}
              InputLabelProps={{ className: "loginInputLabel" }}
            >
              {sortBy.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item lg={2}></Grid>
          <Grid item container justify="center" alignItems="center" lg={1}>
            {user && user.token && (
              <IconButton onClick={handleProfileOpen}>
                <PersonIcon color="secondary" />
              </IconButton>
            )}
            {user && user.token && (
              <Button color="secondary" onClick={handleLogout}>
                <ExitToAppIcon />
              </Button>
            )}
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
