import React, { useEffect } from "react";
import clsx from "clsx";
import About from "../about/About";
import AOS from "aos";
import "aos/dist/aos.css";
import img2 from '../images/image2.png';
import { makeStyles } from "@material-ui/core/styles";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import "./Navbar.css";
import { useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { Divider } from "@material-ui/core";
import 'font-awesome/css/font-awesome.min.css';
import 'font-awesome/css/font-awesome.min.css';
import {
  HashRouter,
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
} from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
}));


export default function ButtonAppBar() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  useEffect(() => {
    AOS.init({ duration: 1800 });
  }, []);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div data-aos="fade-in" id="navbar">
      {/* <AppBar position="absolute" className="appbar"> */}
      <div id="shadow">
        <Toolbar>
          <IconButton
            id="fadeshow2"
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h4" className={classes.title} id="font">
           
            {/* <p id="font1"> Aniket</p> */}
            {/* <span style={{color: "grey"}}> ( </span> */}
            <span className="logo-name">Aniket Shinde</span>
            {/* <img src="aniket.png" /> */}
          </Typography>

          <div
            className="hideButtons fonts"
            id="fadeshow1"
            data-aos="fade-left"
            data-aos-duration="900"
          >
            <Button><Link to="/home">Home</Link></Button>
            <Button><Link to="/contact">Contact</Link></Button>
            <Button><Link to="/about">ABout</Link></Button>
            <Button><Link to="/resume">Resume</Link></Button>         
            <a href="https://www.instagram.com/theaniket_007/" target="_blank" className="insta">
              <i class="fa fa-instagram"></i>
            </a>
          </div>
        </Toolbar>
      </div>
      {/* </AppBar> */}
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          <li><Button><Link to="/home">Home</Link></Button></li>
          <li> <Button><Link to="/contact">Contact</Link></Button></li>
          <li> <Button><Link to="/about">ABout</Link></Button></li>
          <li><Button><Link to="/resume">Resume</Link></Button> </li>  
        </List>
        <Divider />
        <h3 style={{textAlign:'center', padding:'10px' }}> Visit Me</h3>
        <List>
        <a href="https://github.com" target="_blank" className="github">
                 <i class="fa fa-github"></i>
                </a>
                <a  href="https://twitter.com/TheAniket_" target="_blank" className="twitter">
                 <i class="fa fa-twitter"></i>
                </a>
                <a href="https://www.linkedin.com/in/aniket-shinde-4b72341b5/" target="_blank" className="linkedin">
                 <i class="fa fa-linkedin"></i>
                </a>
                <a href="https://www.instagram.com/theaniket_007/" target="_blank" className="insta" >
                 <i class="fa fa-instagram"></i>
                </a>
        </List>
      </Drawer>
    </div>
  );
}

