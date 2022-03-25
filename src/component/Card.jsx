import React from 'react'
import '../assets/styles/card.scss'
import plusIcon from "../assets/statics/plus-icon.png"
import playIcon from "../assets/statics/play-icon.png"
import ratingIcon from "../assets/statics/png-clipart-computer-icons-ranking-miscellaneous-sport.png"

export default function Card ({image, name, genres, rating}) {
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
              <span key={g.id}>{g.name}/</span> 
              ))}
              

    </div>
    {/* <div className='card-item__details-divrat'>
    <p className="card-item__details--title">rating {rating}</p>
    </div> */}
      
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

