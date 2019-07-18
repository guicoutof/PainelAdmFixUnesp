import React, { Component } from 'react';
import './Painel.css'

import Button from '@material-ui/core/Button'
import Pesquisar from './Pesquisar'
import Tabela from './Tabela'


export default class painel extends Component{
    constructor(props){
        super(props)
        this.state = { lista: [
            {email:'guilherme@couto',descricao:'buraco',bloco:'D1',Piso:'1'},
            {email:'guilherme@couto',descricao:'buracao',bloco:'D1',Piso:'1'},
        ], listaExibicao: [] }
        this.pesquisar = this.pesquisar.bind(this)
    }

    filtro(obj,pesquisa){
        // 'email' in obj || 'descricao' in obj || 'bloco' in obj || 'piso' in obj === pesquisa  ? return true : return false
    }

    pesquisar(pesquisa){
        // this.state.lista.filter(
        //     function filtro(obj,pesquisa){
        //         'email' in obj || 'descricao' in obj || 'bloco' in obj || 'piso' in obj === pesquisa  ? return true : return false
        //     }
        // );
    }

//criar funcao getTable aqui e enviar por paramelho a tabela
    render(){
        return  <div className="painel">
                    <Pesquisar pesquisar={this.pesquisar} />
                    <Tabela lista={this.state.lista}/>
                    <Button variant="contained" id="btnAgrupar" className="btn btnAgrupar" >Agrupar</Button>
                </div>
    }
    
}

