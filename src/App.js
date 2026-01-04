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

const DKB_SETTINGS_JSON_URL = "https://script.googleusercontent.com/macros/echo?user_content_key=opO6-W64iSMKyM815F1IMvODhkBmZS81jPshNiJx7h_Jn0IvB_dIUGkZI89cWzPjnnrNaTJUjTflL7ot4gtRSCk3yQZA_yK_m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnCR6h95xpb4Aax6PoRabciAjOqctesc39UjaXN15lkLXOTwQj2gUpg4s51vEn2tf-NmH2VjQcrKWfb0LkOqTioDkGUvUIS6mYtz9Jw9Md8uu&lib=M7Z-NvP2-JZ8oM84JbUDQKPgDtBN8_N8s"

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