import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from '../../pages/Home';
import Registration from '../../pages/Registration';
import NavBar from '../NavigationBar';
import NotificationSystem from "../NotificationCompomemt";

function App() {
  return (
    <Fragment>
      <Router>
        <NavBar/>
        <Route path='/' component={Home} exact/>
        <Route path='/register' component={Registration}/>
        {/* <Route path='/login' cpmponent={Login}/> */}
      </Router>
      <NotificationSystem />
    </Fragment>
  );
};

export default App;
