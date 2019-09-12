import React from 'react'
import './Modal.css'
import Modal from '@material-ui/core/Modal'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Imagem from '@material-ui/icons/Image'
import IconButton from '@material-ui/core/IconButton';



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
                <img src={props.conteudo} height="100%" width="100%" />
            </div>
            </Modal>
}

export function ModalGrupo(props){

    return <Modal
    aria-labelledby="grupo"
    aria-describedby="grupo-description"
    open={props.open}
    onClose={props.handleClose}
    >
        <Paper className={'tabelaModal'}>
            <Table >
                <TableHead>
                <TableRow>
                    <TableCell align="center"><strong>Email</strong></TableCell>
                    <TableCell align="center"><strong>Descrição</strong></TableCell>
                    <TableCell align="center"><strong>Bloco</strong></TableCell>
                    <TableCell align="center"><strong>Piso</strong></TableCell>
                    <TableCell align="center"><strong>Imagem</strong></TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {props.rows.map(row =>(
                    <TableRow key={row.id}>
                    <TableCell component="th" scope="row" align="center">
                    {row.email}
                        </TableCell>
                        <TableCell component="th" scope="row" align="center">
                        {row.descricao}
                        </TableCell>
                        <TableCell align="center">
                        {row.bloco}
                        </TableCell>
                        <TableCell align="center">
                        {row.piso}
                        </TableCell>
                        <TableCell align="center">
                        <IconButton size="small" aria-label="Imagem" onClick={()=>props.handleOpen(row.imagem)} >
                        <Imagem />
                        </IconButton>
                        <ModalImage className="imagem" open={props.imageModal} handleClose={props.handleCloseImagem} conteudo={props.conteudo}></ModalImage>
                        </TableCell>
                        </TableRow>
                    ))}
                </TableBody>



            </Table>
        </Paper>
    </Modal>
}