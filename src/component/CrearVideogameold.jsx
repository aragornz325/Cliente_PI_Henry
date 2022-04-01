import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { crearJuego, getGenres, getAllVideoGames } from "../action/index";
import { useDispatch, useSelector } from "react-redux";
import style from "../assets/styles/crearjuego.module.css";
import { DateTime } from "luxon";


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

 
  const validate = form => {
    let errors = {};
    if (!form.name) {
        errors.name = 'debes especificar un nombre';
    } else if (form.name.length < 3 ) {
        errors.name = 'el nombre del juego debe tener al menos 3 caracteres';
    }
    if (!form.description) {
        errors.description = 'debes describir tu videojuego';
    } else if (form.description.length < 8) {
        errors.description = 'la descripcion es demaciado corta'
    }
    if (!form.rating) {
        errors.rating = 'debes ranquear tu juego';
    } else if (!/^[1-5]$/.test(form.rating)) {
        errors.rating = 'el rating debe ser un numero entre el 1 y el 5';
    }
    if (!form.image) {return true}
    else if (!/(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)(jpg)\/?/gm.test(form.image)) {
      errors.image = "debes ingresar una url de una imagen valida";
  }
    

    /(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)(jpg)\/?/gm.test(form.Image)
    return errors;
}
    const [errors, setErrors] = useState();
    
    function handleChange(e) {
    
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
    if (form.genres.length < 1) chequear.push('debes especificar al menos un genero');
    if (form.platforms.length < 1) chequear.push('debes especificar las plataformas soportadas');
    if (Object.values(errors).length || chequear.length) { // Object.values --> retorno un array con los values
      return alert(Object.values(errors).concat(chequear).join('\n'));
  } 
    
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
    <div className={style.General}>
      <div className={style.transparentForm}>
        <h1 className={style.title}>Crea un videogame</h1>
        
        <form id="formCrear" className={style.form} onSubmit={(e) => handleSubmit(e)}>
          
          <div className={style.nameDiv}>
            <input
              className={style.nameInput}
              placeholder="Name"
              type="text"
              value={form.name}
              name="name"
              onChange={(e) => handleChange(e)}
              
            />
          </div>
          <div className={style.descriptionDiv}>
            <textarea
              className={style.descriptionInput}
              type="textarea"
              placeholder="Description"
              value={form.description}
              name="description"
              spellCheck="true"
              onChange={(e) => handleChange(e)}
              
            />
          </div>
          <div className={style.dateDiv}>
            <input
              className={style.dateInput}
              type="Date"
              min="1952-01-01"
              max={hoy}
              value={form.released}
              name="released"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className={style.ratingDiv}>
            <input
              className={style.ratingInput}
              placeholder="Debe ingresar un número entre 1 y 5"
              title="rating"
              id="Rating"
              step="any"
              type="number"
              value={form.rating}
              min="1,0"
              max="5,0"
              name="rating"
              onChange={(e) => handleChange(e)}
              
            />
          </div>

          <div className={style.imageDiv}>
            <input
              className={style.imageInput}
              placeholder="Ingresa la URL de tu imagen"
              title="Debe ingresar una URL valida"
              id="Image"
              type="url"
              value={form.image}
              name="image"
              onChange={(e) => handleChange(e)}
              
            />
          </div>

          <label className={style.labelGenres}>Genres: </label>
          <select
            name="selGenre"
                        className={style.selectGenres}
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

          <label className={style.labelPlatforms}>Platforms: </label>
          <select
            name="selPlat"
            className={style.selectPlatforms}
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
          <button className={style.buttonDone} type="submit">
            Crear !
          </button>

          <button  className={style.buttonhome} >
            <Link to="/home"> 
            volver a casa
            </Link>
          </button>
        </form>
        <div className={style.divRenderGenres}>
          {form.genres.map((e) => (
            <div>
              {e + " "}
              <button
                key="btnXgenres"
                className={style.buttonXgenres}
                onClick={() => handleDeleteGenres(e)}
              >
                x
              </button>
            </div>
          ))}
        </div>
        <div className={style.divRenderPlatforms}>
          {form.platforms.map((e) => (
            <div>
              {e + " "}
              <button
                key="btnXPlatforms"
                className={style.buttonXplatforms}
                onClick={() => handleDeletePlatforms(e)}
              >
                x
              </button>
          
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
