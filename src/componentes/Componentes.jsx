import React, { Component } from 'react'
import Menu from './Menu/Menu'
import Painel from './Painel/Painel'
import './Componentes.css'

export default class Componentes extends Component{

    constructor(props){
        super(props)
        this.state = {
            assuntos: [ 
                // {id:1,conteudo:'Buraco'},
                // {id:2,conteudo:'Lampada'},
                // {id:3,conteudo:'Porta'},
            ],
            assunto:{pk:0,name:''},
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

        this.loadCategories();
    }

    handleAdd(){
        this.setState({...this.state,add:true});
    }
    handleAddChange(event){
        this.setState({...this.state,assunto:{pk:this.state.assuntos.length+1,name:event.target.value}});
    }
    handleAddClose(){
        this.setState({...this.state,add:false});
    }
    handleAddConfirm(){
        const assunto = this.state.assunto.name;
        if(assunto){
            if(!this.state.assuntos.find((a)=>a.name === assunto)){
                // this.setState(state => {
                //     const assuntos = [...state.assuntos, {id:this.state.assuntos.length+1,name:assunto}];

                //     return {
                //         assuntos,
                //         add:false
                //     }
                //   })

                this.doCORSRequest({
                    method: 'POST',
                    url: 'http://deadpyxel.pythonanywhere.com/api/v1/categories/',
                    data: {name:assunto,tickets:[]}
                })
                this.loadCategories();
            }else alert('Este assunto já existe!!');
        }else alert('Assunto vazio!!');
    }
    
    handleEdit(assunto){
        this.setState({...this.state,edit:true,assunto:assunto});
    }
    handleEditChange(event){
        this.setState({...this.state,assunto:{pk:this.state.assunto.pk,name:event.target.value}});
    }
    handleEditClose = () => {
        this.setState({...this.state,edit:false});
    };
    handleEditConfirm(){
        const assuntoConteudo = this.state.assunto.name;
        if(assuntoConteudo){
            if(!this.state.assuntos.find((a)=>a.name === assuntoConteudo)){
                // this.setState(state => {
                //     const assuntos = state.assuntos.map((assunto)=>{
                //         if(assunto.pk === this.state.assunto.pk){
                //             assunto.name = assuntoConteudo
                //             return assunto
                //         }else return assunto
                //     });
        
                //     return {
                //         assuntos,
                //         edit:false
                //     }
                // })

                // fazer update

                // this.doCORSRequest({
                //     method: 'POST',
                //     url: 'http://deadpyxel.pythonanywhere.com/api/v1/categories/',
                //     data: ''
                // })

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
            const assuntos = state.assuntos.filter(assunto => assunto.pk !== this.state.assunto.pk);
      
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

    loadCategories() {
        var url = 'http://deadpyxel.pythonanywhere.com/api/v1/categories/';

        this.doCORSRequest({
          method: this.id === 'post' ? 'POST' : 'GET',
          url: url,
          data: ''
        }); 
  
    } 
    
    doCORSRequest(options) {
        //requisicao CORS
        var cors_api_url = 'https://cors-anywhere.herokuapp.com/';
        var x = new XMLHttpRequest();
        x.open(options.method, cors_api_url + options.url);
        x.onload = function (e) {
        if (x.readyState === 4) {
            if (x.status === 200) {
            var json_obj = JSON.parse(x.responseText);
            // pegar as categorias cadastradas na api
            this.setState({assuntos:json_obj})

            } else {
            console.error(x.statusText);
            }
        }

        }.bind(this);
        x.onerror = function (e) {
        console.error(x.statusText);
        };
        if (/^POST/i.test(options.method)) {
        x.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        }
        x.send(options.data);
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
