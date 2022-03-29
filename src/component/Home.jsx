import {React, useState} from "react";
import Card from "./Card";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllVideoGames, getGenres, ordenalfabetico, ordenrating, ordengeneros, filtrarorigen, setpagina } from "../action";
import Paginador from "./paginador";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import '../assets/styles/home.scss'
import loader from '../assets/statics/transp.gif'
import gameover from '../assets/statics/ASBCM8.gif'
import Footer from '../component/Footer'



const Home = () => {
    const dispatch = useDispatch();
    const videogames = useSelector((state) => state.videogames);
    const genres = useSelector((state)=>state.genres);
    const favoritos = useSelector((state)=>state.favoritos)
    const pagina = useSelector((state=>state.pagina))
    
    const flagLoad = useSelector((state) => state.flagLoad);
    //console.log(flagLoad)
    
    const vistaporpagina = 14;
    
    

    //console.log(videogames)
    //console.log(genres)
    //console.log(aquiyahora)
    //console.log('esto es favoritos---->',favoritos)
    
    const mostrarultimo = pagina * vistaporpagina
    const mostrarprimer = mostrarultimo - vistaporpagina
    const juegosenpantalla = videogames.slice(mostrarprimer, mostrarultimo)
    //console.log(juegosenpantalla)
    
    const paginado = (numero) =>{
        dispatch(setpagina(numero))
    }  
    function handlefiltrodeorigen(e) {
      dispatch(setpagina(1))
      dispatch(filtrarorigen(e.target.value));
    }
    function handleOrdenrating(e){
        e.preventDefault();
        dispatch(ordenrating(e.target.value));
        dispatch(setpagina(1))
        }
    
    function handleOrdenAlfabetico(e){
        e.preventDefault();
        dispatch(ordenalfabetico(e.target.value));
        dispatch(setpagina(1));
        ;}

    function handleOrdenGeneros(e){
        e.preventDefault();
        dispatch(ordengeneros(e.target.value))
        dispatch(setpagina(1))
    }
    function handleResetsFilters() {
    window.location.reload();
    // dispatch(getAllVideoGames());
    // dispatch(setpagina(1))

    }
    
      
    useEffect(()=>{
        if(!genres.length) {dispatch(getGenres())}
    }, [dispatch]);
    useEffect(() => {
        if (!videogames.length) {dispatch(getAllVideoGames())}
    }, [dispatch]);

    window.scrollTo(0, 0);

    

return (
  <div className="Home">
    <nav className="nav">
      <SearchBar/>
      
      <div className="createVideogame">
        <Link key='create' to="/crearvideogame">Crear Videojuego</Link>
      </div>

      <div className="createVideogame2">
        <Link key='contacto' to="/contacto">contacto</Link>
      </div>

        <div className="divReset">
            <button id="reset" className="buttonReset" onClick={e => handleResetsFilters(e)}>
            limpiar busqueda
            </button>
        
        </div>

       
   
    <div className="filtersCss">

        <div className="alphabeticalOrder">
                
                <label className="labels">Orden Alfabetico</label>
            
            <select id="filteralfa"
                className="selects"
                onChange={(e)=>handleOrdenAlfabetico(e)} >
                
                <option  value="SIN">sin filtro</option>
                <option value="ASCENDENTE"> de la A a la Z</option>
                <option value="DESCENDENTE">de la Z a la A</option>
            </select>
        </div>

        <div className="OrderByRating">
            
            <label className="labels" > Orden por Rating</label>
           
            <select id="filterRating"
            className="selects"
                    onChange={(e)=>handleOrdenrating(e)}>
                <option value="SIN">sin filtro</option>
                <option value="ASCENDENTE">los mejores primeros</option>
                <option value="DESCENDENTE">los peores primeros</option>
            </select>
        </div>

        <div className="filterByGenres">
            <label className="labels" >Orden por Genero</label>
            <select 
                id="my_select"
                className="selects"
                onChange={(e)=>handleOrdenGeneros(e)}>
                  
                <option  value="TODOS">Todos</option>
                {genres.map((genero)=>(
                    <option key={genero.id}
                      required value={genero.name} >
                            {genero.name}
                </option>
                      ))}
            </select>
            </div>
            <div className="filterByOrigin">
            <label className="labels">Orden Por Origen </label>
            <select
              className="selects"
              onChange={(e) => handlefiltrodeorigen(e)}
            >
              <option value="todos" key="all">
                todos
              </option>
              <option value="db" key="Ctd">
                Videogames en DB interna
              </option>
              <option value="apiData" key="API">
                Videogames traidos de API
              </option>
            </select>
          </div>

        </div>
        
        <Paginador
        cantidadJuegos={vistaporpagina}
        allVideogames={videogames.length}
        paginado={paginado}
                />
      
        </nav
        > 
        {flagLoad ? (
        <div >
        <div className="LoaderGi">
          <img className="imagloadtrannohay" src={loader} alt="loader.gif" />
        </div>
        
      </div>
      ) : (
        <div className="parent">
          <div className="favoritos">
          { favoritos ? (
            favoritos.map((e)=>{
              return (
                <Card
                className
                image={e.image}
                name={e.name}
                key={e.id}
                genres={e.genres}
                rating={e.rating}
                id={e.id}
                isList
                />
                

              )
            }
            )
             ):(undefined)}
            </div>

          


          {juegosenpantalla.length ? 
          
          (
            juegosenpantalla.map((e) => {
              return (
                // <Link key={e.id} to={"/home/" + e.id}>
                <Card
                image={e.image}
                name={e.name}
                key={e.id}
                genres={e.genres}
                rating={e.rating}
                id={e.id}
                />
                // </Link>
                
                );
              })
              ) 
              
              : (
                <div>
            <div className="gameover">
            <img src={gameover} alt="game over" />
          </div>
            <div className="noResultsDiv">
              <h3>aqui no hay nada, juego terminado!... vuelve al inicio</h3>
            </div>
            </div>
          )}
          
        </div>
      )}
      
                
                
      </div>
      )
}

export default Home