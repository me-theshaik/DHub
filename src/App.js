import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import LandingScreen from './components/screens/LandingScreen';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/' component={LandingScreen} />
      </Switch>
    </>
  );
}

export default App;
