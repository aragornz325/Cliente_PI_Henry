import axios from "axios";
import { GET_INICIAL, 
 TRAER_UNO_NOMBRE,
 FILTRAR_ORIGEN,
 TRAER_TODOS, 
 TRAER_GENEROS, 
 ORDENAR_ALFABETICAMENTE, 
 ORDENAR_PUNTUACION, 
 TRAER_DETALLES,
 ORDENAR_GENEROS, 
 BORRAR_DETALLES, } from './constantes.js'

//  https://backendhenrypi.herokuapp.com

export function traerpornombre(name) {
    return async function (dispatch) {
      try {
        dispatch({
          type: GET_INICIAL
        })
        let json = await axios.get("http://localhost:3001/api/videogames?name=" + name
        );
        dispatch({
          type: TRAER_UNO_NOMBRE,
          payload: json.data,
        });
      } catch (error) {
        alert(`no se puede completar debido al ${error}`)
        console.log(error);
      }
    };
  }
  


export function filterByOrigin(payload) {
    return {
    type: FILTRAR_ORIGEN,
    payload,
    };
}


export function getAllVideoGames() {
    return async function (dispatch) {
        dispatch({type: GET_INICIAL})
        try {
            let data = await axios.get('https://backendhenrypi.herokuapp.com/api/videogames',);
            dispatch({
                type: TRAER_TODOS,
                payload: data.data,
            })
            //alert('se cargaron todos los juegos')
        } catch(error) {
            alert(`no se puede iniciar debido al ${error}`)
            console.log(error)
            
        }
    }
}

export function getGenres() {
    return async function (dispatch){
        
       try {
            let datagen = await axios.get(`https://backendhenrypi.herokuapp.com/api/genres`);
            //console.log(datagen.data)
            dispatch({
                type: TRAER_GENEROS,
                payload: datagen.data
            })
            //alert(`se cargo ${datagen.data}`)
        } catch(error) {
            alert(`no se puede trar los generos debido al ${error}`)
            console.log(error)
        }
    }
};


export function ordenalfabetico(payload) {
    return {
        type: ORDENAR_ALFABETICAMENTE,
        payload: payload,
    }
};

export function ordenrating(payload){
    return {
        type: ORDENAR_PUNTUACION,
        payload: payload
    }
};

export function ordengeneros(payload){
    return {
        type: ORDENAR_GENEROS,
        payload: payload
    }
};

export function traerdetalles(id) {
    return async function (dispatch) {
    try {
        let json = await axios.get("https://backendhenrypi.herokuapp.com/api/videogame/" + id);
        dispatch({
        type: TRAER_DETALLES,
        payload: json.data
    });
    console.log(json.data)
    } catch (error) {
        console.log(error);
        alert (`el detalle no esta disponible--->${error}`)
    }
    };
}

export function borrardetalles() {
    return {
    type: BORRAR_DETALLES
    }
}


export function crearJuego(payload) {
    return async function () {
    try {
        let json = await axios.post("https://backendhenrypi.herokuapp.com/api/videogame", payload);
        alert('juego creado exitosamente') 
        return json;
    } catch(error) {
        console.log(error)
        alert(`el juego no fue creado debido al ${error}`)
    }
}
}