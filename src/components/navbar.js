import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Grid } from '@material-ui/core';

import logo from '../assets/logo.png';

const navPages = [
	{
		name: "HOME", 
		path: "/"
  },
  {
		name: "VOLUNTEERING", 
		path: "/volunteering"
  },
  {
		name: "ELDERLY + AT RISK", 
		path: "/elderly-and-at-risk"
  },
  {
		name: "FAQ", 
		path: "/faq"
  },
  {
		name: "CONTACT US", 
		path: "/contact-us"
  },
];

const useStyles = makeStyles((theme) => ({
  appbar: {
    fontFamily: 'Quicksand',
    height: '100px',
    background: 'transparent', 
    boxShadow: 'none',
  },
  logo: {
    paddingTop: '30px',
    paddingLeft: '20px'
  },
  navLink: {
    color: '#9e9e9e',
    textDecoration: 'none',
    "&:hover": {
      color: '#555555'
    }
  },
  navItem: {
    marginTop: '20px',
    marginLeft: '20px',
    marginRight: '20px',
  }
}));

function Navbar() {
  const classes = useStyles();
  return (
    <AppBar position="relative" className={classes.appbar}>
      <Toolbar>
        <Grid container justify="space-between" alignItems="center">
          <Grid item>
            <a href="/">
              <img src={logo} alt="VoGro Logo" height="60" className={classes.logo}/>
            </a>
          </Grid>
          <Grid item>
            <Grid container >
            {navPages.map((page) => (
              <div className={classes.navItem}>
                <a href={ page.path } className={classes.navLink} >
                  { page.name }
                </a>
              </div>
            ))}
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );

}

export default Navbar;