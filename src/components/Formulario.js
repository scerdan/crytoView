import React from 'react';
import styled from '@emotion/styled';
import useMoneda from '../Hooks/useMoneda';

const Boton = styled.input`
    padding: 0.5rem;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    background-color: #6670e3;
    border: none;
    width: 20rem;
    border-radius: 10px;
    color: #FFF;
    transition: background-color .3s ease;
    height: 2.5rem;

    &:hover {
        background-color: #326AC0;
        cursor:pointer;
    }
`

const Formulario = () => {

    const MONEDAS = [
        { codigo: 'USD', nombre: 'Dolar de Estados Unidos' },
        { codigo: 'MXN', nombre: 'Peso Mexicano' },
        { codigo: 'EUR', nombre: 'Euro' },
        { codigo: 'GBP', nombre: 'Libra Esterlina' }
    ];

    // useMoneda 
    const [moneda, SelectMonedas] = useMoneda('Elige tu moneda','', MONEDAS);

    return ( 
        <form>
            <SelectMonedas/>
            <Boton
            type="submit"
            value="Calcular"
            />
        </form>
     );
}
 
export default Formulario;