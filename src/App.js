import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled';
import axios from 'axios';
import imagen from './donde-comprar-criptomonedas.jpg';
import Formulario from './components/Formulario';
import Cotizacion from './components/Cotizacion';
import Spinner from './components/Spinner';

const Contenedor = styled.div`
  margin: 0;
  max-width: 100vw;
  display: flex;
  background-color: #290149;
  justify-content: center;
  align-items: center;
  height: 8vh;
  color: white;
`;

const Foot = styled.div`
  margin: 0;
  min-width: 100vw;
  max-width: 100vw;
  display: flex;
  background-color: #290149;
  justify-content: center;
  align-items: center;
  height: 5vh;
  color: white;
  position: fixed;
  flex-direction: column;
  bottom: 0;

  font-size: 1rem;
  font-family: 'Bebas Neue', cursive;
   font-weight: lighter;

  &::after {
  content: "";
  width: 100px;
  height: 0.25rem;
  background-color: #6670e3;
  display: block;
}
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
  width: 25rem;
  display: flex;
  background-color: #290149;
  height: 25rem;
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
  const [moneda, guardarMoneda] = useState('');
  const [criptomoneda, guardarCriptomoneda] = useState('');
  const [resultado, guardarResultado] = useState({});
  const [cargando, guardarCargando] = useState(false);


  useEffect( () => {
    const cotizarCriptomoneda = async () => {
        if(moneda === '') return;
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
        const resultado = await axios.get(url);
        guardarCargando(true);
        setTimeout(() => {
          guardarCargando(false);
          guardarResultado(resultado.data.DISPLAY[criptomoneda][moneda] );
        }, 3000);
      }
    cotizarCriptomoneda();
}, [moneda, criptomoneda]);

 const componente = (cargando) ? <Spinner /> :  <Cotizacion  resultado={resultado} />

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
          <Formulario
            guardarMoneda={guardarMoneda}
            guardarCriptomoneda={guardarCriptomoneda}
          />
        </MainBox>

        <MainBox>
          {componente}
        </MainBox>
      </ContenedorMain>
      <Foot> 
      <p>My Crypto App <small>&copy; Copyright 2021, sCerdan</small></p>
    </Foot>
    </>
  );
}

export default App;
