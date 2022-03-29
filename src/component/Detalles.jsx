import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {traerdetalles, borrardetalles,} from '../action/index'
import '../assets/styles/detalles.scss'




export default function Detalles(props) {
const dispatch = useDispatch();
const detallado = useSelector((state) => state.detail);
console.log(detallado)

const id = props.match.params.id


useEffect(()=>{
    if (detallado){dispatch(borrardetalles())}
}, [dispatch, id])

useEffect(() => {
dispatch(traerdetalles(id));
}, [dispatch]);

function handlevolver(){
    window.history.back()

}


window.scrollTo(0, 0);
return (
    <div  id="container">
    {detallado ? (
        <div className="generalDiv" >
         <div className="titleDiv">
        <h1 className="title" >{detallado.name}</h1>
        </div>
        <img className="onTopImg" src={detallado.image} alt=""/>
        <div className="genresDiv">
            <h2 className="genresWords" >
            Generos:  {detallado.genres.map((genre) => genre.name + " ")}
            </h2>
        </div>
        <div className="platformsDiv" >
            <h2 className="platformsWords" >
            Plataformas: {detallado.platforms.map(platform => platform + (' '))}
            </h2>
        </div>
        <div className="descriptionDiv" >
            <h4 className="descriptionWords"
            dangerouslySetInnerHTML={{
                __html:detallado.description,
            }}
            />
        </div>
        <div className="releasedDiv">
            <h4 className="releasedWords">
            Lanzamiento: {detallado.released}
            </h4>
        </div>
        <div className="ratingDiv">
            <h5 className="ratingNumbers" >
            Rating: {detallado.rating}
            </h5>
        </div>
            

        <div>
            <img className="backgroundBlur" src={detallado.image} alt="BackgroundImage.jpg"/>
        </div>
        </div>
    ) : (
        <div className="loadersGeneral" >

        <div className="loadergif">  
        <img src="../assets/statics/conectando.gif" alt="loader" /> 
            <h1>redireccionando...</h1>
        </div>
       </div>
        )}
    <div className="goBackDiv" >
    
        <button onClick={()=>handlevolver()} 
        className="GoBackButton">volver</button>
    
    </div>
    </div>
);
}
