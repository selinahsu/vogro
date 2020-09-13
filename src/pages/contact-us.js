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

class ContactUs extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    msgType: "",
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

  componentDidMount(){
    document.title = "Contact Us"
  }

  render() {
    const { classes } = this.props;
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
                  name="first name"
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
                  name="last name"
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
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                  name="message type"
                  variant="outlined"
                  fullWidth
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