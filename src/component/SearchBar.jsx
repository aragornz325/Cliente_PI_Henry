import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { traerpornombre } from "../action/index";
import '../assets/styles/serchbar.scss'

export default function SearchBar() {
 const dispatch = useDispatch()
 const [name, setName] = useState('')

    function handleInputChange(e) {
        e.preventDefault()
        setName(e.target.value)
    }
    function handleSubmit(e) {
        e.preventDefault()
        dispatch(traerpornombre(name))
        setName('')
    } 
 return (
     <div className="GeneralSearch">
         <form onSubmit={handleSubmit} autoComplete="off">
         <input 
         className="SearchInput"
         type="text" 
         name='search'
         id='Search'
         value={name}
         placeholder=''
         onChange={handleInputChange}/>
         <button className="buttonSearch">Search</button>
         </form>
     </div>
 )
}