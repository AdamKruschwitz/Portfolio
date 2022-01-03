import React from "react";
import styled from "styled-components";
import {AiFillHeart} from "react-icons/ai";

export default function Footer() {
    return (
        <FooterContainer>
            <FooterText>
                Made with <HeartIcon /> by Adam Kruschwitz.
            </FooterText>
        </FooterContainer>
    )
}

const FooterContainer = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--primary);
    padding-top: 32px; padding-bottom: 32px;
`

const FooterText = styled.p`
font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 22px;
    
    color: #ffffff;
    margin: 0;
`
const HeartIcon = styled(AiFillHeart)`
    color: var(--hilight);
    height: 18px;
    width: 18px;
    display: inline;
`