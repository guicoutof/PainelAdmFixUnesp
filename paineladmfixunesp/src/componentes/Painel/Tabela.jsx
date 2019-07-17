import React from 'react';
import Grid from '@material-ui/core/Grid';

import './Tabela.css'

export default () => 
<div>
  <table className="tabela">
    <thead className="cabecalhoTabela">
      <tr>
          <Grid container spacing={2}>
          <Grid item xs={2}>Email</Grid>
          <Grid item xs={3}>Descrição</Grid>
          <Grid item xs={1}>Bloco</Grid>
          <Grid item xs={1}>Piso</Grid>
          <Grid item xs={1}>Imagem</Grid>
          <Grid item xs={2}>Assunto</Grid>
          <Grid item xs={1}>Resolvido</Grid>
          <Grid item xs={1}>Agrupar</Grid>
          </Grid>
        </tr>
    </thead>
    <tbody>

    </tbody>
  </table>
</div>