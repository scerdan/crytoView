import React from 'react';
import styled from '@emotion/styled';

const ResultadoDiv = styled.div`
    color: #FFF;
    font-family: Arial, Helvetica, sans-serif;
`;

const Info = styled.p`
    font-size: 18px;
    margin-bottom: 0.25rem;
    span {
        font-weight:lighter;
    }
`;
const Precio = styled.p`
    font-size: 30px;
    margin-bottom: 0.75rem;

    span {
        font-weight:bold;
    }
`

const Cotizacion = ({resultado}) => {
    if(Object.keys(resultado).length === 0) return null;

    console.log(resultado)

    return ( 
        <ResultadoDiv>
            <Precio>El precio es: <span>{resultado.PRICE}</span> </Precio>

            <Info>Variación últimas 24 horas: <span>{resultado.CHANGEPCT24HOUR}%</span></Info>
            <Info>Última Actualización: <span>{resultado.LASTUPDATE}</span> </Info>
        </ResultadoDiv>
     );
}
 
export default Cotizacion;