import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import '../../styles/App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from '../../pages/Home';
import Registration from '../../pages/Registration';
import Login from '../../pages/Login';
import NavBar from '../NavigationBar';
import Product from '../../pages/Product';
// import Cart from '../../pages/Cart';
import WrongPageURL from '../../pages/WrongPageURL';
import NotificationSystem from "../NotificationCompomemt";


function App({ user, logout }) {
  return (
    <Fragment>
      <Router>
        <NavBar user={user} logout={logout} />
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/products/:id' component={Product} />
          {/* <Route path='/cart' component={Cart} /> */}
          <Route path='/register' component={Registration} />
          <Route path='/login' component={Login} />
          <Route component={WrongPageURL} />
        </Switch>
      </Router>
      <NotificationSystem />
    </Fragment>
  );
};

export default App;
