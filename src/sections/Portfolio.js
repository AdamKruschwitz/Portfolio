import React from "react";
import styled from "styled-components";
import ProjectCard from "../components/ProjectCard";
import headshot from "../images/headshot.jpg";

export default function Portfolio() {
    return (
        <Container>
            <HeaderContainer>
                <HeaderText>PORTFOLIO</HeaderText>
            </HeaderContainer>
            <FilterContainer>
                {/* TODO - Add filtering options */}
            </FilterContainer>
            <PortfolioContainer>
                <ProjectCard image={headshot} name="Test" technologies="React/Express"/>
                <ProjectCard image={headshot} />
                <ProjectCard image={headshot} />
                <ProjectCard image={headshot} />
                <ProjectCard image={headshot} />
                <ProjectCard image={headshot} />
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

const FilterOption = styled.a`
    /* TODO */
`

const PortfolioContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    margin-top: 32px; margin-bottom: 64px;
    margin-left: 140px; margin-right: 140px;
`