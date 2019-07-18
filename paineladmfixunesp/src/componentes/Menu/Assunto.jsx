import React from 'react'
import Delete from '@material-ui/icons/Delete'
import Edit from '@material-ui/icons/Edit'

import './Assunto.css'

export default props =>(
    <div className="Assunto">
        <div>{props.value}</div><Edit/><Delete/>
    </div>
)