import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import './Tabela.css'

export default () => 
<div>
  <table className="tabela">
    <thead className="cabecalhoTabela">
      <tr>
          <Grid container spacing={2}>
          <Grid item xs={2}><div>Email</div></Grid>
          <Grid item xs={3}><div>Descrição</div></Grid>
          <Grid item xs={1}><div>Bloco</div></Grid>
          <Grid item xs={1}><div>Piso</div></Grid>
          <Grid item xs={1}><div>Imagem</div></Grid>
          <Grid item xs={2}><div>Assunto</div></Grid>
          <Grid item xs={1}><div>Resolvido</div></Grid>
          <Grid item xs={1}><div>Agrupar</div></Grid>
          </Grid>
        </tr>
    </thead>
    <tbody>

    </tbody>
  </table>
</div>