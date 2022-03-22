import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {traerdetalles, borrardetalles } from '../action/index'
import '../assets/styles/detalles.scss'
import style from '../assets/styles/detalles.module.css'
import matrixfondo from '../assets/statics/matrix-code2.gif'


export default function Detalles(props) {
const dispatch = useDispatch();
const detallado = useSelector((state) => state.detail);
console.log(detallado)

const id = props.match.params.id

useEffect(()=>{
    if (detallado){dispatch(borrardetalles())}
}, [dispatch])

useEffect(() => {
dispatch(traerdetalles(id));
}, [dispatch]);

window.scrollTo(0, 0);
return (
    <div  id="container">
    {detallado ? (
        <div className={style.generalDiv} >
         
        <h1 className={style.title} >{detallado.name}</h1>
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
            Lanzamiento: 
            </h4>
        </div>
        <div className={style.ratingDiv}>
            <h5 className={style.ratingNumbers} >
            Rating: {detallado.rating}
            </h5>
        </div>
        <div>
            <img className={style.backgroundBlur} src={matrixfondo} alt="BackgroundImage.jpg"/>
        </div>
        </div>
    ) : (
        <div className={style.loadersGeneral} >
        <div className={style.megaman}>  <img src="../assets/statics/loader.gif" alt="loaderMegaman.gif" /> </div>
    <div>   <img src="" alt="loading.gif" /></div>
    </div>
        )}
    <div className={style.goBackDiv} >
    <Link to="/home">
        <button className={style.GoBackButton}>Go Back</button>
    </Link>
    </div>
    </div>
);
}
