import React from 'react';
import Accueil from "./components/Accueil";
import Meteo from "./components/Meteo"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";


function App() {
  return (
<Router>
  <Switch>
    <Route exact path="/" component={Accueil}/>
    {/* route vers la page meteo quiu prend en param la temperature
     */}
    <Route  path="/Meteo/:temperature" component={Meteo}/> 
  </Switch>
</Router>
  );
}

export default App;
