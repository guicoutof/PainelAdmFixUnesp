import React from 'react';
import './Painel.css'

import Pesquisar from './Pesquisar'
import SimpleTable from './Tabela'

export default function painel(){

    return  <div className="painel">
                <Pesquisar/>
                <SimpleTable/>
            </div>
    
}

