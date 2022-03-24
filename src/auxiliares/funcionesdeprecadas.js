      //  {flagload === 'true' ? (
      //                       <div>
      //                       <div className="matrix">
      //                           <h1>cargando...</h1>
      //               <img src="../assets/statics/matrix-code.gif" alt="" />
      //                           </div>
      //                           </div>
      //               )
      //   :  
      //           (
      //               <div>
                    
      //       {juegosenpantalla.length ? 
                
      //       (juegosenpantalla.map((e)=>{
      //           return( 
      //               <Card 
      //               image={e.image}
      //               name={e.name}
      //               key={e.id}
      //               genres={e.genres}
      //               /> )
      //       })

      //           )
      //       :
      //           ( 
      //           <div className="matrix">
      //           <img src="../assets/statics/matrix-code.gif" alt="" />
      //           </div> 
      //       )
      //       }
        
      //               </div>
      //           )
      //   }




      //   ----------------------------------------------------------------------

      //   export function getAllVideogames() {
      //       return (dispatch) => {
      //         axios
      //           .get("http://localhost:3001/videogames")
      //           .then((juegos) => {
      //             dispatch({
      //               type: GET_ALL_VIDEOGAMES,
      //               payload: juegos.data,
      //             });
      //           })
      //           .catch((error) => console.log(error));
      //       };
      //     }



      //     export function getAllGenres() {
      //       return (dispatch) => {
      //         axios.get("http://localhost:3001/genres").then((generos) => {
      //           dispatch({
      //             type: GET_ALL_GENRES,
      //             payload: generos.data,
      //           });
      //         });
      //       };
      //     }


      //     export function getVideogameDetail(id) {
      //       return (dispatch) => {
      //         axios.get("http://localhost:3001/videogame/" + id).then((game) => {
      //           dispatch({
      //             type: GET_VIDEOGAME_DETAIL,
      //             payload: game.data,
      //           });
      //         });
      //       };
      //     }



// --------------------------------------------------------------------
{/* <nav>
        <div className="contenedorboton">
        {ultimapagina ? (<button className="numero"
        onClick={()=>prev()}>prv
        </button>):(null)}
        {pageNumbers?.map(numero =>(
             <button className="numero"
                    key={numero} 
                    onClick={() => 
                    paginado(numero)}>
                        {numero}
                    </button>
                ))
            }
        {ultimapagina ? (<button className="numero"
        onClick={()=>sig()}>prv
        </button>):(null)}
            
        </div>
    </nav> */}


    // const prev =function(){
    //   if(aquiyahora > 1) {
    //     setaquiyahora(aquiyahora - 1)
    //   }
    // }
    // const sig =function(){
    //   if(aquiyahora < ultimapagina) {
    //     setaquiyahora(aquiyahora + 1)
    //   }
    // }