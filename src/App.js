import React from 'react';
import styled from '@emotion/styled';
import imagen from './donde-comprar-criptomonedas.jpg';
import Formulario from './components/Formulario'

const Contenedor = styled.div`
  margin: 0;
  max-width: 100vw;
  display: flex;
  background-color: #290149;
  justify-content: center;
  align-items: center;
  height: 10vh;
  color: white;
`;

const ContenedorMain = styled.main`
  margin: 0;
  max-width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  height: 80vh;
  color: white;
`;

const MainBox = styled.div`
  width: 35rem;
  display: flex;
  background-color: #290149;
  height: 35rem;
  color: white;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Imagen = styled.img`
  width: 100%;
  height: 100%;
`;

const Heading = styled.h1`
font-size: 2rem;
font-family: 'Bebas Neue', cursive;
letter-spacing: 0.25rem;
font-weight: 300;

&::after {
  content: "";
  width: 100px;
  height: 7px;
  background-color: #6670e3;
  display: block;
}
`;

function App() {
  return (
    <>
    <Contenedor> 
      <Heading>My Cripto App</Heading>
    </Contenedor>
    <ContenedorMain>
        <MainBox>
          <Imagen 
          src={imagen}
          alt="Imagen primer box"/>
        </MainBox>
        <MainBox>
          <Formulario/>
        </MainBox>
        <MainBox>3</MainBox>
      </ContenedorMain>
    </>
  );
}

export default App;
