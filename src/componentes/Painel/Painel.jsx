import React, { Component } from 'react';
import './Painel.css'

import Button from '@material-ui/core/Button'
import Pesquisar from './Pesquisar'
import Tabela from './Tabela'


export default class painel extends Component{
    constructor(props){
        super(props)
        this.state = { lista: [
            {id:1,email:'guilherme.couto@unesp.br',descricao:'Buraco no meio da rua',bloco:'D1',piso:'1',imagem:'Imagem 1',assunto:'',checked:false,grupo:0,visible:true},
            {id:2,email:'gabriel@unesp.com.br',descricao: 'Buraco no meio da rua',bloco:'D1',piso:'1',imagem:'Imagem 2',assunto:'',checked:false,grupo:0,visible:true},
            {id:3,email:'vinicius@unesp.br',descricao:'Lampada queimada',bloco:'D2',piso:'1',imagem:'Imagem 3',assunto:'',checked:false,grupo:0,visible:true},
            {id:4,email:'vinicius@unesp.br',descricao:'Lampada queimada',bloco:'D2',piso:'1',imagem:'Imagem 3',assunto:'',checked:false,grupo:0,visible:true},
            {id:5,email:'vinicius@unesp.br',descricao:'Lampada queimada',bloco:'D2',piso:'1',imagem:'Imagem 3',assunto:'',checked:false,grupo:0,visible:true},
            {id:6,email:'leo.yudi@unesp.br',descricao:'Lampada queimada',bloco:'D4',piso:'1',imagem:'Imagem 4',assunto:'',checked:false,grupo:0,visible:true},
            
            ],
            listaExibicao: null,//lista enviada para a tabela exibir
            imageModal:false, //Modal da imagem
            imagemExibixao:'', //Imagem a ser exibida no modal
            idAssunto:0, //Assunto a ser inserido no campo de classificação 
            grupos:[], //Lista de grupos definidos
            groupModal:false, //Modal de exibição do grupo selecionado para visualizacão
            groupExibir:0,
            group:[]
        }

        this.pesquisar = this.pesquisar.bind(this)
        this.handleGrupoCheck = this.handleGrupoCheck.bind(this);

        this.handleOpenModalImage = this.handleOpenModalImage.bind(this);
        this.handleCloseModalImage = this.handleCloseModalImage.bind(this);

        this.onClickAssunto = this.onClickAssunto.bind(this);
        this.handleChangeAssunto = this.handleChangeAssunto.bind(this);

        this.agrupar = this.agrupar.bind(this);

        this.openGrupo = this.openGrupo.bind(this);
        this.closeGrupo = this.closeGrupo.bind(this);
        
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
                return null
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
        this.setState(state=>{
            const lista = state.lista.map((linha)=>{
                if(linha.id === row.id){
                    if(linha.checked)linha.checked=false;
                    else linha.checked=true;
                }
                return linha
            })
            
            return{lista}
        })
    }
    
    agrupar(){
        //verificar quem foi checkado e adicionar ao grupo se for compativel
        if(this.state.lista.filter((linha)=>{if(linha.checked)return linha;return null}).length>=2){
            let alerta = false;
            const grupao = this.state.lista.filter((linha)=>{
                if(linha.checked){
                    if(this.state.lista.filter((l)=>{
                        if(l.checked){
                            if(linha.id !== l.id){
                                if(l.bloco.indexOf(linha.bloco) !== -1 && l.piso.indexOf(linha.piso) !== -1 && l.assunto.indexOf(linha.assunto) !== -1 &&l.assunto !== '')
                                return l
                                else alerta = true;}}return null
                            }).length >= 1)
                            return linha
                        }return null
                    })
                    
                    //atualiza a lista da existencia de um novo grupo
                    let primeiro = true;
                    const lista = this.state.lista.map((linha)=>{
                        if(grupao){
                            if(grupao.map((g)=>{
                                if(linha.id === g.id && primeiro){
                                    linha.grupo = this.state.grupos.length+1;
                                    linha.checked = false;
                                    primeiro = false;
                                    return linha
                                }else if(linha.id === g.id){
                                    linha.grupo = this.state.grupos.length+1;
                                    linha.checked = false;
                                    linha.visible = false;
                                    return linha
                                }else return linha
                            }))return linha;else return null
                        }else return null
                    })
                    
                    if(alerta)alert('Há problemas diferentes ou não classificados !!');
                    else this.setState(state => {
                        const grupos = [...state.grupos, {id:this.state.grupos.length+1,grupo:grupao}];
                        
                        return {
                            grupos,
                            lista:lista,
                            listaExibicao:lista
                        }
                    })
                    
                }
    }
    
    openGrupo(grupo){
        this.setState(state=>{
            const groupAux = state.grupos.filter((linha)=>{
                if(linha.id === grupo)
                    return linha.grupo
                else return null
            })

            const group = groupAux[0].grupo //correcao
            console.log(group)

            return{
                group,
                groupModal:true
            }
        })
    }

    closeGrupo(){
        this.setState({...this.state,groupExibir:0,groupModal:false})
    }
    
    render(){
        return  <div className="painel">
                    <Pesquisar pesquisar={this.pesquisar} />
                    <Tabela rows={this.state.listaExibicao ? this.state.listaExibicao : this.state.lista} assuntos={this.props.assuntos}
                        imageModal={this.state.imageModal} handleOpen={this.handleOpenModalImage} handleClose={this.handleCloseModalImage} imagemExibixao={this.state.imagemExibixao}
                        onClickAssunto = {this.onClickAssunto} handleGrupoCheck={this.handleGrupoCheck} handleChangeAssunto={this.handleChangeAssunto}
                        openGrupo = {this.openGrupo} grupoModal = {this.state.groupModal} closeGrupo={this.closeGrupo} selectedGroup = {this.state.group}
                        />
                    <Button variant="contained" id="btnAgrupar" className="btn btnAgrupar" onClick={this.agrupar} >Agrupar</Button>
                </div>
    }
    
}

