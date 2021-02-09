import React from 'react'
import {useParams} from 'react-router-dom';// use params recup le lien de history qui est dans la page accueil apres le + 
export default function Meteo() {
    const params = useParams();
    return (
        <div className={params.temperature>16 ?'app chaud':'app froid'}>
           {params.temperature > 16? 'il faut chaud ':'il fait froid'}
        </div>
    )
}
