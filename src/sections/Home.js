import React from "react";
import styled, { keyframes } from "styled-components";

import Button from "../components/Button";

export default function Home () {
    return (
        <Background>
            <Content>
                <Text>Hi, I'm <Hilighted>Adam Kruschwitz</Hilighted></Text>
                <Text>I'm a full-stack web developer.</Text>
                <Button />
            </Content>
        </Background>
    )
}

const Background = styled.div`
    background: radial-gradient(100% 100% at 50% 0%, #4e60a0, var(--primary));
    width: 100vw;
    height: 100vh;
`

const fadein = keyframes`
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
`

const Content = styled.div`
    /* Position the items in the center of the div */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    /* Center the div on the page */
    margin: auto;
    position: absolute;
    top: 0; left: 0; bottom: 0; right: 0;

    /* Fade in animation */
    animation: ${fadein} 1s linear;
`

const Text = styled.h1`
    font-family: Montserrat;
    font-style: normal;
    font-weight: 400;
    font-size: 46px;
    
    text-align: center;
    line-height: 56px;

    color: #ffffff;

    margin: 0px;
`

const Hilighted = styled.span`
    font-weight: bold;
    color: var(--hilight);
`
