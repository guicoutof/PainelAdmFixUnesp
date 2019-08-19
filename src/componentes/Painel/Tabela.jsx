import React, { Component } from 'react';
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
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import { ModalImage } from '../Modal/Modal'

import './Tabela.css'

export default class Tabela extends Component{
  constructor(props){
    super(props)
    this.state ={
      rows:props.lista,
      linha:{
        id:0,
        email:'',
        descricao:'',
        bloco:'',
        piso:'',
        imagem:'',
        grupo:0,
        assunto:'',
      },
      image:false
    }

    this.handleOpenModalImagem = this.handleOpenModalImagem.bind(this);
    this.handleCloseModalImagem = this.handleCloseModalImagem.bind(this);
    this.onClickAssunto = this.onClickAssunto.bind(this);
    this.handleChangeAssunto = this.handleChangeAssunto.bind(this);

  }

  handleOpenModalImagem(row){
    this.setState({...this.state,linha:row,image:true})
  };

  handleCloseModalImagem = () => {
    this.setState({...this.state,image:false})
  };


  onClickAssunto(row){
    this.setState({...this.state,linha:row})
    // console.log(this.state.linha)
  };

  handleChangeAssunto(event) {
    this.setState(state => {
      const linha = state.linha;
      linha.assunto = event.target.value;

      return{
        linha
      }
    })

    this.props.handleAssuntoChange(this.state.linha);

  }


  render(){
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
              <TableCell align="center"><strong>Assunto</strong></TableCell>
              <TableCell align="center"><strong>Resolvido</strong></TableCell>
              <TableCell align="center"><strong>Grupo</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.rows.map(row => (
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
                  <IconButton size="small" aria-label="Imagem" onClick={()=>this.handleOpenModalImagem(row)}>
                    <Imagem/>
                  </IconButton>
                    <ModalImage className="imagem" open={this.state.image} handleClose={this.handleCloseModalImagem} conteudo={this.state.linha.imagem}></ModalImage>
                </TableCell>
                <TableCell align="center">
                  <Select name='assunto' value={row.assunto} onClick={()=>this.onClickAssunto(row)} onChange={this.handleChangeAssunto}>
                    {this.props.assuntos.map(
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
                  <Checkbox color="secondary" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}