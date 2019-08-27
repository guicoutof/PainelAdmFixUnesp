import React, { Component } from 'react';
import './Painel.css'

import Button from '@material-ui/core/Button'
import Pesquisar from './Pesquisar'
import Tabela from './Tabela'


export default class painel extends Component{
    constructor(props){
        super(props)
        this.state = { lista: [
            {id:1,email:'guilherme.couto@unesp.br',descricao:'Buraco no meio da rua',bloco:'D1',piso:'1',imagem:'Imagem 1',grupo:0,assunto:'',checked:false},
            {id:2,email:'gabriel@unesp.com.br',descricao: 'Buraco no meio da rua',bloco:'D1',piso:'1',imagem:'Imagem 2',grupo:0,assunto:'',checked:false},
            {id:3,email:'vinicius@unesp.br',descricao:'Lampada queimada',bloco:'D2',piso:'1',imagem:'Imagem 3',grupo:0,assunto:'',checked:false},
            {id:4,email:'leo.yudi@unesp.br',descricao:'Lampada queimada',bloco:'D4',piso:'1',imagem:'Imagem 4',grupo:0,assunto:'',checked:false},
            // {id:5,email:'leo.yudi@unesp.br',descricao:'Lampada queimada',bloco:'D4',piso:'1',imagem:'Imagem 5',grupo:0},
            
            ],
            listaExibicao: null,
            imageModal:false,
            imagemExibixao:'',
            idAssunto:0
        }

        this.pesquisar = this.pesquisar.bind(this)
        this.handleGrupoCheck = this.handleGrupoCheck.bind(this);

        this.handleOpenModalImage = this.handleOpenModalImage.bind(this);
        this.handleCloseModalImage = this.handleCloseModalImage.bind(this);

        this.onClickAssunto = this.onClickAssunto.bind(this);
        this.handleChangeAssunto = this.handleChangeAssunto.bind(this);
    }

    handleOpenModalImage(imagem){

        this.setState({...this.state,imagemExibixao:imagem,imageModal:true});
    }

    handleCloseModalImage(){
        this.setState({...this.state,imageModal:false});
    }
    pesquisar(event){
        const pesquisa = event.target.value;
        if(!pesquisa){
            this.setState({listaExibicao:this.state.lista})
        }else{
            const listar = this.state.lista.filter((row)=>{
                
                if(row.email.indexOf(pesquisa) !== -1) return row
                else if(row.descricao.indexOf(pesquisa) !== -1) return row
                else if(row.piso.indexOf(pesquisa) !== -1) return row
                else if(row.bloco.indexOf(pesquisa) !== -1) return row
            });
            
            this.setState({listaExibicao:listar});
        }
    }

    handleChangeAssunto(event){
        const assunto = event.target.value;
        if(assunto){
            this.setState(state => {
                const lista = state.lista.map((linha)=>{
                    if(linha.id === this.state.idAssunto){
                        linha.assunto = assunto
                        return linha
                    }else return linha
                });

                return {
                    lista
                }
            })
            this.setState({listaExibicao:this.state.lista});
        }else alert('Assunto vazio!!');

    }

    onClickAssunto(id){
        this.setState({idAssunto:id});
    }

    handleGrupoCheck(row){
        // console.log(row);
        // this.setState(state=>{
        //     const lista = state.lista.map((linha)=>{
        //         if(linha.id === row.id){
        //             if(linha.checked)linha.checked=false;
        //             else linha.checked=true;
        //         }
        //         return linha
        //     })

        //     return{lista}
        // })
    }
    render(){
        return  <div className="painel">
                    <Pesquisar pesquisar={this.pesquisar} />
                    <Tabela rows={this.state.listaExibicao ? this.state.listaExibicao : this.state.lista} assuntos={this.props.assuntos}
                        imageModal={this.state.imageModal} handleOpen={this.handleOpenModalImage} handleClose={this.handleCloseModalImage} imagemExibixao={this.state.imagemExibixao}
                        onClickAssunto = {this.onClickAssunto} handleGrupoCheck={this.handleGrupoCheck} handleChangeAssunto={this.handleChangeAssunto}/>
                    <Button variant="contained" id="btnAgrupar" className="btn btnAgrupar" >Agrupar</Button>
                </div>
    }
    
}

