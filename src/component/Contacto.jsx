import { React ,useState } from 'react'
import {crearcontacto} from '../action/index'
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import '../assets/styles/contacto.scss'
import Footer from './Footer';
import { FaRegMoneyBillAlt } from 'react-icons/fa';
import {validadorContacto} from '../auxiliares/validador.js'


const Contacto = () => {
const dispatch = useDispatch(); 
const history = useHistory();
const [input, setInput] = useState ({
nombre:"",
apellido:"",
email:"",
direpost:"",
mensaje:"",

})

  const handleChange = (e) => {
        setInput({
          ...input,
          [e.target.name]: e.target.value,
        });
      }
  
function handlevolver(){
window.history.back()
}

const handleSubmit= (e)=> {
e.preventDefault();
let chequear=[]
validadorContacto(input, chequear)
if (chequear.length) {
        return alert((chequear.join('\n')));}
dispatch(crearcontacto(input))
setInput({
        nombre:" ",
        apellido:" ",
        email:" ",
        direpost:" ",
        mensaje:" ", 
})
history.push("/home");

}

    return (

    <div className='contGener'>
        <div className="titulo">
        <h1 className="h1titulo">envianos un mensaje</h1>
        </div>

        <div className="divform">
        <form  className='forma' onSubmit={(e)=>handleSubmit(e)} 
        id='formContacto' action="">
        <input  
                placeholder='ingresa tu nombre'
                type="text"
                name="nombre"
                value={input.name}
                onChange={(e)=>handleChange(e)}
                />
        <input  
                placeholder='ingresa tu apellido'
                type="text"
                name="apellido"
                value={input.apellido}
                onChange={(e)=>handleChange(e)}
                />
        <input 
                placeholder='ingresa tu mail'
                type="text"
                name='email'
                value={input.email}
                onChange={(e)=>handleChange(e)}
                />
        <input 
                type="text"
                name="direpost"
                value={input.direpost}
                placeholder="direccion postal"
                onChange={(e)=>handleChange(e)}
                />

        <textarea
                type="textarea"
                value={input.mensaje}
                placeholder='envianos tu comentario'
                name='mensaje'
                onChange={(e)=>handleChange(e)}
                />

        <button className='botonsub' type='submit'>enviar</button>

        </form>
        <button className='backhome' onClick={()=>handlevolver()}>regresar a casa</button>
        </div>







        
    </div>
  )
}

export default Contacto