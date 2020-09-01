import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Volunteering from "./pages/volunteering";
import ElderlyAtRisk from "./pages/elderly-and-at-risk";
import Faq from "./pages/faq";
import ContactUs from "./pages/contact-us";
import Legal from "./pages/legal";

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#eb5729',
    },
    secondary: {
      main: '#9e9e9e',
    },
  },
  typography: {
    fontFamily: [
      'Montserrat',
      'Roboto',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    body1: {
      fontSize: '1em',
      lineHeight: '1.75em',
      textAlign: "left"
    },
    body2: {
      fontSize: '1em',
      lineHeight: '1.75em',
      textAlign: "center"
    }
  },
  overrides: {
    MuiTypography: {
      root: {
        "& p": {
          color: "blue"
        },
        "& h2": {
          color: "red"
        }
      }
    }
  }
});

function App() {
  return (
    <main>
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/volunteering" component={Volunteering} />
        <Route path="/elderly-and-at-risk" component={ElderlyAtRisk} />
        <Route path="/faq" component={Faq} />
        <Route path="/contact-us" component={ContactUs} />
        <Route path="/legal" component={Legal} />
        <Route component={Error} />
      </Switch>
    </main>
  )
}

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
