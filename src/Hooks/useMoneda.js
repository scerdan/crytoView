import React, {useState} from 'react';
import styled from '@emotion/styled';

const Label = styled.label`
    font-family: 'Bebas Neue', cursive;
    color: #FFF;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2.4rem;
    display: block;
    text-align: center;
    letter-spacing: 1px;
    margin-bottom: 2rem;
`;

const Select = styled.select`
    width: 100%;
    display:block;
    padding: 0.75rem;
    -webkit-appearance: none;
    border-radius: 10px;
    border: none;
    font-size: 1rem;
    margin-bottom: 1rem;
`

const useMoneda = (label, stateInicial, opciones) => {
    //El parametro que introduzco en el useMoneda se grafica en label
    //State del customHook
    const [state, actualizarState] = useState('');

    const Seleccionar = () => (
        <>
        <Label>{label}</Label>
        <Select
        onChange={ e => actualizarState(e.target.value)}
        value={state}
        >
        <option value=""> - Seleccione - </option>
                {opciones.map(opcion => (
                    <option key={opcion.codigo} value={opcion.codigo}>{opcion.nombre}</option>
                ))}
        </Select>
        </>
    )
    // Retornar state, interfaz y fn que modifica el state
    return [state, Seleccionar, actualizarState];
}

export default useMoneda;