import React from 'react'
import '../assets/styles/NotFound.scss'
import gif404 from '../assets/statics/404.gif'

const NotFound = () => {
  return (
    <>
        <div className="general">
          <div className='divimag'>
          <h1>no hay nada aca 404</h1>
            <img className='gif404' src={gif404} alt='404'/>
            </div> 
        </div>
    
    
    
    </>
    
  )
}

export default NotFound