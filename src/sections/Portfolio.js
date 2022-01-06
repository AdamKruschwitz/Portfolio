import React from "react";
import styled from "styled-components";
import ProjectCard from "../components/ProjectCard";
import Gallery from "../images/3DGalleryScreenshot.PNG";
import CodingQuiz from "../images/CodingQuizScreenshot.PNG";
import WeatherDashboard from "../images/WeatherDashboardScreenshot.PNG";
import Animates from "../images/AnimatesScreenshot.png";

import projects from "../db/projects.json";

import devices from "../devices";

export default function Portfolio() {
    const images = {
        Gallery,
        CodingQuiz,
        WeatherDashboard,
        Animates
    }
    return (
        <Container id="portfolio">
            <HeaderContainer>
                <HeaderText>PORTFOLIO</HeaderText>
            </HeaderContainer>
            <FilterContainer>
                {/* TODO - Add filtering options */}
            </FilterContainer>
            <PortfolioContainer>
                {projects.map((project) => {
                    return <ProjectCard
                        name={project.title}
                        technologies={project.technologies}
                        image={images[project["image-name"]]}
                        description={project["long-description"]}
                        github={project["github-link"]}
                        liveLink={project["deployed-link"]}
                    />
                })}
            </PortfolioContainer>
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

const FilterContainer = styled.div`
    display: flex;
    flex-direction: row;
`

// const FilterOption = styled.a`
//     /* TODO */
// `

const PortfolioContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    /* Using bottom padding to extend container */
     padding-bottom: 64px;
    padding-left: 140px; padding-right: 140px;

    @media only screen and (max-width: ${devices.medium}) {
        padding-left: 30px; padding-right: 30px;
    }
`

