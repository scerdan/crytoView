import React, {useState} from 'react';

const useMoneda = () => {
    //State del customHook
    const [state, actualizarState] = useState('');

    const Seleccionar = () => (
        <>
        <label>Moneda</label>
        <select>
            <option value="MXN">Peso Mexicano</option>
        </select>
        </>
    )
    // Retornar state, interfaz y fn que modifica el state
    return [state, Seleccionar, actualizarState];
}

export default useMoneda;