import React from 'react';

import Checkbox from '@material-ui/core/Checkbox';
import Select from '@material-ui/core/Select';
import Imagem from '@material-ui/icons/Image'

import './Tabela.css'

export default function Tabela (props){ 

    const renderRows = () =>{
      const lista = props.lista || []
      return lista.map( item =>(
              <tr key={item._id}>
                <td>{item.email}</td>
                <td>{item.descricao}</td>
                <td>{item.bloco}</td>
                <td>{item.piso}</td>
                <td><Imagem/></td>
                <td><Select/></td>
                <td><Checkbox color="primary" /></td>
                <td><Checkbox color="secondary" /></td>
              </tr>
            ))
    }

    
        return(
          <div>
            <table className="tabela">
              <thead className="cabecalhoTabela">
                <tr>
                    
                   <th>Email</th>
                    <th>Descrição</th>
                    <th>Bloco</th>
                    <th>Piso</th>
                    <th>Imagem</th>
                    <th>Assunto</th>
                    <th>Resolvido</th>
                    <th>Agrupar</th>
                    
                  </tr>
              </thead>
              <tbody>
                {renderRows()}
              </tbody>
            </table>
          </div>
        )
    
  }
