import React, { useState } from 'react';
import Accueil from "./components/Accueil";
import Meteo from "./components/Meteo"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
  Link
} from "react-router-dom";


function App() {
  return (
<Router>
  <Switch>
    <Route exact path="/" component={Accueil}/>
    <Route  path="/Meteo/:temperature" component={Meteo}/>
  </Switch>
</Router>
  );
}

export default App;
