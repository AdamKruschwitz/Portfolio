import React from "react";
import styled from "styled-components";

// Icons
import {AiFillPhone} from "react-icons/ai";
import {MdEmail} from "react-icons/md";
import {AiFillLinkedin} from "react-icons/ai";
import {AiFillGithub} from "react-icons/ai";

// Responsive 
import devices from "../devices";

export default function Contact() {
    return (
        <Container>
            <HeaderContainer>
                <HeaderText>CONTACT</HeaderText>
            </HeaderContainer>
            <ContactInfoContainer>
            <ContactContainer>
                <EmailIcon />
                <ContactText>a.j.kruschwitz@gmail.com</ContactText>
            </ContactContainer>
            <ContactContainer>
                <PhoneIcon />
                <ContactText>(585) 455-8650</ContactText>
            </ContactContainer>
            <ContactContainer>
                <LinkedInIcon />
                <ContactText>linkedin.com/in/akruschwitz</ContactText>
            </ContactContainer>
            <ContactContainer>
                <GitHubIcon />
                <ContactText>github.com/AdamKruschwitz</ContactText>
            </ContactContainer>
            </ContactInfoContainer>
            
        </Container>
    )
}

const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
`

const ContactInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: left;

    margin-bottom: 64px;
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

const ContactContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

const ContactText = styled.p`
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 26px;
    margin: 0;
    padding-left: 32px;
    color: var(--primary);

    @media only screen and (max-width: ${devices.medium}) {
        font-size: 18px;
        padding-left: 16px;
    }
`

const PhoneIcon = styled(AiFillPhone)`
    color: var(--primary);
    width: 48px;
    height: 48px;

    @media only screen and (max-width: ${devices.medium}) {
        width: 32px;
        height: 32px;
    }
`

const EmailIcon = styled(MdEmail)`
    color: var(--primary);
    width: 48px;
    height: 48px;
    
    @media only screen and (max-width: ${devices.medium}) {
        width: 32px;
        height: 32px;
    }
`

const LinkedInIcon = styled(AiFillLinkedin)`
    color: var(--primary);
    width: 48px;
    height: 48px;
    
    @media only screen and (max-width: ${devices.medium}) {
        width: 32px;
        height: 32px;
    }
`

const GitHubIcon = styled(AiFillGithub)`
    color: var(--primary);
    width: 48px;
    height: 48px;
    
    @media only screen and (max-width: ${devices.medium}) {
        width: 32px;
        height: 32px;
    }
`