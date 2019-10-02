import React, { Component } from 'react';
import './Painel.css'

import Pesquisar from './Pesquisar'
import Tabela from './Tabela'
import SendEmail from '../../services/mail'
import CircularProgress from '@material-ui/core/CircularProgress';

export default class painel extends Component{
    constructor(props){
        super(props)
        this.state = { lista: [],   //lista que conterá os dados recebidos pela api
            listaExibicao: null,    //lista enviada para a tabela exibir
            imageModal:false,       //Modal da imagem
            imagemExibixao:'',      //Imagem a ser exibida no modal
            pkChangeAssunto:0,      //Assunto a ser inserido no campo de classificação 
            emailModal:false,       //Modal do Editor
            api:{},                 //dados da api
            emailSend:null,         //lista de email que serão enviados mensagem de feedback
            loading:true,           //variavel de loading
        }
        this.loadTickets()
        
        this.pesquisar = this.pesquisar.bind(this)
        
        this.handleOpenModalImage = this.handleOpenModalImage.bind(this);
        this.handleCloseModalImage = this.handleCloseModalImage.bind(this);
        
        this.openEmailModal = this.openEmailModal.bind(this);
        this.closeEmailModal = this.closeEmailModal.bind(this);
        
        this.onClickAssunto = this.onClickAssunto.bind(this);
        this.handleChangeAssunto = this.handleChangeAssunto.bind(this);
        
        this.resolvido = this.resolvido.bind(this);
    }

    resolvido(mensagem){
        SendEmail(this.state.emailSend,mensagem);
    }

    handleOpenModalImage(imagem){
        this.setState({...this.state,imagemExibixao:imagem,imageModal:true});
    }

    handleCloseModalImage(){
        this.setState({...this.state,imageModal:false});
    }
    
    openEmailModal(emails){
        this.setState({...this.state,emailModal:true,emailSend:emails});
    }
    
    closeEmailModal(){
        this.setState({...this.state,emailModal:false});
    }
    
    onClickAssunto(id){
        this.setState({pkChangeAssunto:id});
    }
    
    pesquisar(event){
        const pesquisa = event.target.value;
        if(!pesquisa){
            this.setState({listaExibicao:this.state.lista})
        }else{
            const lista = this.state.lista.filter((row)=>{
            if(row.email != null && row.email[0].indexOf(pesquisa) !== -1 || 
                row.ticket_description.indexOf(pesquisa) !== -1 ||
                row.floor === +pesquisa ||
                row.building === +pesquisa ||
                row.room === +pesquisa ||
                this.props.assuntos.find(a => a.pk === row.category).name.indexOf(pesquisa) !== -1
                ) return row
            else return null
            });
            
            this.setState({listaExibicao:lista})
        }
    }

    //ira "mudar" para UPDATE na API  
    
    handleChangeAssunto(event){
        const assunto = event.target.value;
        if(assunto){
            this.setState(state => {
                const lista = state.lista.map((linha)=>{
                    if(linha.pk === this.state.pkChangeAssunto){//encontrou a linha a ser alterada
                        const pkCategory = this.props.assuntos.find(a => a.name === assunto).pk
                        // http://deadpyxel.pythonanywhere.com/api/v1/tickets/{linha.pk}/ para alterar a categoria na linha

                        //http://deadpyxel.pythonanywhere.com/api/v1/categories/{linha.category}/  remover http://deadpyxel.pythonanywhere.com/api/v1/tickets/{linha.pk}/ dos tickets

                        linha.category = pkCategory

                        //http://deadpyxel.pythonanywhere.com/api/v1/categories/{linha.category}/  adicionar http://deadpyxel.pythonanywhere.com/api/v1/tickets/{linha.pk}/ dos tickets

                        return linha
                    }else return linha
                });

                return {
                    lista
                }
            })
            // this.setState({listaExibicao:this.state.lista});
        }else alert('Assunto vazio!!');
        
    }

    loadTickets() {
        var url = 'http://deadpyxel.pythonanywhere.com/api/v1/tickets';

        this.doCORSRequest({
          method: this.id === 'post' ? 'POST' : 'GET',
          url: url,
          data: ''
        });
    } 
    
    doCORSRequest(options) {
        //requisicao CORS
        var cors_api_url = 'https://cors-anywhere.herokuapp.com/';
        var x = new XMLHttpRequest();
        x.open(options.method, cors_api_url + options.url);
        x.onload = function (e) {
        if (x.readyState === 4) {
            if (x.status === 200) {
            var json_obj = JSON.parse(x.responseText);

            // pegar os tickets de todas as paginas da api
            this.setState(state => {
                var tickets = []
                const lista = tickets.concat(...state.lista,json_obj.results)
                if(json_obj.next)
                    this.doCORSRequest({
                        method: this.id === 'post' ? 'POST' : 'GET',
                        url: json_obj.next,
                        data: ''
                    });

                return{
                    lista,
                    api:json_obj,
                    loading:false
                }
            })

            } else {
            console.error(x.statusText);
            }
        }
        this.checkTickets()
        }.bind(this);
        x.onerror = function (e) {
        console.error(x.statusText);
        };
        if (/^POST/i.test(options.method)) {
        x.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        }
        x.send(options.data);
    }

    
    checkTickets(){
        if(!this.state.loading){
            this.setState(state => {
                var drop = [];   //vetor auxiliar para concatenar tickets que ja foi adicionados (simplificar tickets)
                let listaAux = state.lista;
                const lista = listaAux.filter(row=>{
                    var array = [] // vetor auxiliar para concatenar emails
                    if(drop.indexOf(row) === -1){
                            listaAux.map(r=>{
                                if(row.category === r.category && row.floor === r.floor && row.room === r.room && row.building === r.building && row.pk !== r.pk ){
                                    row.email = array.concat(row.email,';'+r.email);
                                    drop.push(r);
                                }return null
                            })
                        return row;
                    }
                    else return null
                })

                return{
                    lista,
                    drop
                }

            })
        }
    }


    render(){
        return  <div className="painel">
            <Pesquisar pesquisar={this.pesquisar} />
                    {
                    this.state.loading ? 
                    <CircularProgress color="primary"  className="loading"/>
                    : 
                    <Tabela rows={this.state.listaExibicao? this.state.listaExibicao : this.state.lista} 
                        assuntos={this.props.assuntos} 
                        onClickAssunto = {this.onClickAssunto} handleChangeAssunto={this.handleChangeAssunto}
                        imageModal={this.state.imageModal} handleOpenModalImage={this.handleOpenModalImage} handleCloseModalImage={this.handleCloseModalImage} imagemExibixao={this.state.imagemExibixao}
                        openEmailModal = {this.openEmailModal} closeEmailModal = {this.closeEmailModal} emailModal = {this.state.emailModal}
                        resolvido = {this.resolvido}
                        />
                    }
                </div>
    }
    
}

