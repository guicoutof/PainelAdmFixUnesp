import React from 'react'
import './ModalHelp.css'
import Modal from '@material-ui/core/Modal'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';



export default function ModalHelp(props){

    return  <Modal 
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={props.open}
				onClose={props.handleClose}
                >
                    <div className="modalHelp">
                    <h1 className="tituloModal">Help</h1>
					<div className="text">
					<br></br>
					<p>É necessario definir um assunto para que os assuntos em comum e que estão no mesmo local possam ser combinados.</p>
					<br></br>
					<p>É possivel criar assuntos clicando no botão "Criar Assunto" e após sua criação é permitido editar e remover um assunto.</p>
					<br></br>
					<p>Não é permitido editar um assunto que estão sendo usado em algum problema pendente.</p>
					<br></br>
					<p>Ao confirmar uma resolução de problemas, um e-mail será enviado aos responsáveis pela solicitação.</p>
					<br></br>
					</div>
                    <div className="fechar">
                        <Button variant="contained" color="secondary"
                            onClick={props.handleClose}>Fechar</Button>
                    </div>
                </div>
            </Modal>
}