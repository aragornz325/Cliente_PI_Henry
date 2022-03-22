import React from 'react'
import '../assets/styles/card.scss'
import plusIcon from "../assets/statics/plus-icon.png"
import playIcon from "../assets/statics/play-icon.png"

export default function Card ({image, name, genres}) {
return (
    <div className="card-item">

    <img className="card-item__img" src={image} alt={image}  />
    
    <div className="card-item__details">
      <div>
        <img className="card-item__details--img" src={playIcon} alt="Play Icon" />
        <img className="card-item__details--img" src={plusIcon} alt="Plus Icon" />
    </div>
    <p className="card-item__details--title">{name}</p>
    <div className="genres">
            {genres.map((g)=>(
                <span key={g.id}>{g.name}</span>
                ))}
    </div>
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

