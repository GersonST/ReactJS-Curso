import React from 'react';
import { Container, Head, Titulo, BemVindo } from './styles';

function App() {
  return (
    <Container>
      <Head>
        <Titulo>Projeto Styled</Titulo>
      </Head>
      
      <BemVindo cor="00FF00">
        Bem vindo ao sistema
      </BemVindo> 

    </Container>
  );
}

export default App;

