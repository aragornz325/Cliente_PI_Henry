import axios from "axios";


export function traerpornombre(name) {
    return async function (dispatch) {
      try {
        dispatch({
          type: 'GET_INIT'
        })
        let json = await axios.get(
          "http://localhost:3001/api/videogames?name=" + name
        );
        dispatch({
          type: "GET_VIDEOGAMES_NAME",
          payload: json.data,
        });
      } catch (error) {
        console.log(error);
      }
    };
  }
  


export function filterByOrigin(payload) {
    return {
    type: "FILTER_BY_ORIGIN",
    payload,
    };
}


export function getAllVideoGames() {
    return async function (dispatch) {
        dispatch({type: "GET_INICIAL"})
        try {
            let data = await axios.get('http://localhost:3001/api/videogames', []);
            dispatch({
                type: "TRAER_TODOS",
                payload: data.data,
            })
            //alert('se cargaron todos los juegos')
        } catch(error) {
            alert(`se cago algo, revisa`)
            console.log(error)
            
        }
    }
}

export function getGenres() {
    return async function (dispatch){
        
       try {
            let datagen = await axios.get(`http://localhost:3001/api/genres`);
            //console.log(datagen.data)
            dispatch({
                type: "TRAER_GENEROS",
                payload: datagen.data
            })
            //alert(`se cargo ${datagen.data}`)
        } catch(error) {
            console.log(error)
        }
    }
};


export function ordenalfabetico(payload) {
    return {
        type: "ORDENAR_ALFABETICAMENTE",
        payload: payload,
    }
};

export function ordenrating(payload){
    return {
        type: "ORDENAR_PUNTUACION",
        payload: payload
    }
};

export function ordengeneros(payload){
    return {
        type: "ORDENAR_GENEROS",
        payload: payload
    }
};

export function traerdetalles(id) {
    return async function (dispatch) {
    try {
        let json = await axios.get("http://localhost:3001/api/videogame/" + id);
        dispatch({
        type: "TRAER_DETALLES",
        payload: json.data
    });
    console.log(json.data)
    } catch (error) {
        console.log(error);
        alert ('el detalle no esta disponible')
    }
    };
}

export function borrardetalles() {
    return {
    type: "BORRAR_DETALLES"
    }
}


export function crearJuego(payload) {
    return async function () {
    let json = await axios.post("http://localhost:3001/api/videogame", payload);
    return json;
}
}