import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import ProjectDialog from "./ProjectDialog";

import devices from "../devices";

export default function ProjectCard({name, technologies, image, description, github, liveLink}) {
    const [displayModal, setDisplayModal] = useState(false);
    // Convert technologies name to slash separated list
    // var technologiesString = technologies.reduce((prev, cur) => prev+"/"+cur);
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
            <ProjectDialog
                description={description}
                visible={displayModal}
                setVisible={setDisplayModal}
                name={name}
                technologies={technologies}
                image={image}
                github={github}
                liveLink={liveLink}
            />
        </Container>
    )
}
const Container = styled.div`
    flex: 0 0 33.33%;
    overflow: hidden;
    height: 300px;
    position: relative;

    @media only screen and (max-width: ${devices.medium}) {
        flex: 0 0 100%;
        height: 200px;
    }
`

const ProjectImage = styled.img`
    max-width: auto;
    height: 100%; 
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

