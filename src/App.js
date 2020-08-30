import React from 'react';
import './App.css';

import { Container, Typography, Grid, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Navbar from './components/navbar.js';

const useStyles = makeStyles((theme) => ({
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Navbar />
        <div className={classes.heroContent}>
          <Container>
            <Typography component="h1" variant="h2" align="center" color="primary" gutterBottom>
              Lend a Helping Hand
            </Typography>
            <Typography component="h1" variant="h2" align="center" color="primary" gutterBottom>
              Save Lives.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Elderly Click Here!
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="contained" color="primary">
                    Volunteers Click Here!
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        
    </div>
  );
}

export default App;
