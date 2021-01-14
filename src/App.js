import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import FormComponent from './Components/FormComponent';
import Heroes from './Components/Heroes';
import Hero from './Components/Hero';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
    font-size: 62.5%;
  }

  ::placeholder{
    font-size: 0.8rem;
  }

  *,*::after,*::before{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

const Container = styled.div`
  width: 80vw;
  margin: 0 auto;
`

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path='/' exact>
            <FormComponent />
            <Heroes />
          </Route>
          <Route path='/hero'>
            <Hero />
          </Route>
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
