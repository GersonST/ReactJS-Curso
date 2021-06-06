import React, { Component } from 'react';
import { Link } from 'react-router-dom';




class Erro extends Component {


  render() {
    return (

      <div>
        <h2>Ops! Página não encontrada!...</h2><br />
        <h3>Você está procurando por:</h3>
        <Link to='/'>Home</Link> <br />
        <Link to='/sobre'>Sobre</Link>
      </div>

    );
  }
}

export default Erro;