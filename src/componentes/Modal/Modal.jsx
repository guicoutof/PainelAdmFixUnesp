import React from 'react'
import './Modal.css'
import Modal from '@material-ui/core/Modal'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default function simpleModal(props){

    return  <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={props.open}
                onClose={props.handleClose}
                >
                <div className="modal">
                    <h2 id="modal-title">{props.tittle}</h2>
                    <TextField id="input" label={props.titleLabel} margin="normal" value={props.value}
                        onChange={props.handleChange} />
                    <div className="btns">
                        <Button id="confirm" variant="contained" color="primary" 
                            onClick={props.handleConfirm}>Confirmar</Button>
                        <Button variant="contained" color="secondary"
                            onClick={props.handleClose}>Cancelar</Button>
                    </div>
                </div>
            </Modal>
}

export function ModalSemInput(props){

    return <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={props.open}
                onClose={props.handleClose}
                >
                <div className="modal">
                    <h2 id="modal-title">{props.tittle}</h2>
                    <h4>{props.subTittle}</h4>
                    <div className="btns">
                        <Button id="confirm" variant="contained" color="primary" 
                            onClick={props.handleConfirm}>Confirmar</Button>
                        <Button variant="contained" color="secondary"
                            onClick={props.handleClose}>Cancelar</Button>
                    </div>
                </div>
            </Modal>
}

export function ModalHelp(props){

    return  <Modal 
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={props.open}
				onClose={props.handleClose}
                >
                <div className="modalHelp">
                    <h1 className="tituloModal">Ajuda</h1>
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
                   <Button className="fechar" variant="contained" color="secondary"
                        onClick={props.handleClose}>Fechar</Button>
                </div>
            </Modal>
}

export function ModalImage(props){

    return <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={props.open}
            onClose={props.handleClose}
            >
            <div className="modalImage">
                <img src={props.conteudo} alt="" height="100%" width="100%" />
            </div>
            </Modal>
}

export function ModalEmail(props){
    let mensagem = ''
    return <Modal
    aria-labelledby="simple-modal-title"
    aria-describedby="simple-modal-description"
    open={props.open}
    onClose={props.handleClose}
    >
    <div className="modalEditor">
        <h2 id="modal-title">{props.tittle}</h2>
        <h4 id="modal-title">{props.subtittle}</h4>
        <CKEditor
                    editor={ ClassicEditor }
                    data=""
                    onInit={ editor => {
                        // You can store the "editor" and use when it is needed.
                        // console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        mensagem = editor.getData();
                        // console.log( { event, editor, data } );
                    } }
                    onBlur={ ( event, editor ) => {
                        // console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        // console.log( 'Focus.', editor );
                    } }
                />
        <div className="btns3">
            <Button id="confirm" variant="contained" color="primary" 
                onClick={()=>props.handleConfirm(mensagem)}>Enviar</Button>
                <Button id="confirm" variant="contained" className="btnGreen" 
                onClick={()=>props.handleConfirmSEmail()}>Concluir Sem Mensagem</Button>
            <Button variant="contained" color="secondary"
                onClick={props.handleClose}>Cancelar</Button>
        </div>
    </div>
</Modal>
}