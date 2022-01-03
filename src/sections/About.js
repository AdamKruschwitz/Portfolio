import React from "react";
import styled from "styled-components";
import FeatureCard from "../components/FeatureCard";
import ExperienceBar from "../components/ExperienceBar";

// Icons
import { CgBolt } from 'react-icons/cg';
import { BiDevices } from 'react-icons/bi';
import { BsLightbulbFill } from 'react-icons/bs';
import { IoIosRocket } from 'react-icons/io';

// Images
import headshot from '../images/headshot.jpg'

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

            <DescriptionContainer>
                <DescriptionLeft>
                    <Headshot src={headshot} alt="A smiling young man in front of a painted brick wall." />
                    <DescriptionText>
                        I’m a full stack developer in Santa Clara, CA.
                        I have a knack for creating fluid and stylish UI and I’m on a mission to end dark-patterns in UI and make the internet a safe place.
                    </DescriptionText>
                    <DescriptionText>
                        <HilightedText> Let’s build the web we want to see. </HilightedText>
                    </DescriptionText>
                </DescriptionLeft>
                <DescriptionRight>
                    <ExperienceBar title="HTML" percentage="90" />
                    <ExperienceBar title="CSS3" percentage="90" />
                    <ExperienceBar title="JavaScript" percentage="80" />
                    <ExperienceBar title="Node.js" percentage="70" />
                    <ExperienceBar title="Express.js" percentage="50" />
                    <ExperienceBar title="React.js" percentage="60" />
                    <ExperienceBar title="Figma" percentage="70" />
                    <ExperienceBar title="UI/UX" percentage="90" />
                </DescriptionRight>
            </DescriptionContainer>
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

    margin-top: 64px;
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

const DescriptionContainer = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: stretch;

    margin-left: 196px; margin-right: 196px;
    margin-top: 64px; margin-bottom: 64px;
`

const DescriptionLeft = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;

    width: 40%;
`

const Headshot = styled.img`
    width: 100%; height: auto;
    border-radius: 10px;
    overflow: hidden;

    margin-bottom: 16px;
`

const DescriptionText = styled.p`
    margin: 0;

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

const HilightedText = styled.span`
    font-weight: bold;
    color: var(--hilight);
`

const DescriptionRight = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;

    width: 60%;
    padding-left: 64px;
`