import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";

export default function ProjectCard({name, technologies, image, description}) {
    const [displayModal, setDisplayModal] = useState(false);

    return (
        <Container>
            <ProjectImage src={image} />
            <OverlayContainer>
                <ProjectTitle>{name}</ProjectTitle>
                <Technologies>{technologies}</Technologies>
                <Button 
                    color="#161D47" 
                    text="Learn More" 
                    onClick={() => {
                        setDisplayModal(true);
                        console.log('button clicked');
                    }}
                />
            </OverlayContainer>
            <Dialog 
                fullWidth={true}
                open={displayModal}
                onClose={() => {
                    setDisplayModal(false);
                }}
            >
                <DialogTitle>{name}</DialogTitle>
                <DialogContent>
                    <DescriptionText>{description}</DescriptionText>

                </DialogContent>
            </Dialog>
        </Container>
    )
}
const Container = styled.div`
    flex: 0 0 33.33%;
    overflow: hidden;
    height: 300px;
    position: relative;
`

const ProjectImage = styled.img`
    min-width: 100%;
    height: auto; 
`

const OverlayContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0; left: 0;
    
    background-color: #ffffff;
    opacity: 0;
    transition: opacity 0.3s ease;

    &:hover {
        opacity: 0.8;
    }
`

const ProjectTitle = styled.h3`
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 22px;
    text-align: left;

    color: var(--primary);
    opacity: 1;
    margin: 0;
    padding: 10px;
`

const Technologies = styled.p`
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 22px;
    text-align: left;

    color: var(--hilight);
    opacity: 1;
    margin: 0;
    padding: 10px;
`

const DescriptionText = styled.p`
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
`

const DialogControlsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
`