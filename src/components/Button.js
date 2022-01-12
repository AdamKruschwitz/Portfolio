import React from "react";
import styled from 'styled-components';

export default function Button({ className, text, color, onClick, link, isDownload=false }) {
    if(isDownload) return (
        <a href={link}>
        <ButtonContainer color={color} onClick={onClick} href={link} download>
            <ButtonText>{text}</ButtonText>
        </ButtonContainer>
        </a>
    )
    return (
        <a href={link}>
        <ButtonContainer color={color} onClick={onClick} href={link}>
            <ButtonText>{text}</ButtonText>
        </ButtonContainer>
        </a>
    )
}

const ButtonContainer = styled.a`
    display: inline-block;

    border-style: solid;
    border-width: 2px;
    border-color: ${props => props.color};

    color: ${props => props.color};
    background-color: transparent;
    margin-top: 20px;

    z-index: 1;

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