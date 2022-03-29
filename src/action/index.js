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
    BORRAR_DETALLES,
    SET_FAVORITOS,
    BORRAR_FAVORITO,
    SET_PAGINA } from './constantes.js'
    
    //  https://backendhenrypi.herokuapp.com
    
    export function getGenres() {
        return (dispatch) => {
            axios.get("https://backendhenrypi.herokuapp.com/api/genres")
            .then((generos) => { dispatch({
                type: TRAER_GENEROS,
                payload: generos.data,
            });
        }).catch((error) => console.log(error));
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


export function setpagina(payload){
    return {
        type:SET_PAGINA,
        payload:payload
    }
}

export function traerpornombre(name) {
    return async function (dispatch) {
        try {
            dispatch({
                type: GET_INICIAL
            })
            let json = await axios.get("https://backendhenrypi.herokuapp.com/api/videogames?name=" + name
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


export function filtrarorigen(payload) {
    return {
        type: FILTRAR_ORIGEN,
        payload: payload,
    };
}


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
            console.log(payload)
            return json;
        } catch(error) {
            console.log(error)
            alert(`no se creo, el elemento ya existe, ${error}`)
        }
    }
}

export function crearcontacto(payload) {
    return async function () {
        try {
            let json = await axios.post("https://backendhenrypi.herokuapp.com/api/contacto", payload);
            alert('recibimos su mensaje') 
            console.log(payload)
            return json;
        } catch(error) {
            console.log(error)
            alert(`no pudimos enviar su mensaje, ${error}`)
        }
    }
}

export function borrarfavorito (payload){
   console.log('payload borrar----->',payload)
    return{
        type: BORRAR_FAVORITO,
        payload: payload
    }
}

export function agregarfavoritos (payload){
    return {
        type: SET_FAVORITOS,
    payload: payload,
};
}


// export function getVideogames() {
//   return (dispatch) => {
//     axios.get("http://localhost:3001/videogames").then((games) => {
//       dispatch({
//         type: "GET_VIDEOGAMES",
//         payload: games.data,
//       });
//       console.log("asd", games.data);
//     });
//   };
// }


 

      //     export function getDetail(id) {
      //       return (dispatch) => {
      //         axios.get("http://localhost:3001/videogame/" + id)
      //           .then((game) => { dispatch({
      //             type: "GET_DETAIL",
      //             payload: game.data,
      //           });
      //         });
      //       };
      //     }
