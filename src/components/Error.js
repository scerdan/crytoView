import React from 'react';
import styled from '@emotion/styled';

const MensajeError = styled.p`
    background-color: red;
    padding: 1rem;
    margin-bottom: 1rem;
    color: #FFF;
    font-size: 30px;
    text-transform: uppercase;
    font-weight: bold;
    text-align: center;
    font-family: 'Bebas Neue', cursive;
    position: absolute;
    top: 10vh;
`;

const Error = ({mensaje}) => {
    return (  
        <MensajeError>{mensaje}</MensajeError>
    );
}
 
export default Error;