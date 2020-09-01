import React from 'react';
import '../index.css';

import { Container, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const questions = [
	{
		question: "Who can help?", 
		answer: "Healthy volunteers that have completed the COVID-19 assessment (in-app), are more than welcome to help."
  },
  {
		question: "How do I help?", 
		answer: "First, download our application on the app store or google play. After we get you verified, simply look out for tasks in your feed, and once one pops up at an appropriate time, feel free to open it up and accept."
  },
  {
		question: "How do elderly or at-risk individuals post tasks?", 
		answer: "Simply email us or fill out our type form. If you require any further assistance in posting your task we will arrange a call with you!"
  },
  {
		question: "What types of tasks are typically available?", 
		answer: "All Tasks posted \n are strictly designed to be non-contact, for the safety of both parties. Here are some examples of tasks that you might see:",
  },
  {
		question: "How else can I help?", 
		answer: "Right now the best way possible would be to get started on application, and create a 'helper' account. However, stay tuned for potential ways that you could come join our team, as a social media manager, person(s) or contact, etc."
	},
];

const useStyles = makeStyles((theme) => ({
	heroContent: {
		padding: theme.spacing(6, 10),
	},
	footer: {
		padding: theme.spacing(6, 0, 10),
	}
}));

function Faq() {
  const classes = useStyles();
  return (
		<>
			<div className={classes.heroContent}>
				<Container maxWidth="md">
					<Typography align="center" variant="h4" color="black" gutterBottom>
            Frequently Asked Questions
					</Typography>
          {questions.map((item) => (
            <div style={{ paddingTop: 20 }}>
              <Typography variant="h5" color="primary" gutterBottom>
                { item.question }
              </Typography>
              <Typography variant="body1" color="black" gutterBottom>
                { item.answer }
              </Typography>
            </div>
          ))}
				</Container>
			</div>

			<Container maxWidth="md" align="center" className={classes.footer}>
				<div style={{ paddingTop: 60 }}>
					<Button variant="contained" size="large" color="primary" disableElevation href="/legal">
						PRIVACY AND TERMS OF CONDITIONS
					</Button>
				</div>
			</Container>
		</>
  );
}

export default Faq;
