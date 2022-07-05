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
import Modal from '@material-ui/core/Modal';
import "./navbar.css";
import { Avatar } from "@material-ui/core";
// import Logo from '../../image/logo.png';
import List from '@material-ui/core/List';
import { Link } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { Icon } from '@iconify/react';
import Hlogo from '../../image/Hlogo.png';
import Logo from '../../image/logo.png';

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
  const { initializeFilter, handleProfileOpen, user, handleLogout, handleSubmitSearch, handleChangeSearch, handleChangeCategory, handleChangeSort, handleKeyDown, HandleHome } = props;
  const [sort, setSort] = React.useState('none');
  const [category, setCategory] = React.useState('none');
  const [open, setOpen] = React.useState(false);

  const handleSort = (event) => {
    setSort(event.target.value);
    handleChangeSort(event.target.value);
  };

  const handleCategory = (event) => {
    setCategory(event.target.value);
    handleChangeCategory(event.target.value);
  };
  function myFunction() {
    initializeFilter();
    handleSubmitSearch()
  }
  return (
    <>
      <div className="absolute top-0 left-24 right-0 h-20 flex justify-end items-center">
        <div className=" h-full pt-8 pr-4 flex justify-center items-center">
          <div
            className="rounded-full bg-[rgba(0,0,0,.2)] mx-2 p-1 pl-4"
          >
            <div className="flex justify-center items-center cursor-pointer ">
              <div className="text-primaryWhite text-2xl" style={{ backgroundColor: "", marginRight: "10px" }}>
                <div className="cursor-pointer">{user.username}</div>
              </div>
              <div style={{ backgroundColor: "", marginRight: "0px" }}>
                <img className="flex justify-center items-center h-10 w-10 bg-red-700 rounded-full"
                  src={`http://localhost:3001/${user.image}`} />
              </div>
            </div>
          </div>
          {/* <ExitToAppIcon onClick={handleLogout} /> */}
        </div>
      </div>
      <div className={open ? "fixed top-0 left-0 h-full w-64 bg-black z-40" : "fixed top-0 left-0 h-full w-20 bg-[rgba(0,0,0,.2)]"}>
        <div className="absolute top-0 left-0 w-full h-28 p-1  flex flex-col justify-center items-center">
          {open ? <img className="h-12" src={Logo} /> : <img src={Hlogo} />}
        </div>
        <div className={open ? "absolute top-[20vh] left-0 w-full h-auto flex flex-col justify-center items-center" : "absolute top-1/4 left-0 w-full h-auto flex flex-col justify-center items-center"}>
          {open ?
            <>
              <div className="w-full flex flex-row pl-10 p-4 justify-start items-center  text-primaryRed text-xl"><span className="flex flex-row items-start"><Icon icon="ant-design:home-filled" className="text-primaryRed h-7 w-7  mr-2" />Home</span></div>
              <div className="w-full  flex flex-row pl-6 p-4 justify-start items-center text-secondary text-xl"><div className="bg-bg  px-4 w-[90%] py-2 rounded-full flex flex-row items-end"><Icon icon="akar-icons:search" className="text-secondary h-6 w-6 mr-2" />Search</div></div>
              <div className="w-full  flex flex-row pl-10 justify-start items-center text-primaryWhite text-xl  p-2">Sort by</div>
              <div className="w-full flex flex-row pl-20 justify-start items-center text-secondary text-xl  p-3"><span className="flex flex-row items-end"><Icon icon="bi:calendar-date-fill" className="text-secondary h-6 w-6 mr-2" />Year</span></div>
              <div className="w-full flex flex-row pl-20 justify-start items-center text-secondary text-xl  p-3"><span className="flex flex-row items-end"><Icon icon="akar-icons:statistic-up" className="text-secondary h-6 w-6 mr-2" />Popularity</span></div>
              <div className="w-full flex flex-row pl-20 justify-start items-center text-secondary text-xl  p-3"><span className="flex flex-row items-end"><Icon icon="ant-design:clock-circle-filled" className="text-secondary h-6 w-6 mr-2" />Date added</span></div>
              <div className="w-full flex flex-row pl-20 justify-start items-center text-secondary text-xl  p-3"><span className="flex flex-row items-end"><Icon icon="ic:baseline-title" className="text-secondary h-6 w-6 mr-2" />Title</span></div>
              <div className="w-full flex flex-row  pl-10 justify-start items-center text-primaryWhite text-xl  p-2">User</div>
              <div className="w-full flex flex-row pl-20 justify-start items-center text-secondary text-xl  p-2"><span className="flex flex-row items-end"><Icon icon="ant-design:home-filled" className="text-secondary h-8 w-7 mr-2" />Watchlist</span></div>
            </>
            : <div className="flex flex-col gap-10"><Icon icon="ant-design:home-filled" className="text-primaryRed h-8 w-8" />
              <Icon icon="akar-icons:search" className="text-primaryWhite h-7 w-7" />
              <Icon icon="fa:sort" className="text-primaryWhite h-7 w-7" /></div>}
        </div>
        <buton className={open ? "absolute cursor-pointer bottom-0 left-0 w-full h-28  flex justify-end p-6 items-center" : "absolute cursor-pointer bottom-0 left-0 w-full h-28  flex justify-center items-center"} onClick={() => {
          setOpen(!open)
        }}>
          {open ? <Icon icon="ep:d-arrow-left" className="text-primaryWhite h-8 w-8" /> :
            <Icon icon="ep:d-arrow-right" className="text-primaryWhite h-8 w-8" />
          }
        </buton>
        {/* <div></div> */}
      </div>
    </>
    // <AppBar position="fixed" className="navbar">
    //   <Toolbar>
    //     <Grid container>
    //       <Grid item lg={1}>
    //       <Button onClick={HandleHome}>
    //         <img src={Logo} style={{ width:'100%'}} />
    //         </Button>
    //       </Grid>
    //       <Grid item lg={4}></Grid>
    //       <Grid item container justify="center" alignItems="center" lg={2}>
    //         <TextField
    //           label="Search"
    //           color="secondary"
    //           fullWidth

    //           onChange={handleChangeSearch}
    //           onKeyPress ={handleKeyDown}
    //           InputProps={{ className: "loginInput",
    //           endAdornment: (
    //             <InputAdornment>
    //                 <SearchIcon style={{ cursor: 'pointer'}} onClick={myFunction}/>
    //             </InputAdornment> )}}
    //           InputLabelProps={{ className: "loginInputLabel" }}
    //         />
    //       </Grid>
    //       <Grid item container justify="center" alignItems="center" lg={2}>
    //         <TextField
    //           select
    //           label="Categories"
    //           color="secondary"
    //           onChange={handleCategory}
    //           value={category}
    //           style={{ width: "30%", marginRight: 10 }}
    //           InputProps={{className: "loginInput"}}
    //           InputLabelProps={{ className: "loginInputLabel" }}
    //         >
    //           {categories.map((option) => (
    //             <MenuItem key={option.value} value={option.value}>
    //               {option.label}
    //             </MenuItem>
    //           ))}
    //         </TextField>
    //         <TextField
    //           select
    //           label="Sort By"
    //           color="secondary"
    //           onChange={handleSort}
    //           value={sort}
    //           style={{ width: "30%" }}
    //           InputProps={{ className: "loginInput" }}
    //           InputLabelProps={{ className: "loginInputLabel" }}
    //         >
    //           {sortBy.map((option) => (
    //             <MenuItem key={option.value} value={option.value}>
    //               {option.label}
    //             </MenuItem>
    //           ))}
    //         </TextField>
    //         {user && user.token && (
    //           <Link to={'/watchList'} style={{ textDecoration: 'none', color: 'primary' }} >
    //             <ListItem button>
    //               <ListItemIcon><VisibilityIcon style={{ color: 'white'}} /></ListItemIcon>
    //             </ListItem>
    //           </Link>
    //         )}
    //       </Grid>
    //       <Grid item lg={1}></Grid>
    //       <Grid item container justify="center" alignItems="center" lg={2}>
    //         {console.log(user)}
    //         {user && user.token && (
    //           <>
    //             <h4 style={{marginRight: 10}}>{user.username}</h4>
    //             <Avatar alt='profile' src={`http://localhost:3001/${user.image}`} onClick={handleProfileOpen} style={{ cursor: 'pointer', marginRight: 10 }} />

    //             <ExitToAppIcon onClick={handleLogout} />
    //           </>
    //         )}
    //       </Grid>
    //     </Grid>
    //   </Toolbar>
    // </AppBar>
  );
}

export default NavBar;
