import React from 'react'
import {useParams} from 'react-router-dom'; 
export default function Meteo() {
    const params = useParams();// use params recup le lien de history qui est dans la page accueil + les variable ajouter 
    return (
        <div className="container">
             
          <div className={params.temperature>16 ?'app chaud':'app froid'}>
           {params.temperature >= 15? 'Il fait chaud ':'Il fait froid'}
        </div>   
        </div>
       
    )
}
