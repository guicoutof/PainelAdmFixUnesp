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

import './Tabela.css'

function createData(id,email, descricao, bloco, piso) {
  return {id, email, descricao, bloco, piso };
}

const rows = [
  createData(1,'guilherme.couto@unesp.br', 'Buraco no meio da rua','D1','1'),
  createData(2,'gabriel@unesp.com.br', 'Buraco no meio da rua','D1','1'),
  createData(3,'vinicius@unesp.br', 'Lampada queimada','D2','1'),
  createData(4,'leo.yudi@unesp.br', 'Lampada queimada','D4','1'),
];

export default function Tabela() {
  

  const [values, setValues] = React.useState({
    assunto: []
  });

  function handleChange(event) {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));
  }
  
  return (
    <Paper >
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
            <TableCell align="center"><strong>Agrupar</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row" align="center">
                {row.email}
              </TableCell>
              <TableCell component="th" scope="row" align="center">
                {row.descricao}
              </TableCell>
              <TableCell align="center">{row.bloco}</TableCell>
              <TableCell align="center">{row.piso}</TableCell>
              <TableCell align="center"><Imagem/></TableCell>
              <TableCell align="center"><Select
                                          value={values.assunto}
                                          onChange={handleChange}
                                          inputProps={{
                                            name: 'assunto',
                                            id: 'assunto-simple',
                                          }}
                                        >
                                          <MenuItem value={10}>Buraco</MenuItem>
                                          <MenuItem value={20}>Lampada</MenuItem>
                                        </Select></TableCell>
              <TableCell align="center"><Checkbox color="primary" /></TableCell>
              <TableCell align="center"><Checkbox color="secondary" /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}