import React from "react";
import styled from "styled-components";

export default function Portfolio() {
    return (
        <Container>
            <HeaderContainer>
                <HeaderText>PORTFOLIO</HeaderText>
            </HeaderContainer>
        </Container>
    )
}

const Container = styled.section`
    background-color: var(--grey);
    width: 100%;
`

const HeaderContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 64px; padding-bottom: 64px;
`

const HeaderText = styled.h2`
    margin: 0;

    /* have the element hug the content of the text */
    display: inline;

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
