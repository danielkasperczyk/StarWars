import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import FormComponent from './Components/FormComponent';
import Heroes from './Components/Heroes';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import NotFound from './Components/NotFound';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
    font-size: 62.5%;
    background-color: #f0f0f0;
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
  overflow-y: scroll;
  max-width: 1000px;
  ::-webkit-scrollbar {
    display: block;
}`

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Container>
          <Switch>
            <Route path='/' exact>
              <FormComponent />
              <Heroes />
            </Route>
            <Route path='/hero' component={Hero}/>
            <Route component={NotFound} />
          </Switch>
      </Container>
    </Router>
  );
}

export default App;
