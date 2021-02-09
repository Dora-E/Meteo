import React, { useState } from 'react';
const api ={
 key: "98b7465353d383f3d0f3bc4a284a48ae",
 base : "http://api.openweathermap.org/data/2.5/"
} 

///weather?q=${city},${country}&appid=${key}
function App() {
//recupere info dans l'api donner 
const[temp, setTemp]=useState('');// de base est vide 
const [meteo,setMeteo]= useState({});

const chercher = evt =>{
  if(evt.key ==="Enter"){
    fetch(`${api.base}weather?q=${temp}&units=metric&APPID=${api.key}`)
    .then(res=>res.json())
    .then(result=>{
      setMeteo(result);
      setTemp('')
      console.log(result)
    })
  }
}


// recupere la date du jour en créant un tableau contenant les valeur a afficher le moi et le jour 
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
<div className={(typeof meteo.main !="undefined")? ((meteo.main.temp>16 )?'app chaud':'app froid'):'app'}>
<main>
  <h1>Météo</h1>
    <div className="barre-recherche">
      <input type="text"
        className="search"
        placeholder="Chercher"
        onChange={e=>setTemp(e.target.value)}
        value={temp}
        onKeyPress={chercher} />
      
    </div>
    {(typeof meteo.main != "undefined") ? (
    <div>
      <div className="container">
       <div className="location"> <a></a>{meteo.name}, {meteo.sys.country}</div>
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

export default App;
