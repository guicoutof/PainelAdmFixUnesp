import React, { Component } from 'react'
import Menu from './Menu/Menu'
import Painel from './Painel/Painel'
import './Componentes.css'

export default class Componentes extends Component{

    constructor(props){
        super(props)
        this.state = {
            assuntos: [ 
                {id:1,conteudo:'Buraco'},
                {id:2,conteudo:'Lampada'},
                {id:3,conteudo:'Porta'},
            ],
            assunto:{id:0,conteudo:''},
            add:false,
            edit:false,
            delete:false,
			help:false,
        }
        this.handleAdd = this.handleAdd.bind(this);
        this.handleAddChange = this.handleAddChange.bind(this);
        this.handleAddConfirm = this.handleAddConfirm.bind(this);
        this.handleAddClose = this.handleAddClose.bind(this);

        this.handleEdit = this.handleEdit.bind(this)
        this.handleEditChange = this.handleEditChange.bind(this);
        this.handleEditConfirm = this.handleEditConfirm.bind(this);
        this.handleEditClose = this.handleEditClose.bind(this);

        this.handleRemove = this.handleRemove.bind(this);
        this.handleRemoveConfirm = this.handleRemoveConfirm.bind(this);
        this.handleRemoveClose = this.handleRemoveClose.bind(this);

		this.handleHelp = this.handleHelp.bind(this);
        this.handleHelpClose = this.handleHelpClose.bind(this);

    }

    handleAdd(){
        this.setState({...this.state,add:true});
    }
    handleAddChange(event){
        this.setState({...this.state,assunto:{id:this.state.assuntos.length+1,conteudo:event.target.value}});
    }
    handleAddClose(){
        this.setState({...this.state,add:false});
    }
    handleAddConfirm(){
        const assunto = this.state.assunto.conteudo;
        if(assunto){
            if(!this.state.assuntos.find((a)=>a.conteudo === assunto)){
                this.setState(state => {
                    const assuntos = [...state.assuntos, {id:this.state.assuntos.length+1,conteudo:assunto}];

                    return {
                        assuntos,
                        add:false
                    }
                  })
            }else alert('Este assunto já existe!!');
        }else alert('Assunto vazio!!');
    }
    
    handleEdit(assunto){
        this.setState({...this.state,edit:true,assunto:assunto});
    }
    handleEditChange(event){
        this.setState({...this.state,assunto:{id:this.state.assunto.id,conteudo:event.target.value}});
    }
    handleEditClose = () => {
        this.setState({...this.state,edit:false});
    };
    handleEditConfirm(){
        const assuntoConteudo = this.state.assunto.conteudo;
        if(assuntoConteudo){
            if(!this.state.assuntos.find((a)=>a.conteudo === assuntoConteudo)){
                this.setState(state => {
                    const assuntos = state.assuntos.map((assunto)=>{
                        if(assunto.id === this.state.assunto.id){
                            assunto.conteudo = assuntoConteudo
                            return assunto
                        }else return assunto
                    });
        
                    return {
                        assuntos,
                        edit:false
                    }
                })
            }else alert('Este assunto já existe!!');
        }else alert('Assunto vazio!!');
    }


    handleRemove(assunto){
        this.setState({...this.state,delete:true,assunto:assunto});
    }
    handleRemoveClose(){
        this.setState({...this.state,delete:false});
    }
    handleRemoveConfirm(){
        this.setState(state => {
            const assuntos = state.assuntos.filter(assunto => assunto.id !== this.state.assunto.id);
      
            return {
              assuntos,
              delete:false
            };
          });
    }

	handleHelp(){
		this.setState({...this.state,help:true});
	}
	handleHelpClose(){
		this.setState({...this.state,help:false});
	}

    

    render(){
        
        return  <div className="conteudo">
                    <Menu state={this.state} 
                        handleAdd = {this.handleAdd}
                        handleAddChange = {this.handleAddChange}
                        handleAddConfirm = {this.handleAddConfirm}
                        handleAddClose = {this.handleAddClose}
                
                        handleEdit = {this.handleEdit}
                        handleEditChange = {this.handleEditChange}
                        handleEditConfirm = {this.handleEditConfirm}
                        handleEditClose = {this.handleEditClose}
                
                        handleRemove = {this.handleRemove}
                        handleRemoveConfirm = {this.handleRemoveConfirm}
                        handleRemoveClose = {this.handleRemoveClose}
                
                        handleHelp = {this.handleHelp}
                        handleHelpClose = {this.handleHelpClose} 
                    />
                    <Painel assuntos={this.state.assuntos}/>
                </div>
    }

}
