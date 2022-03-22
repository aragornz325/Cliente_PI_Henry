       {flagload === 'true' ? (
                            <div>
                            <div className="matrix">
                                <h1>cargando...</h1>
                    <img src="../assets/statics/matrix-code.gif" alt="" />
                                </div>
                                </div>
                    )
        :  
                (
                    <div>
                    
            {juegosenpantalla.length ? 
                
            (juegosenpantalla.map((e)=>{
                return( 
                    <Card 
                    image={e.image}
                    name={e.name}
                    key={e.id}
                    genres={e.genres}
                    /> )
            })

                )
            :
                ( 
                <div className="matrix">
                <img src="../assets/statics/matrix-code.gif" alt="" />
                </div> 
            )
            }
        
                    </div>
                )
        }