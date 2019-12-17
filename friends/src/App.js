import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import LoginForm from './components/LoginForm';

import './App.css';
import PrivateRoute from './components/PrivateRoute';
import FriendsList from './components/FriendsList';

function App() {
  return (
    <Router>
    <div className='App'>
      <Switch>
        <PrivateRoute path='/protected' component={FriendsList} />
        <Route path='login' component={LoginForm} />
        <Route component={LoginForm} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
