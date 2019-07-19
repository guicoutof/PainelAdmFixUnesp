import React,{ Component } from 'react'

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import Delete from '@material-ui/icons/DeleteForeverRounded'
import Edit from '@material-ui/icons/EditTwoTone'

import './Menu.css'

export default class Menu extends Component{ 

    constructor(props){
        super(props)
        this.state = {
            assuntos: [
                {id:1,conteudo:'Buraco'},
                {id:2,conteudo:'Lampada'},
                {id:3,conteudo:'Porta'},
            ]
        }

        this.addAssunto = this.addAssunto.bind(this);
        this.handleEdit = this.handleEdit.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
    }

    addAssunto(){
        const assunto = document.getElementById("assunto").value;
        if(assunto){
            if(!this.state.assuntos.find((a)=>a.conteudo===assunto)){
                this.setState(state => {
                    const assuntos = [...state.assuntos, {id:this.state.assuntos.length+1,conteudo:assunto}];
              
                    return {assuntos}
                  });
            }else{
                alert('Este assunto já existe!!');
            }
        }else alert('Assunto vazio!!');
    }

    handleEdit(assunto){

    }

    handleRemove(assunto){

    }

    handleChange(assunto){

    }
    
    render(){
        return  (
        <div className="menu">
            <Button variant="contained" id="btnCriarAssunto" className="btn" onClick={()=>this.addAssunto()}>Criar Assunto</Button>
            <TextField id="assunto" label="Assunto" className="labelAssunto" margin="normal" />
            
            <List id="listaElementos" component="nav" aria-label="Main mailbox folders" className="lista">
                {this.state.assuntos.map(assunto => (
                <li key={assunto.id}>
                    <input id="disabled" disabled  value={assunto.conteudo} onChange={this.handleChange(assunto)} />
                    <Edit color="primary" onClick={this.handleEdit(assunto)}/>
                    <Delete  onClick={this.handleRemove(assunto)}/>
                </li>
                ))}
            </List>
            <Button variant="contained" id="btnHelp" className="btn btnHelp" >Help</Button>
                
        </div>
        )
    }
        
}
