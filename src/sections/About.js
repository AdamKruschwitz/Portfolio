import React from "react";
import styled from "styled-components";

export default function About() {
    return (
        <Container>
            <HeaderText>ABOUT</HeaderText>
        </Container>
    )
}

const HeaderText = styled.h2`
    margin: 0;
    /* have the element hug the content of the text */
    display: inline-block;

    /* Center the header on the page */
    position: absolute;
    left: 50%;
    transform: translateX(-50%);

    /* Make room for the nav bar */
    margin-top: 125px;

    /* Text formatting */
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 46px;
    line-height: 56px;
    text-align: center;
    letter-spacing: 0.05em;

    color: var(--primary);

    /* Stylized underline */
    border-bottom: 5px solid var(--primary);
    
`

const Container = styled.div`
    /* Compensates for header centering technique */
    width: 100%;
    overflow: hidden;
`