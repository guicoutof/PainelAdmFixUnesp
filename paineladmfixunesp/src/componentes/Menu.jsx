import React from 'react'

import Button from '@material-ui/core/button'
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';

import './Menu.css'

export default function Menu(){ 

    function inicia(){
       
           let lista =  document.getElementById("listaElementos");
           let texto = document.getElementById("fnovo");
           let li = document.createElement("li");
          
           li.textContent = texto.value;
           lista.appendChild(li);
           texto.value = "";
           texto.focus();
      
    }

return  <div className="menu">
            <Button variant="contained" id="btnCriarAssunto" className="btn" onClick={()=>inicia()}>Criar Assunto</Button>
            <TextField id="fnovo" label="Assunto" className="labelAssunto" margin="normal" />
            
            <List id="listaElementos" component="nav" aria-label="Main mailbox folders" className="lista">
            </List>

            <Button variant="contained" id="btnHelp" className="btn btnHelp" >Help</Button>
        </div>
        
}
