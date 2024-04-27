import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from '../Header/Header';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import Success from '../Success/Success';
import axios from 'axios';
import './App.css';

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#317890",
      },
      secondary: {
        main: "#904931",
      },
    },
    spacing: 12,
  });


  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <Header />
        <Router>
            <Route exact path="/">
              <Feeling /> </Route>
            <Route path="/understanding">
              <Understanding /> </Route>
            <Route path="/support">
              <Support /> </Route>
            <Route path="/comments">
              <Comments /> </Route>
            <Route path="/review">
              <Review /> </Route>
            <Route path="/success">
              <Success /> </Route>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
