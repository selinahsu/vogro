import React from 'react';
import '../index.css';
import BigButton from '../components/bigbutton.js';

import getHelp from '../assets/get-help.png';

import { Container, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	heroContent: {
		padding: theme.spacing(6, 10),
	},
  heroImage: {
		padding: theme.spacing(6, 10, 0),
	},
	footer: {
		padding: theme.spacing(6, 0, 10),
	}
}));

function ElderlyAtRisk() {
  const classes = useStyles();
  return (
		<>
			<div className={classes.heroContent}>
				<Container maxWidth="lg" align="center">
					<Typography variant="h4" color="primary" gutterBottom>
						{"VoGro for Elderly & At Risk"}
					</Typography>
					<div className={classes.heroImage}>
						<img src={getHelp} alt="Looking to help out:" width="100%"/>
					</div>
				</Container>
			</div>

			<Container maxWidth="md" align="center" className={classes.footer}>
				<Typography variant="h4" color="black" gutterBottom>
					{"Elderly & At-Risk"}
				</Typography>
				<Typography variant="body2" color="black" gutterBottom>
					At VoGro, we understand your concerns with going outside during this pandemic. Our volunteers are here to help. Our volunteers will assist you in many forms and provide help in contact free method. If you require any assistance, such as grocery-shopping, mail-pick up, delivery of any essential items during this pandemic feel free to sign up at the link bellow or simply email us at support@vogro.ca. Let's do our best to to flatten this curve!
				</Typography>
				<div style={{ padding: 20 }}>
					<BigButton 
						buttonLabel="Elderly + At Risk Form" 
						buttonLink="https://vogro.typeform.com/to/GN0sWg?fbclid=IwAR1kTh4r1nKoEnPtA811FuuhD1rb5UJtX16Y14WhGuDB99TkX35-Cf5e4TM"
					/>
				</div>
				<div style={{ paddingTop: 60 }}>
					<Button variant="contained" size="large" color="primary" disableElevation href="/legal">
						PRIVACY AND TERMS OF CONDITIONS
					</Button>
				</div>
			</Container>
		</>
  );
}

export default ElderlyAtRisk;
