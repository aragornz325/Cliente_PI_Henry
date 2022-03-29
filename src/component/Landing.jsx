import React from 'react'
import { useEffect, } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllVideoGames, getGenres } from "../action";
import { Link } from "react-router-dom";
import  '../assets/styles/landing.scss'
import cargando from '../assets/statics/7pld.gif'
import gifloader from '../assets/statics/SomberOfficialHoiho-size_restricted.gif'



const Landing = () => {

  const dispatch = useDispatch();
  const videogames = useSelector((state) => state.videogames);
  const genres = useSelector((state)=>state.genres);

  useEffect(()=>{
    if(!genres.length) {dispatch(getGenres())}
});
useEffect(() => {
    if (!videogames.length) {
        dispatch(getAllVideoGames())
    }
});

  return (
    <div >
        {videogames.length < 1 ? (
        <div className="landing">
          <img className="cargando" src={cargando} alt="gif cargando" />
          <img className="pantallaso" src={gifloader} alt="" />
     <div className="conectStart">.</div>
    </div>):(<div className="landing">
    <div className="landing">
          <img className="pantallaso2" src={gifloader} alt="" />
      <Link to='/home'>
     <button className="ButtonStart">
             Start
         </button>
     </Link>
     </div>     
     <div className="conectStart">.</div>
          </div>
    )}



    </div>
  )
}

export default Landing