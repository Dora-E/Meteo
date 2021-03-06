import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  useHistory,
} from "react-router-dom";
// definition de l'api pour la recup
const api ={
 key: "98b7465353d383f3d0f3bc4a284a48ae",
 base : "http://api.openweathermap.org/data/2.5/"
} 

///weather?q=${city},${country}&appid=${key}
function Accueil() {
  const history = useHistory();
//recupere info dans l'api donner 
const[temp, setTemp]=useState('');//useState est vide de base 
const [meteo,setMeteo]= useState({});

const chercher = evt =>{
  if(evt.key ==="Enter"){
    //  recup l'api afin de pouvoir la parcourir temp est ce que l'on chercher 
    fetch(`${api.base}weather?q=${temp}&units=metric&APPID=${api.key}`)
    .then(res=>res.json())
    .then(result=>{
      setMeteo(result);// retourne une reponse de la recherche 
      setTemp('') // reviens a l'etat de base cad vide 
      
    })
  }
}

const temperature=(e)=>{
  history.push("/Meteo/" + meteo.main.temp)// redirige vers la page méteo en envoyant la variable que j'ai recupere de lapi dans le state meteo 
}


// recupere la date du jour en créant un tableau contenant les valeurs a afficher le mois et le jour 
  const date = (d)=>{
    let months = ["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Decembre"];
    let days = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }
  return (
<div className="app">
<main>
  <h1>Météo</h1>
    <div className="barre-recherche">
      <input type="text"
        className="search"
        placeholder="Chercher..."
        //prend la valeur qui est inserer dans le input et lance la fonction chercher definie au dessus afin d'afficher le resultat
        onChange={e=>setTemp(e.target.value)}
        value={temp}
        onKeyPress={chercher} />
      
    </div>
    {(typeof meteo.main != "undefined") ? (
    <div>
      <div className="container">
       <div className="location" onClick={temperature}> {meteo.name}, {meteo.sys.country}</div>
       <div className="date">{date(new Date())}</div>

    </div>

    <div className="box-meteo">
       <div className="temperature">{Math.round(meteo.main.temp)}°c</div>
       <div className="temp">{meteo.weather[0].main}</div>
    </div>
    </div>
     ) : ('')}
  </main>
</div>
  );
}

export default Accueil;
