import React from 'react'
import './Modal.css'
import Modal from '@material-ui/core/Modal'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';



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