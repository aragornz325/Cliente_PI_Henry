import React from 'react'
import '../assets/styles/card.scss'
import plusIcon from "../assets/statics/plus-icon.png"
import playIcon from "../assets/statics/play-icon.png"
import deleteIcon from "../assets/statics/remove-icon_a56b8107-2c02-49ed-bead-308031b0dd76.png"
import { useDispatch } from "react-redux";
import {agregarfavoritos, borrarfavorito} from '../action/index'
import { Link } from 'react-router-dom'

export default function Card ({id,image, name, genres, rating, isList}) {
  const dispatch = useDispatch();
  
  //console.log(id)
  const handleSetFavoritos = (e) => {
    dispatch(agregarfavoritos({
      id,image, name, genres, rating
    }))
  }

  function handleBorrarFavorito (id)  {
    console.log('id enviado---->', id)
    dispatch(borrarfavorito(id))
  }
  const handledetalles = (e) => {
    <Link key={e.id} to={"/home/" + e.id}></Link>
  }

  return (
    
    <div className="card-item">
    <img className="card-item__img" src={image} alt={image}  />
    
    <div className="card-item__details">
      <div className='card-item__civ'>
      <p className="card-item__details--titleee" >&#11088;</p>
        <p className="card-item__details--titlee">{rating}</p>
    

    </div>
    
    <p className="card-item__details--title">{name}</p>
    <div className="card-item__details--subtitle">
            {genres.map((g)=>(
              <span >{g.name}/</span> 
              ))}
              

    </div>
     {isList ? <img
          value={id}
          onClick={(e)=>handleBorrarFavorito(id)}
          className='card-item__imgeee'
          src={deleteIcon}
    alt="imagen"/> :
    <>
    <img  onClick={(e)=>handleSetFavoritos()} 
          className="card-item__imgee" 
          src={plusIcon} 
          alt={plusIcon} />
    
    <Link key={id} to={"/home/" + id}>
    <img 
         onClick={()=>handledetalles(id)} 
         className="card-item__imgeeee"
         src={playIcon} 
         alt='imagen2'
         />
    </Link>
     </>
    
     }

    {/* <img
          className='card-item__imgeee'
          src={deleteIcon}
    />
    <img  onClick={(e)=>handleSetFavoritos()} 
        className="card-item__imgee" 
        src={plusIcon} 
        alt={plusIcon}
         /> */}
    
    </div>
  </div>
  
)}





//<div>
//         <img src={image}/>
//     <div>
//         <div>

//         </div>
//         <h4 >{name}</h4>
//         <div className="genres">
//             {genres.map((g)=>(
//                 <span key={g.id}>{g.name}</span>
//                 ))}
//      </div>
// )  </div>
//}

