import React from "react";
import { useEffect, useState } from "react";

import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import { STANDARD_ROOM, DELUXE_ROOM } from "constants/rooms";
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss";
import "assets/demo/demo.css";
// import "assets/demo/nucleo-icons-page-styles.css";

import Index from "views/Index.js";
import RoomBookingPage from 'views/booking/RoomBookingPage';

/**
 * Public settings endpoint (Google Apps Script Web App)
 *
 * IMPORTANT:
 * - This URL comes from an Apps Script deployment ("Web app")
 * - If the Apps Script code is changed, it MUST be redeployed
 * - After redeploying, this URL MAY change
 *   → If prices stop loading, update this URL first
 *
 * Expected response (JSON):
 * {
 *   "price_upstairs_euro": number,
 *   "price_downstairs_euro": number
 * }
 */
const DKB_SETTINGS_JSON_URL = "https://script.google.com/macros/s/AKfycbyCyk-cjDu0SXh4_sJgz-m1ZGfNjQlLOahfoePdzvOAwzF48pscHQ4kEiNWs-bp5nUf_w/exec"

export default function App() {
  const [roomPricesPerNight, setRoomPricesPerNight] = useState({
    [STANDARD_ROOM]: "",
    [DELUXE_ROOM]: "",
  })

  useEffect(() => {
    fetch(DKB_SETTINGS_JSON_URL)
      .then(response => response.json())
      .then(data => {
        if (data) {
          const newRoomPricesPerNight = {
            [STANDARD_ROOM]: data["price_upstairs_euro"],
            [DELUXE_ROOM]: data["price_downstairs_euro"],
          }
          setRoomPricesPerNight(newRoomPricesPerNight)
        }

        console.log(data)
      })
      .catch(error => console.error('Settings error:', error));
  }, [])

  return (
    <HashRouter basename={'/'}>
      <Switch>
        <Route
          path={"/rooms/:roomType"}
          render={props => <RoomBookingPage {...props} roomPricesPerNight={roomPricesPerNight} />}
        />
        <Redirect from="/rooms" to="/rooms/downtown" />
        <Route
          path="/"
          render={props => <Index {...props} roomPricesPerNight={roomPricesPerNight}
          />} />
        <Redirect to="/" />
      </Switch>
    </HashRouter>
  )
}