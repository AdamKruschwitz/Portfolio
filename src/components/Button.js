import React from "react";
import styled, { keyframes } from 'styled-components';

export default function Button() {
    return (
        <ButtonContainer>
            <ButtonText>View my work</ButtonText>
        </ButtonContainer>
    )
}

const ButtonContainer = styled.div`
    display: inline-block;

    border-style: solid;
    border-width: 2px;
    border-color: #ffffff;

    color: #ffffff;

    transition: border-color 0.2s ease, color 0.2s ease;

    &:hover {
        border-color: var(--hilight);
        color: var(--hilight);
    }
`

const ButtonText = styled.p`
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;

    text-align: center;
    margin: 0px;
    padding: 10px;
`