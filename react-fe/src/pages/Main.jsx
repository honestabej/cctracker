import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home/Home';
import SignUp from './SignUp/SignUp';
import SignIn from './SignIn/SignIn';
import Dashboard from './Dashboard/Dashboard';
import UserProfile from './UserProfile/UserProfile';

const Main = () => {
  return (
    <Switch> 
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/signup' component={SignUp}></Route>
      <Route exact path='/signin' component={SignIn}></Route>
      <Route exact path='/dashboard' component={Dashboard}></Route>
      <Route exact path='/user' component={UserProfile}></Route>
    </Switch>
  );
}

export default Main;