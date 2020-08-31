import React from 'react';
import '../index.css';
import BigButton from '../components/bigbutton.js';
import phone from '../assets/phone.png';
import friends from '../assets/friends.png';

import { Container, Typography, Grid, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	heroContent: {
		padding: theme.spacing(30, 6),
	},
	bold: {
		fontWeight: 'bold'
	},
	infoSection: {
		backgroundColor: '#fbede9'
	},
	infoContent: {
		padding: theme.spacing(0, 6, 10),
	},
	footer: {
		padding: theme.spacing(10, 0, 5),
	}
}));

function HomeInfo(props) {
	const classes = useStyles();
	return (
		<Grid container spacing={5} alignItems="center" direction="row" className={classes.infoContent}>
			<Grid item xs={12} sm={7}>
				<Typography variant="h3" color="primary" gutterBottom>
					{ props.title }
				</Typography>
				<Typography variant="h6" color="secondary" gutterBottom>
					{ props.description }
				</Typography>
				<BigButton 
					buttonLabel={ props.label } 
					buttonLink={ props.link }
				/>
			</Grid>
			<Grid xs={12} sm={5} align="center">
				<img src={props.image} alt={props.title} width="100%"/>
			</Grid>
		</Grid>
	);
}

function Home() {
  const classes = useStyles();
  return (
    <>
      <Container maxWidth="md" className={classes.heroContent}>
				<Grid container justify="center" direction="column">
					<Typography variant="h2" align="center" color="primary">
						Lend a Helping Hand
					</Typography>
					<Typography variant="h2" align="center" color="primary" className={classes.bold} gutterBottom>
						Save Lives.
					</Typography>
					<div>
						<Grid container spacing={4} justify="center">
							<Grid item>
								<BigButton 
									buttonLabel={"Elderly Click Here!"} 
									buttonLink={"/elderly-and-at-risk"}
								/>
							</Grid>
							<Grid item>
								<BigButton 
									buttonLabel={"Volunteers Click Here!"} 
									buttonLink={"/volunteering"}
								/>
							</Grid>
						</Grid>
					</div>
				</Grid>
      </Container>

			<Container maxWidth="lg" className={classes.infoSection}>
				<HomeInfo 
					image={phone}
					title={"What's VoGro?"}
					description={"VoGro provides a platform to connect volunteers with those in need. Sign up as a volunteer or as someone who needs help and get connected. VoGro is focused on helping the elderly and those who are unable to perform actions due to the current COVID-19 environment."}
					label={"Learn More"}
					link={"/volunteering"}
				/>
				<HomeInfo 
					image={friends}
					title={"Who We Are"}
					description={"We are a set of students from universities across Ontario looking to help those in need. As active volunteers we wanted to make volunteering as easy as possible for those who want to help. This pandemic isn't going away any time soon, so we want to help make life as normal as it could be in these uncertain times."}
					label={"Contact Us"}
					link={"/contact-us"}
				/>
			</Container>

			<Container maxWidth="md" align="center" className={classes.footer}>
				<Typography variant="h4" color="black" gutterBottom gutterTop>
					Volunteer Today - Download the App!
				</Typography>
				<Grid container spacing={2} justify="center">
					<Grid item>
						<BigButton 
							buttonLabel={"App Store"} 
							buttonLink={"https://apps.apple.com/ca/app/vogro-org/id1515617598"}
							target="_blank"
						/>
					</Grid>
					<Grid item>
						<BigButton 
							buttonLabel={"Play Store"} 
							buttonLink={"https://play.google.com/store/apps/details?id=ca.vogro.vogro_flutter"}
							target="_blank"
						/>
					</Grid>
				</Grid>
			</Container>
			
			<Container maxWidth="md" align="center" className={classes.footer}>
				<Typography variant="h4" color="black" gutterBottom>
					Thank you for your support.
				</Typography>
				<Typography variant="body1" color="black" gutterBottom>
					Many people played a part in making VoGro possible. 
					Thanks to our friends, and volunteers we have support us we were able to make 
					VoGro possible and allow us to fight Covid-19 from a social perspective.
					Most especially, thank you, TakingITGlobal, Canada Corps and the Government of Canada.
				</Typography>
				<div style={{ padding: 20 }}>
					<Button variant="contained" size="large" color="primary" disableElevation href="https://www.tigweb.org" target="_blank">
						TakingITGlobal Site
					</Button>
				</div>
			</Container>
    </>
  );
}

export default Home;
