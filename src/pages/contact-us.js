import React from 'react';
import '../index.css';

import { Container, Typography, TextField, Select, MenuItem, Grid, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
	form: {
		padding: theme.spacing(4, 0),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});

const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

class ContactUs extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    msgType: "",
    message: "",
    open: false
  }

  inputProps = {
    rows: 3,
  };

  handleClose = () => {
    this.setState({ open: false })
  };

  handleOpen = () => {
    this.setState({ open: true })
  };

  /* this allows for form submission on netlify */
  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    e.preventDefault();
  };

  componentDidMount(){
    document.title = "Contact Us"
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.form} name="contact" method="POST" data-netlify="true">
        <Container maxWidth="md">
          <Typography variant="h4" color="black" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="body1" color="black" gutterBottom>
          Having issues with our service? Want to reach out? Enter in your message and we'll get back to you shortly.
          </Typography>

          <form className={classes.form} onSubmit={this.handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="firstName"
                  inputProps={{ 'name': 'firstName' }}
                  autoComplete="fname"
                  variant="outlined"
                  fullWidth
                  label="First Name"
                  value={ this.state.firstName }
                  onChange={(event) => {
                    this.setState({ firstName: event.target.value })
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="lastName"
                  inputProps={{ 'name': 'lastName' }}
                  autoComplete="lname"
                  variant="outlined"
                  fullWidth
                  label="Last Name"
                  value={ this.state.lastName }
                  onChange={(event) => {
                    this.setState({ lastName: event.target.value })
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="email"
                  type="email"
                  autoComplete="email"
                  variant="outlined"
                  fullWidth
                  label="Email"
                  value={ this.state.email }
                  onChange={(event) => {
                    this.setState({ email: event.target.value })
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Select
                  name="msgType"
                  variant="outlined"
                  fullWidth
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                  open={this.state.open}
                  onClose={this.handleClose}
                  onOpen={this.handleOpen}
                  value={ this.state.msgType }
                  onChange={(event) => {
                    this.setState({ msgType: event.target.value })
                  }}
                >
                  <MenuItem value="" disabled>
                    <em>Please select a message type</em>
                  </MenuItem>
                  <MenuItem value={'Helper'}>Helper</MenuItem>
                  <MenuItem value={'Someone in Need'}>Someone in Need</MenuItem>
                  <MenuItem value={'General Question'}>General Question</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="message"
                  variant="outlined"
                  fullWidth
                  multiline
                  label="Message"
                  inputProps={this.inputProps}
                  value={ this.state.message }
                  onChange={(event) => {
                    this.setState({ message: event.target.value })
                  }}
                />
              </Grid>
            </Grid>
            <div class="field">
              <div data-netlify-recaptcha="true"></div>
            </div>
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
}

export default withStyles(styles, { withTheme: true })(ContactUs);