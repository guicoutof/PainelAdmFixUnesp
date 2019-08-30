import React, { Component } from 'react';
import './App.css';

import Header from './componentes/Header/Header'
import Footer from './componentes/Footer/Footer'
import Routes from './Routes'

class App extends Component {
    state = {
        response: ''
    };

    componentDidMount() {
        this.callApi()
            .then(res => this.setState({ response: res.express }))
            .catch(err => console.log(err));
    }

    callApi = async () => {
        const response = await fetch('/api/mensagem');
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);

        return body;
    };

    render() {
        return <div className="app">
            <Header />
            <Routes />
            <Footer />
        </div>
    }
}

export default App;

// export default function App() {
//     return <div className="app">
//         <Header />
//         <Routes />
//         <Footer />
//     </div>
// }
