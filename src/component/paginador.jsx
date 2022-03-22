import React from "react";
//import Style from '../components/CSS/Paginado.module.css'
import '../assets/styles/paginado.scss'


const Paginador= function({cantidadJuegos, allVideogames, paginado}) {
const pageNumbers = [] 

for (let i = 1; i<=Math.ceil(allVideogames/cantidadJuegos); i++) {
    pageNumbers.push(i)
}
return(
    <nav>
        <div className="contenedorboton">
            {pageNumbers?.map(numero =>(
            <button className="numero"
                    key={numero} 
                    onClick={() => 
                    paginado(numero)}>
                        {numero}
                    </button>
                ))
            }
        </div>
    </nav>
)
}

export default Paginador