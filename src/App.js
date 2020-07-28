import React from "react";

import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss";
import "assets/demo/demo.css";
import "assets/demo/nucleo-icons-page-styles.css";

import Index from "views/Index.js";
import RoomBookingPage from 'views/booking/RoomBookingPage';


export default function App() {
  return (
    <HashRouter basename={'/'}>
      <Switch>
        <Switch>
          <Route path={process.env.PUBLIC_URL + "/rooms/:roomType"} render={props => <RoomBookingPage {...props} />} />
          <Route path="/" render={props => <Index {...props} />} />
          <Redirect to="/" />
        </Switch>
      </Switch>
    </HashRouter>
  )
}