import React,{ Component } from 'react'

import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Delete from '@material-ui/icons/DeleteForeverRounded'
import EditIcon from '@material-ui/icons/Edit'
import SimpleModal,{ModalSemInput} from '../Modal/Modal'
import ModalHelp from '../Modal/ModalHelp'
import './Menu.css'

export default class Menu extends Component{ 

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
		this.OnModalHelp = this.OnModalHelp.bind(this);
		this.OffModalHelp = this.OffModalHelp.bind(this);
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
                    console.log(assuntos);
                    return {
                        assuntos,add:false
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
        
                    return {assuntos}
                })
                this.setState({...this.state,edit:false});
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
              assuntos,delete:false
            };
          });
    }
	OnModalHelp(){
		this.setState({...this.state,help:true});
	}
	OffModalHelp(){
		this.setState({...this.state,help:false});
	}
    
    render(){
        return  (
        <div className="menu">
            <Button variant="contained" id="btnCriarAssunto" className="btn" onClick={()=>this.handleAdd()}>Criar Assunto</Button>
            <SimpleModal 
                        tittle="Adicionar Assunto" tittleLable="Assunto" open={this.state.add}
                        handleChange={this.handleAddChange}
                        handleConfirm={this.handleAddConfirm} handleClose={this.handleAddClose}/>
            <List id="listaElementos" component="nav" aria-label="Main mailbox folders" className="lista">
                {this.state.assuntos.map(assunto => (
                <li key={assunto.id}>
                    <div>
                        {assunto.conteudo}
                    </div>
                    <IconButton size="small" aria-label="Edit" color="primary"
                            onClick={() => this.handleEdit(assunto)}>
                            <EditIcon />
                    </IconButton>
                    {/* <EditIcon className="crudAssunto" color="primary" onClick={() => this.handleEdit(assunto)}/> */}
                    <SimpleModal 
                        tittle="Alterar Assunto" tittleLable="Assunto" value={this.state.assunto.conteudo}
                        open={this.state.edit} handleChange={this.handleEditChange}
                        handleConfirm={this.handleEditConfirm} handleClose={this.handleEditClose}/>
                    <IconButton size="small" aria-label="Delete" color="secondary"
                        onClick={() => this.handleRemove(assunto)}>
                        <DeleteIcon />
                    </IconButton>
                    {/* <Delete className="crudAssunto" onClick={() => this.handleRemove(assunto)}/> */}
                    <ModalSemInput 
                        tittle="Alterar Assunto" subTittle="Deseja realmente remover este assunto ?" value={this.state.assunto.conteudo}
                        open={this.state.delete}
                        handleConfirm={this.handleRemoveConfirm} handleClose={this.handleRemoveClose}/>
                </li>
                ))}
            </List>
            <Button variant="contained" id="btnHelp" className="btn btnHelp" onClick={()=>this.OnModalHelp()}>Help</Button>
			<ModalHelp 
                        open={this.state.help}
				handleClose={this.OffModalHelp}
                    />
			
        
        </div>
        )
    }
        
}
