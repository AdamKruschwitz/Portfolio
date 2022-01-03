import React from "react";
import styled from "styled-components";
import Button from "./Button";

export default function ProjectDialog({description, image, name, visible, setVisible, github, liveLink}) {
    return (
        <Container visible={visible}>
            <Backdrop onClick={() => setVisible(false)}/>
            <DialogContainer>
                <DialogImage src={image} />
                <DialogText>
                    <DialogTitle>{name}</DialogTitle>
                    <DialogDescription>{description}</DialogDescription>
                    <ControlsContainer>
                        <Button color="#161D47" text="Live Site" />
                        <Button color="#161D47" text="GitHub" />
                    </ControlsContainer>
                </DialogText>
            </DialogContainer>
        </Container>
    )
}

const Container = styled.div`
    position: fixed;
    top: 0; left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
    display: ${(props) => props.visible ? "flex" : "none"}
    
`

const Backdrop = styled.div`
    position: absolute;
    top: 0; left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.2;
    background-color: #000000;
`

const DialogContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    width: 50%;
    z-index: 11;

    overflow: hidden;
`

const DialogImage = styled.img`
    width: 100%;
    max-height: 50vh;
    object-fit: cover;
`

const DialogText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: left;
    padding: 32px;
    gap: 16px;
`

const DialogTitle = styled.h2`
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 22px;
    text-align: left;

    color: var(--primary);
    margin: 0;
`

const DialogDescription = styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.05em;

    color: var(--primary);
    margin: 0;
`

const ControlsContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 16px;
`