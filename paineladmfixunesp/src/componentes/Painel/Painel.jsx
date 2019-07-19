import React, { Component } from 'react';
import './Painel.css'

import Button from '@material-ui/core/Button'
import Pesquisar from './Pesquisar'
import Tabela from './Tabela'


export default class painel extends Component{
    constructor(props){
        super(props)
        this.state = { lista: [
            {id:1,email:'guilherme.couto@unesp.br',descricao:'Buraco no meio da rua',bloco:'D1',piso:'1'},
            {id:2,email:'gabriel@unesp.com.br',descricao: 'Buraco no meio da rua',bloco:'D1',piso:'1'},
            {id:3,email:'vinicius@unesp.br',descricao:'Lampada queimada',bloco:'D2',piso:'1'},
            {id:4,email:'leo.yudi@unesp.br',descricao:'Lampada queimada',bloco:'D4',piso:'1'},
            // {id:5,email:'leo.yudi@unesp.br',descricao:'Lampada queimada',bloco:'D4',piso:'1'},
            // {id:6,email:'leo.yudi@unesp.br',descricao:'Lampada queimada',bloco:'D4',piso:'1'},
            // {id:7,email:'leo.yudi@unesp.br',descricao:'Lampada queimada',bloco:'D4',piso:'1'},
            // {id:8,email:'leo.yudi@unesp.br',descricao:'Lampada queimada',bloco:'D4',piso:'1'},
            // {id:9,email:'leo.yudi@unesp.br',descricao:'Lampada queimada',bloco:'D4',piso:'1'},
            // {id:10,email:'leo.yudi@unesp.br',descricao:'Lampada queimada',bloco:'D4',piso:'1'},
            // {id:11,email:'leo.yudi@unesp.br',descricao:'Lampada queimada',bloco:'D4',piso:'1'},
            // {id:12,email:'leo.yudi@unesp.br',descricao:'Lampada queimada',bloco:'D4',piso:'1'},
            // {id:13,email:'leo.yudi@unesp.br',descricao:'Lampada queimada',bloco:'D4',piso:'1'},
            // {id:14,email:'leo.yudi@unesp.br',descricao:'Lampada queimada',bloco:'D4',piso:'1'},
            // {id:15,email:'leo.yudi@unesp.br',descricao:'Lampada queimada',bloco:'D4',piso:'1'},
            // {id:16,email:'leo.yudi@unesp.br',descricao:'Lampada queimada',bloco:'D4',piso:'1'},
            // {id:17,email:'leo.yudi@unesp.br',descricao:'Lampada queimada',bloco:'D4',piso:'1'},
            // {id:18,email:'leo.yudi@unesp.br',descricao:'Lampada queimada',bloco:'D4',piso:'1'},
            // {id:19,email:'leo.yudi@unesp.br',descricao:'Lampada queimada',bloco:'D4',piso:'1'},
            // {id:20,email:'leo.yudi@unesp.br',descricao:'Lampada queimada',bloco:'D4',piso:'1'},
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

