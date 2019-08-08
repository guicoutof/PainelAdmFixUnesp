import React, { Component } from 'react';
import './Painel.css'

import Button from '@material-ui/core/Button'
import Pesquisar from './Pesquisar'
import Tabela from './Tabela'


export default class painel extends Component{
    constructor(props){
        super(props)
        this.state = { lista: [
            {id:1,email:'guilherme.couto@unesp.br',descricao:'Buraco no meio da rua',bloco:'D1',piso:'1',imagem:'Imagem 1',grupo:0},
            {id:2,email:'gabriel@unesp.com.br',descricao: 'Buraco no meio da rua',bloco:'D1',piso:'1',imagem:'Imagem 2',grupo:0},
            {id:3,email:'vinicius@unesp.br',descricao:'Lampada queimada',bloco:'D2',piso:'1',imagem:'Imagem 3',grupo:0},
            {id:4,email:'leo.yudi@unesp.br',descricao:'Lampada queimada',bloco:'D4',piso:'1',imagem:'Imagem 4',grupo:0},
            // {id:5,email:'leo.yudi@unesp.br',descricao:'Lampada queimada',bloco:'D4',piso:'1',imagem:'Imagem 5',grupo:0},
            
        ], listaExibicao: [
            {id:1,email:'guilherme.couto@unesp.br',descricao:'Buraco no meio da rua',bloco:'D1',piso:'1',imagem:'Imagem 1',grupo:0},
            {id:2,email:'gabriel@unesp.com.br',descricao: 'Buraco no meio da rua',bloco:'D1',piso:'1',imagem:'Imagem 2',grupo:0},
            {id:3,email:'vinicius@unesp.br',descricao:'Lampada queimada',bloco:'D2',piso:'1',imagem:'Imagem 3',grupo:0},
            {id:4,email:'leo.yudi@unesp.br',descricao:'Lampada queimada',bloco:'D4',piso:'1',imagem:'Imagem 4',grupo:0},
            // {id:5,email:'leo.yudi@unesp.br',descricao:'Lampada queimada',bloco:'D4',piso:'1',imagem:'Imagem 5',grupo:0},
            
        ] }

        this.pesquisar = this.pesquisar.bind(this)
    }

    pesquisar(event){
        const pesquisa = event.target.value;
        if(!pesquisa){
            const listaExibir = this.state.lista;
            this.setState({listaExibicao:listaExibir})
        }else{
            const listar = this.state.lista.filter((row)=>{

                if(row.email.indexOf(pesquisa) !== -1) return row
                    else if(row.descricao.indexOf(pesquisa) !== -1) return row
                        else if(row.piso.indexOf(pesquisa) !== -1) return row
                            else if(row.bloco.indexOf(pesquisa) !== -1) return row
            });

            this.setState({...this.state,listaExibicao:listar});
        }

    }

//criar funcao getTable aqui e enviar por paramelho a tabela
    render(){
        return  <div className="painel">
                    <Pesquisar pesquisar={this.pesquisar} />
                    <Tabela lista={this.state.listaExibicao}/>
                    <Button variant="contained" id="btnAgrupar" className="btn btnAgrupar" >Agrupar</Button>
                </div>
    }
    
}

