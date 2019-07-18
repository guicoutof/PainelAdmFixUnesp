import React from 'react'

import Button from '@material-ui/core/button'
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';

import './Menu.css'

export default function Menu(){ 
    let assuntos=[];

    function addAssunto(){
        let assunto = document.getElementById("assunto").value;
        if(!assuntos.includes(assunto)){
            adicionar(assunto);
        }else{
            alert('Este assunto já existe!!');
        }
    }
    function adicionar(assunto){
       
           let lista =  document.getElementById("listaElementos");
           let texto = document.getElementById("assunto");
           let li = document.createElement("li");
          
            assuntos.push(assunto);

           li.textContent = assunto;
           lista.appendChild(li);
           texto.value = "";
           texto.focus();
      
    }

return  <div className="menu">
            <Button variant="contained" id="btnCriarAssunto" className="btn" onClick={()=>addAssunto()}>Criar Assunto</Button>
            <TextField id="assunto" label="Assunto" className="labelAssunto" margin="normal" />
            
            <List id="listaElementos" component="nav" aria-label="Main mailbox folders" className="lista">
            </List>

            <Button variant="contained" id="btnHelp" className="btn btnHelp" >Help</Button>
        </div>
        
}
