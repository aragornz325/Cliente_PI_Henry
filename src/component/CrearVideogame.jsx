import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { crearJuego, getGenres, getAllVideoGames } from "../action/index";
import { useDispatch, useSelector } from "react-redux";
import "../assets/styles/crearjuego.scss";
import { DateTime } from "luxon";
import {validador} from '../auxiliares/validador'



export default function VideogameCreate() {
  const hoy = DateTime.now().toISODate()
  const dispatch = useDispatch();
  const history = useHistory();
  const genres = useSelector((state) => state.genres);
  const videogames = useSelector((state) => state.videogames);
  let platforms = [];
  if (videogames) {
    platforms = videogames.map((game) =>
      game.platforms.find((platform) => platform)
    );
    platforms = Array.from(new Set(platforms));
  }


 
  const [form, setForm] = useState({
    name: '',
    description: '',
    releaseDate: '',
    rating: 0,
    image: undefined,
    genres: [],
    platforms: []
});

const handleChange = (e) => {
  setForm({
    ...form,
    [e.target.name]: e.target.value,
  });
}

  function handleSelectGenres(e) {
    if(e.target.value !=="vacio1" && !form.genres.includes(e.target.value))
    setForm({
      ...form,
      genres: [...form.genres, e.target.value],
    });
  }
  
  function handleSelectPlatforms(e) {
    if(e.target.value !=="vacio2" && !form.platforms.includes(e.target.value))
    setForm({
      ...form,
      platforms: [...form.platforms, e.target.value],
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    let chequear=[]
   validador(form, chequear)
    if (chequear.length>=1) {
      return alert((chequear.join('\n')));
  } else {chequear.push(null)}
    
    dispatch(crearJuego(form));
    
    setForm({
      name: "",
      description: "",
      released: "",
      rating: "",
      image: undefined,
      genres: [],
      platforms: [],
    });
    history.push("/home");
    dispatch(getAllVideoGames());
  }

  function handleDeleteGenres(e) {
    setForm({
      ...form,
      genres: form.genres.filter((genre) => genre !== e),
    });
  }
  
  function handleDeletePlatforms(e) {
    setForm({
      ...form,
      platforms: form.platforms.filter((platform) => platform !== e),
    });
  }

  useEffect(() => {
    dispatch(getGenres());
    if(videogames.length < 2 ){ dispatch(getAllVideoGames())}
  }, [dispatch]);
  return (
    <div className="General">
      <div className="transparentForm">
        <h1 className="title">Crea un videogame</h1>
        
        <form id="formCrear" className="form" onSubmit={(e) => handleSubmit(e)}>
          
          <div className="nameDiv">
            <input
              className="nameInput"
              placeholder="Name"
              type="text"
              value={form.name}
              name="name"
              onChange={(e) => handleChange(e)}
              
            />
          </div>
          <div className="descriptioDiv">
            <textarea
              className="descriptionInput"
              type="textarea"
              placeholder="Description"
              value={form.description}
              name="description"
              spellcheck="true"
              onChange={(e) => handleChange(e)}
              
            />
          </div>
          <div className="dateDiv">
            <input
              placeholder="fecha lazamiento"
              className="dateInput"
              type="Date"
              min="1952-01-01"
              max={hoy}
              value={form.released}
              name="released"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="ratinDiv">
            <input
              className="ratinInput"
              placeholder="Ting / número entre 1 y 5"
              title="rating"
              id="Rating"
              step="0.5"
              type="number"
              value={form.rating}
              min="1.0"
              max="5.0"
              name="rating"
              onChange={(e) => handleChange(e)}
              
            />
          </div>

          <div className="imageDiv">
            <input
              className="imageInput"
              placeholder="Ingresa la URL de tu imagen"
              title="Debe ingresar una URL valida"
              id="Image"
              type="url"
              value={form.image}
              name="image"
              onChange={(e) => handleChange(e)}
              
            />
          </div>

          <label className="labelGenres">Genres: </label>
          <select
            name="selGenre"
                        className="selectGenres"
            onChange={(e) => handleSelectGenres(e)}
          >
            <option value="vacio1">seleccionar</option>
            {genres.map((genre) => (
              <option key={genre.id} 
                      value={genre.name}>
                      
                      {genre.name}
                      
              </option>
            ))}
          </select>

          <label className="labelPlatforms">Platforms: </label>
          <select
            name="selPlat"
            className="selectPlatforms"
            onChange={(e) => handleSelectPlatforms(e)}
          >
            <option value="vacio2">seleccionar</option>

            {platforms.map((platform, index) => (
              <option key={index} 
                      value={platform} 
                      required  >

                      {platform}
              </option>
            ))}
          </select>
          <button className="buttonDone" type="submit">
            Crear !
          </button>

          
        </form>
        <div className="divRenderGenres">
          {form.genres.map((e) => (
            <div>
              {e + " "}
              <button
                key="btnXgenres"
                className="buttonXgenres"
                onClick={() => handleDeleteGenres(e)}
              >
                x
              </button>
            </div>
          ))}
        </div>
        <div className="divRenderPlatforms">
          {form.platforms.map((e) => (
            <div>
              {e + " "}
              <button
                key="btnXPlatforms"
                className="buttonXplatforms"
                onClick={() => handleDeletePlatforms(e)}
              >
                x
              </button>
          
            </div>
          ))}
            <Link to="/home"> 
            <button  
            className="buttonhoome" >
            volver a casa
          </button>
            </Link>
        </div>
      </div>
      
    </div>
  );
}