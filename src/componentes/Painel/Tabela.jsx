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
import Fab from '@material-ui/core/Fab';

import './Tabela.css'

export default function Tabela(props) {
  
  const rows = props.lista;
  
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
              <TableCell align="center"><Select value={values.assunto}
                                          onChange={handleChange}
                                          inputProps={{
                                            name: 'assunto',
                                            id: 'assunto-simple',
                                          }}
                                        >
                                          <MenuItem value={10}>Buraco</MenuItem>
                                          <MenuItem value={20}>Lampada</MenuItem>
                                        </Select></TableCell>
              <TableCell align="center"><Fab size="small" color="primary" aria-label="done">
                                          <DoneIcon />
                                        </Fab></TableCell>
              <TableCell align="center"><Checkbox color="secondary" /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}