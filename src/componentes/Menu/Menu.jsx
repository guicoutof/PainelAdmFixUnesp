import React from 'react'

import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit'
import SimpleModal,{ ModalSemInput, ModalHelp } from '../Modal/Modal'

import './Menu.css'

export default function Menu (props){ 

    return  <div className="menu">
                <Button variant="contained" id="btnCriarAssunto" className="btn" onClick={props.handleAdd}>Criar Assunto</Button>
                <SimpleModal 
                            tittle="Adicionar Assunto" tittleLable="Assunto" open={props.state.add}
                            handleChange={props.handleAddChange}
                            handleConfirm={props.handleAddConfirm} handleClose={props.handleAddClose}/>
                <List id="listaElementos" component="nav" aria-label="Main mailbox folders" className="lista">
                    {props.state.assuntos.map(assunto => (
                    <li key={assunto.id}>
                        <div>
                            {assunto.conteudo}
                        </div>
                        <IconButton size="small" aria-label="Edit" color="primary"
                                onClick={() => props.handleEdit(assunto)}>
                                <EditIcon />
                        </IconButton>
                        <SimpleModal 
                            tittle="Alterar Assunto" tittleLable="Assunto" value={props.state.assunto.conteudo}
                            open={props.state.edit} handleChange={props.handleEditChange}
                            handleConfirm={props.handleEditConfirm} handleClose={props.handleEditClose}/>
                        <IconButton size="small" aria-label="Delete" color="secondary"
                            onClick={() => props.handleRemove(assunto)}>
                            <DeleteIcon />
                        </IconButton>
                        <ModalSemInput 
                            tittle="Alterar Assunto" subTittle="Deseja realmente remover este assunto ?" value={props.state.assunto.conteudo}
                            open={props.state.delete}
                            handleConfirm={props.handleRemoveConfirm} handleClose={props.handleRemoveClose}/>
                    </li>
                    ))}
                </List>
                <Button variant="contained" id="btnHelp" className="btn btnHelp" onClick={()=>props.handleHelp()}>Help</Button>
                <ModalHelp 
                    open={props.state.help}
                    handleClose={props.handleHelpClose}
                />
                
            </div>      
    }

