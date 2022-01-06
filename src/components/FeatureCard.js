import React from "react";
import styled from "styled-components";

import devices from "../devices";

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

    @media only screen and (max-width: ${devices.medium}) {
        flex: 1 0 41%;
        /* Find a better way to do this, since it's not supported by some browsers */
        aspect-ratio: 1;
    }
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

    @media only screen and (max-width: ${devices.medium}) {
        font-size: 18px;
        line-height: 23px;
    }
`
