import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {traerdetalles, borrardetalles,} from '../action/index'
import style from '../assets/styles/detalles.module.css'




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
        <div className={style.generalDiv} >
         <div className={style.titleDiv}>
        <h1 className={style.title} >{detallado.name}</h1>
        </div>
        <img className={style.onTopImg} src={detallado.image} alt=""/>
        <div className={style.genresDiv}>
            <h2 className={style.genresWords} >
            Generos:  {detallado.genres.map((genre) => genre.name + " ")}
            </h2>
        </div>
        <div className={style.platformsDiv} >
            <h2 className={style.platformsWords} >
            Plataformas: {detallado.platforms.map(platform => platform + (' '))}
            </h2>
        </div>
        <div className={style.descriptionDiv} >
            <h4 className={style.descriptionWords}
            dangerouslySetInnerHTML={{
                __html:detallado.description,
            }}
            />
        </div>
        <div className={style.releasedDiv}>
            <h4 className={style.releasedWords}>
            Lanzamiento: {detallado.released}
            </h4>
        </div>
        <div className={style.ratingDiv}>
            <h5 className={style.ratingNumbers} >
            Rating: {detallado.rating}
            </h5>
        </div>
            

        <div>
            <img className={style.backgroundBlur} src={detallado.image} alt="BackgroundImage.jpg"/>
        </div>
        </div>
    ) : (
        <div className={style.loadersGeneral} >

        <div className={style.loadergif}>  
        <img src="../assets/statics/conectando.gif" alt="loader" /> 
            <h1>redireccionando...</h1>
        </div>
       </div>
        )}
    <div className={style.goBackDiv} >
    
        <button onClick={()=>handlevolver()} 
        className={style.GoBackButton}>volver</button>
    
    </div>
    </div>
);
}
