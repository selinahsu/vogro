import React, { useEffect } from 'react';
import '../index.css';

import { Container, Typography, TextField, Select, MenuItem, Grid, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	form: {
		padding: theme.spacing(4, 0),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function ContactUs() {
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [msgType, setMsgType] = React.useState("Message Type");

  const [open, setOpen] = React.useState(false);

  const inputProps = {
    rows: 3,
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  useEffect(() => {
    document.title = "Contact Us";  
  });

  const classes = useStyles();
  return (
    <div className={classes.form} name="contact-us" method="POST" data-netlify="true">
      <Container maxWidth="md">
        <Typography variant="h4" color="black" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="body1" color="black" gutterBottom>
        Having issues with our service? Want to reach out? Enter in your message and we'll get back to you shortly.
        </Typography>

        <form className={classes.form}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                variant="outlined"
                fullWidth
                label="First Name"
                value={ firstName }
                onChange={(event) => {
                  setFirstName(event.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="lname"
                variant="outlined"
                fullWidth
                label="Last Name"
                value={ lastName }
                onChange={(event) => {
                  setLastName(event.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                type="email"
                autoComplete="email"
                variant="outlined"
                fullWidth
                label="Email"
                value={ email }
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Select
                variant="outlined"
                label="Message Type"
                fullWidth
                open={open}
                onClose={handleClose}
                onOpen={handleOpen}
                value={ msgType }
                onChange={(event) => {
                  setMsgType(event.target.value);
                }}
                
              >
                <MenuItem value="Message Type">
                  <em>Please select a message type</em>
                </MenuItem>
                <MenuItem value={'Helper'}>Helper</MenuItem>
                <MenuItem value={'Someone in Need'}>Someone in Need</MenuItem>
                <MenuItem value={'General Question'}>General Question</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                multiline
                label="Message"
                inputProps={inputProps}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disableElevation
            className={classes.submit}
          >
            Submit
          </Button>
        </form>
      </Container>
    </div>
  );
}

export default ContactUs;
