import React from 'react';
import styled from '@emotion/styled';

const Contenedor = styled.div`
  margin: 0;
  max-width: 100vw;
  display: flex;
  background-color: #290149;
  justify-content: center;
  align-items: center;
  height: 5vh;
  color: white;
`;

const ContenedorMain = styled.main`
  margin: 0;
  max-width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 75vh;
  color: white;
`;

const MainBox = styled.div`
  width: 35rem;
  display: flex;
  background-color: #290149;
  height: 35rem;
  color: white;
`;

function App() {
  return (
    <>
    <Contenedor> 
      <h1>Cripto App</h1>
    </Contenedor>
    <ContenedorMain>
        <MainBox>1</MainBox>
        <MainBox>2</MainBox>
        <MainBox>3</MainBox>
      </ContenedorMain>
    </>
  );
}

export default App;
