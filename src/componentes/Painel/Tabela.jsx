import React from 'react';
// import Checkbox from '@material-ui/core/Checkbox';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Imagem from '@material-ui/icons/Image'
import DoneIcon from '@material-ui/icons/Done'
// import More from '@material-ui/icons/MoreRounded'
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import { ModalImage, ModalEmail } from '../Modal/Modal'

import './Tabela.css'


export default function Tabela(props) {

 return (
  //  cabecalho
  <Paper className="tabela">
  <Table >
    <TableHead>
      <TableRow>
        <TableCell align="center"><strong>Email</strong></TableCell>
        <TableCell align="center"><strong>Descrição</strong></TableCell>
        <TableCell align="center"><strong>Bloco</strong></TableCell>
        <TableCell align="center"><strong>Piso</strong></TableCell>
        <TableCell align="center"><strong>Sala</strong></TableCell>
        <TableCell align="center"><strong>Imagem</strong></TableCell>
        <TableCell align="center"><strong>Classificação</strong></TableCell>
        <TableCell align="center"><strong>Resolvido</strong></TableCell>
      </TableRow>
    </TableHead>
    <TableBody>

    {/* corpo da tabela */}
    {
      props.rows.map(row => (
        <TableRow key={row.pk}>
          <TableCell component="th" scope="row" align="center">
            {Array.isArray(row.email) ? row.email[0] + ` + ${row.email.length -1} pessoas` : row.email}
          </TableCell>
          <TableCell component="th" scope="row" align="center">
            {row.ticket_description}
          </TableCell>
          <TableCell align="center">
            {row.building}
          </TableCell>
          <TableCell align="center">
            {row.floor}
          </TableCell>
          <TableCell align="center">
            {row.room}
          </TableCell>
          <TableCell align="center">
            <IconButton size="small" aria-label="Imagem" onClick={()=>props.handleOpenModalImage(row.picture)} >
              <Imagem />
            </IconButton>
            <ModalImage className="imagem" open={props.imageModal} handleClose={props.handleCloseModalImage} conteudo={props.imagemExibixao}></ModalImage>
          </TableCell>
          <TableCell align="center">
            <Select name='assunto' value={props.assuntos.find(assunto => assunto.pk === row.category)? props.assuntos.find(assunto => assunto.pk === row.category).name : 'none'} onClick={()=>props.onClickAssunto(row.pk)} onChange={props.handleChangeAssunto}>
              {
                props.assuntos.map(
                  assunto => (
                    <MenuItem key={assunto.pk} value={assunto.name}>{assunto.name}</MenuItem>
                  )
                )
              }
            </Select>
          </TableCell>
          <TableCell align="center">
            <Fab size="small" color="primary" aria-label="done" onClick={()=>props.openEmailModal(row.email)}>
              <DoneIcon  />
            </Fab>
            <ModalEmail tittle='Ticket Resolvido' subtittle='Escreva uma mensagem de feedback.' open={props.emailModal} handleClose={props.closeEmailModal}
            handleConfirm = {props.resolvido}></ModalEmail>
          </TableCell>
        </TableRow>
      ))
    }
    </TableBody>
  </Table>
  </Paper>
  );

  }

