import React from 'react';
import '../index.css';

import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
}));

function Volunteering() {
  const classes = useStyles();
  return (
    <div className="Volunteering">
      <div className={classes.heroContent}>
				<Container>
					<Typography component="h1" variant="h2" align="center" color="primary" gutterBottom>
						Volunteering
					</Typography>
				</Container>
      </div>
    </div>
  );
}

export default Volunteering;
