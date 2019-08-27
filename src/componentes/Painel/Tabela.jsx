import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
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
import More from '@material-ui/icons/MoreRounded'
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import { ModalImage } from '../Modal/Modal'

import './Tabela.css'


export default function Tabela(props) {

 return (
  <Paper className="tabela">
  <Table >
    <TableHead>
      <TableRow>
        <TableCell align="center"><strong>Email</strong></TableCell>
        <TableCell align="center"><strong>Descrição</strong></TableCell>
        <TableCell align="center"><strong>Bloco</strong></TableCell>
        <TableCell align="center"><strong>Piso</strong></TableCell>
        <TableCell align="center"><strong>Imagem</strong></TableCell>
        <TableCell align="center"><strong>Classificação</strong></TableCell>
        <TableCell align="center"><strong>Resolvido</strong></TableCell>
        <TableCell align="center"><strong>Grupo</strong></TableCell>
      </TableRow>
    </TableHead>
    <TableBody>

    {props.rows.map(row => (
      row.visible?
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
              <ModalImage className="imagem" open={props.imageModal} handleClose={props.handleClose} conteudo={props.imagemExibixao}></ModalImage>
          </TableCell>
          <TableCell align="center">
            <Select name='assunto' value={row.assunto} onClick={()=>props.onClickAssunto(row.id)} onChange={props.handleChangeAssunto}>
              {props.assuntos.map(
                assunto => (
                  <MenuItem key={assunto.id} value={assunto.conteudo}>{assunto.conteudo}</MenuItem>
                )
              )}
            </Select>
          </TableCell>
          <TableCell align="center">
            <Fab size="small" color="primary" aria-label="done">
              <DoneIcon />
            </Fab>
          </TableCell>
          <TableCell align="center">
          {row.grupo ? <IconButton size="small" aria-label="Imagem" color="secondary">
                          <More />
                        </IconButton>
            : <Checkbox color="secondary" defaultChecked={row.checked} onChange={()=>props.handleGrupoCheck(row)}/>
          }
          </TableCell>
        </TableRow>
      :<TableRow key={row.id}>

      </TableRow>
    ))}

    </TableBody>
        </Table>
      </Paper>
    );
  }

