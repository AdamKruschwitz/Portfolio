import React from "react";
import styled from "styled-components";

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
    background: radial-gradient(circle at top, #35416D, var(--primary));
    width: 100vw;
    height: 100vh;
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
