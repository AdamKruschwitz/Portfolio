import React, { useState, useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";

export default function ExperienceBar({title, percentage}) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef();

    useEffect(() => {
        // Set visible to true when half the item is in the viewport
        const observer = new IntersectionObserver(
            ([entry]) => {
                console.log(entry);
                if(entry.isIntersecting) {
                    console.log('it works!');
                    setIsVisible(true);
                }
            },
            {
                root: null,
                rootMargin: "0px",
                threshold: 1.0
            }
        );
        if(ref.current) observer.observe(ref.current);
    }, [ref]);

    

    return (
        <Container ref={ref}>
            {isVisible && <Experience percentage={percentage} />}
            <Text>{title}</Text>
            <TextRight>{percentage+"%"}</TextRight>
        </Container>
    )
}

const growRight = keyframes`
    from {
        max-width: 0%;
    }

    to {
        max-width: 100%;
    }
`

const Container = styled.div`
    width: 100%;
    display: flex;
    position: relative;
    flex-direction: row;
    justify-content: start;
    background-color: var(--grey);
    z-index: -2;

    margin-bottom: 16px;
`

const Experience = styled.div`
    position: absolute;
    top: 0; left: 0;
    width: ${props => props.percentage}%;
    height: 100%;
    background-color: var(--secondary);
    z-index: -1;

    animation: ${growRight} 1.5s ease;
`

const Text = styled.p`
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;
    text-align: left;

    color: var(--primary);
    margin: 0;
    padding: 10px;
`

const TextRight = styled(Text)`
    position: absolute;
    top: 0; right: 0;
`