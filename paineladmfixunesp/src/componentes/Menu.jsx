import React from 'react'

import Button from '@material-ui/core/button'
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import Edit from '@material-ui/icons/EditTwoTone';
import Delet from '@material-ui/icons/DeleteOutlineTwoTone';

import './Menu.css'

export default function Menu(){ 
    var assuntos = []; //vetor de assuntos

    function adicionar(){

            let lista =  document.getElementById("listaElementos");
            let assunto = document.getElementById("assunto");
            let li = document.createElement("li");
            
            assuntos.push(assunto.value);//adiciona o assunto novo no vetor
            
            li.textContent = assunto.value+" ";
            
            lista.append(li);
            assunto.value = "";
            assunto.focus();
    }

    function addAssunto(){
        let assunto = document.getElementById("assunto").value;

        if(!assuntos.includes(assunto)){//funcao pronta que verifica se o assunto já existe
            adicionar();
        }else{
            alert('Este assunto já existe');
        }
    }

return  <div className="menu">
            <Button variant="contained" id="btnCriarAssunto" className="btn" onClick={()=>addAssunto()}>Criar Assunto</Button>
            <TextField id="assunto" label="Assunto" className="labelAssunto" margin="normal" />
            
            <List id="listaElementos" component="nav" aria-label="Main mailbox folders" className="lista"><Edit /><Delet color="secondary"/>
            </List>

            <Button variant="contained" id="btnHelp" className="btn btnHelp" >Help</Button>
        </div>
        
}
