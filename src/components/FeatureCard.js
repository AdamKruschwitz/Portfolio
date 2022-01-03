import React from "react";
import styled from "styled-components";
import Button from "./Button";

export default function FeatureCard({className, title, children}) {
    return (
        <Container>
            {/* TODO - Square background with an icon and text underneath */}
            <Card>
                {children}
            </Card>
            <Title>{title}</Title>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
`

const Card = styled.div`
    background-color: var(--secondary);
    border-radius: 10px;
    width: 166px;
    height: 166px;

    display: flex;
    justify-content: center;
    align-items: center;
`

const Title = styled.h3`
    /* Font Formatting */
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 27px;
    text-align: center;
    letter-spacing: 0.05em;

    color: var(--primary);
    text-transform: uppercase;

    margin: 0;
    margin-top: 8px;
`
