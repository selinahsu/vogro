import React from 'react';
import '../index.css';

import helpOut from '../assets/help-out.png';
import support from '../assets/support.png';
import safety from '../assets/safety.png';
import rewards from '../assets/rewards.png';

import { Container, Grid, Typography, Button } from '@material-ui/core';
import { Card, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const volunteerPerks = [
	{
		title: 'Support 👨💻', 
		text: "VoGro is free and will always be free. User Support is available for both sides, volunteers and helpee's. We manually call and go through every task that a user requests.",
		image: support
	},
	{
		title: 'Safety ⛑️', 
		text: "VoGro runs verification checks through persona, ensuring the safety of all volunteers/helpee's. Additionally, we have strict covid-19 guidelines, that each helper follows.",
		image: safety
	},
	{
		title: 'Rewards 🎁', 
		text: "Develop wholesome connections with people and help fight covid-19. Each task done also generates service hours on the app, and we will sign them off for you.",
		image: rewards
	}
];

const useStyles = makeStyles((theme) => ({
	heroContent: {
		padding: theme.spacing(6, 10),
	},
  heroImage: {
		padding: theme.spacing(6, 10, 0),
	},
	cards: {
		padding: theme.spacing(4, 0)
	},
	footer: {
		padding: theme.spacing(10, 0, 5),
	}
}));

function Volunteering() {
  const classes = useStyles();
  return (
		<>
			<div className={classes.heroContent}>
				<Container maxWidth="lg" align="center">
					<Typography variant="h4" color="primary" gutterBottom>
						VoGro for Volunteers
					</Typography>
					<div className={classes.heroImage}>
						<img src={helpOut} alt="Looking to help out:" width="100%"/>
					</div>
				</Container>
			</div>

			<div className={classes.heroContent}>
			<Container maxWidth="md" align="center">
				<Typography variant="h4" color="primary" gutterBottom>
					What VoGro Has to Offer Volunteers
				</Typography>
				<Grid container spacing={3} className={classes.cards}>
					{volunteerPerks.map((item) => (
						<Grid item key={item} sm={12} md={4}>
							<Grid container key={item} direction="column" justify="center">
								<Card elevation={1}>
									<CardContent>
										<img src={ item.image } alt={ item.image } width="50%"/>
										<Typography gutterBottom variant="h5" component="h2">
											{ item.title }
										</Typography>
										<Typography variant="body2" color="textSecondary" component="p">
											{ item.text }
										</Typography>
									</CardContent>
								</Card>
							</Grid>
						</Grid>
					))}
				</Grid>
			</Container>
    </div>

		<Container maxWidth="md" align="center" className={classes.footer}>
			<Typography variant="h4" color="black" gutterBottom>
				Thank you.
			</Typography>
			<Typography variant="body1" color="black" gutterBottom>
				Our volunteers are everything to our platform, and we cannot thank you enough!
			</Typography>
			<div style={{ padding: 20 }}>
				<Button variant="contained" size="large" color="primary" disableElevation href="https://www.tigweb.org" target="_blank">
					PRIVACY AND TERMS OF CONDITIONS
				</Button>
			</div>
			</Container>
		</>
  );
}

export default Volunteering;
