import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from '../../pages/Home';
import Registration from '../../pages/Registration';
import Login from '../../pages/Login';
import NavBar from '../NavigationBar';
import NotificationSystem from "../NotificationCompomemt";

function App({ user, logout}) {
  return (
    <Fragment>
      <Router>
        <NavBar user={user} logout={logout}/>
        <Route path='/' component={Home} exact/>
        <Route path='/register' component={Registration}/>
        <Route path='/login' component={Login}/>
      </Router>
      <NotificationSystem />
    </Fragment>
  );
};

export default App;
