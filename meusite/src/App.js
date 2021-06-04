import React from 'react';

const Equipe = (props) => {
  return (
    <div>
      <Sobre nome={props.nome} cargo={props.cargo} idade={props.idade}/>
      <Social facebook={props.facebook}/>
      <hr />
    </div>
  );
}


const Sobre = (props) => {
  return (
      <div>
        <h2>Olá, sou o {props.nome}</h2>
        <h3>Cargo: {props.cargo}</h3>
        <h3>Idade: {props.idade}</h3>
      </div>
  );
}


const Social = (props) => {
  return (
    <div>
      <a href={props.facebook}>Facebook</a>
      <a>Linkedin</a>
    </div>

  );
}



function App() {
  return (
    <div>
      <h1>Conheça nossa equipe:</h1>
      <Equipe nome="Gerson" cargo="Programador" idade="30" facebook="https://google.com" />
      <Equipe nome="Severo" cargo="Arquiteto" idade="30" />
    </div>
  );
}


export default App;
