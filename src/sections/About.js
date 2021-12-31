import React from "react";
import styled from "styled-components";
import FeatureCard from "../components/FeatureCard";

// Icons
import { CgBolt } from 'react-icons/cg';
import { BiDevices } from 'react-icons/bi';
import { BsLightbulbFill } from 'react-icons/bs';
import { IoIosRocket } from 'react-icons/io';

export default function About() {
    return (
        <Container>
            <HeaderContainer>
                <HeaderText>ABOUT</HeaderText>
            </HeaderContainer>
            
            <FeaturesContainer>
                <FeatureCard title="Fast">
                    <FastIcon />
                </FeatureCard>
                <FeatureCard title="Responsive">
                    <ResponsiveIcon />
                </FeatureCard>
                <FeatureCard title="Intuitive">
                    <IntuitiveIcon />
                </FeatureCard>
                <FeatureCard title="Dynamic">
                    <DynamicIcon />
                </FeatureCard>
            </FeaturesContainer>
        </Container>
    )
}

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

const Container = styled.div`
    /* Compensates for header centering technique */
    width: 100%;
    overflow: hidden;
`

const FeaturesContainer = styled.div`
    margin-left: 196px; margin-right: 196px;
    margin-top: 64px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const HeaderContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    /* Make room for the nav bar */
    margin-top: 125px;
`

const FastIcon = styled(CgBolt)`
    color: #ffffff;
    width: 96px;
    height: 96px;
`

const ResponsiveIcon = styled(BiDevices)`
    color: #ffffff;
    width: 96px;
    height: 96px;
`

const IntuitiveIcon = styled(BsLightbulbFill)`
    color: #ffffff;
    width: 96px;
    height: 96px;
`

const DynamicIcon = styled(IoIosRocket)`
    color: #ffffff;
    width: 96px;
    height: 96px;
`
