import React from "react";

import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss";
import "assets/demo/demo.css";
import "assets/demo/nucleo-icons-page-styles.css";
// pages for this kit
import Index from "views/Index.js";
// import NucleoIcons from "views/NucleoIcons.js";
// import LoginPage from "views/examples/LoginPage.js";
import RoomBookingPage from 'views/booking/RoomBookingPage';
// import LandingPage from "views/examples/LandingPage.js";
// import ProfilePage from "views/examples/ProfilePage.js";


export default function App() {
  return (
    <HashRouter basename={'/'}>
      <Switch>
        <Switch>
          {/* <Route
          path="/nucleo-icons"
          render={props => <NucleoIcons {...props} />}
        /> 
        <Route
          path="/profile-page"
          render={props => <ProfilePage {...props} />}
        /> */}
{/* 
          <Route
            path="/landing-page"
            render={props => <LandingPage {...props} />} /> */}

          <Route path={process.env.PUBLIC_URL + "/rooms/:roomType"} render={props => <RoomBookingPage {...props} />} />
          <Route path="/" render={props => <Index {...props} />} />

          <Redirect to="/" />
          {/* <Redirect from="/" to="/index" /> */}
        </Switch>
      </Switch>
    </HashRouter>
  )
}