import React from "react";
import  {BrowserRouter, Switch, Route} from "react-router-dom"
import Home from "./component/Home";

import CreaVideogame from "./component/CrearVideogame.jsx"
import Detalles from "./component/Detalles";
import Landing from "./component/Landing";
import NotFound from "./component/NotFound";

import Contacto from "./component/Contacto"

function App() {
  return (
    
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Landing} />

        
        <Route exact path='/home' component={Home} />
        <Route exact path='/crearvideogame' component={CreaVideogame} />
        <Route exact path='/contacto' component={Contacto} />
        <Route path='/home/:id' component={Detalles}/> 
        <Route component={NotFound} />
        
        
      </Switch>
    
    </BrowserRouter>
   
   
  );
}

export default App;
