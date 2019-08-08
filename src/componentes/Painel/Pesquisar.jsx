import React from 'react'
import './Pesquisar.css'

import TextField from '@material-ui/core/TextField';



export default function pesquisar(props){


    return <div className="pesquisar">
                <TextField id="pesquisar" label="Pesquisar" type="search" className="campo-pesquisar" margin="normal" variant="outlined"
                    onChange={props.pesquisar}/>
            </div>
}
