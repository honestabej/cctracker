import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home/Home';
import Signup from './SignUp/SignUp';
import SignIn from './SignIn/SignIn';
import Dashboard from './Dashboard/Dashboard';
import Preferences from './Preferences/Preferences';

const Main = () => {
  return (
    <Switch> 
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/signup' component={Signup}></Route>
      <Route exact path='/signin' component={SignIn}></Route>
      <Route exact path='/dashboard' component={Dashboard}></Route>
      <Route exact path='/preferences' component={Preferences}></Route>
    </Switch>
  );
}

export default Main;