import styled from "styled-components";
import { useState, useEffect } from "react";
import julianImg from "../assets/animated.png"


function IntroSection({theme}){
    const [titleNdx, changeTitle] = useState(0);
    const [isFading, setIsFading] = useState(false);

    const titleBank = [
        ['a', ' software engineer'],
        ['an', ' embedded systems engineer'],
        ['a', ' full-stack developer'],
        ['a', ' technology consultant'],
        ['a', ' problem solver']
    ]

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIsFading(true);
            setTimeout(() => {
                changeTitle((titleNdx + 1) % titleBank.length);
                setIsFading(false);
            }, 1000); // half of the interval duration for a smooth transition
        }, 2000);
        return () => clearInterval(intervalId);
    }, [titleNdx]);

    return(
        <IntroContainer theme={theme} id="Home">
            <ImageTextWrapper>
                <IntroImage theme={theme} src={julianImg}></IntroImage>
                <IntroText theme={theme}>
                    <NameIntro theme={theme}>
                        <span>I'm </span>
                        <BoldText>Julian</BoldText>
                        <span>,</span>
                    </NameIntro>
                    <TitleIntro theme={theme} titleNdx={titleNdx} fading={isFading}>
                        <span>{titleBank[titleNdx][0]}</span>
                        <BoldText>{titleBank[titleNdx][1]}</BoldText>
                    </TitleIntro>
                </IntroText>
            </ImageTextWrapper>
        </IntroContainer>
    )
}

const IntroContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative; 

    height: 70vh;
    padding: 2rem;
    margin-top: 4rem;
    margin-bottom: 4rem;
    color: ${props => props.theme.text};
`
const ImageTextWrapper = styled.div`
    /* position: relative; */
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;
    height: 70vh; // Adjust to fit your design
`;
const IntroText = styled.div`
    /* position: absolute; */
    /* bottom: 0;
    z-index: 2; */

    display: flex;
    flex-direction: column;
    gap: 1rem;

    padding: 1rem 3rem 1.4rem 3rem;
    border-radius: 2rem;
    min-width: 26rem;
    background-color: ${props=>props.theme.back3};

    margin-top: 0vh;
    /* margin-right: 17%; */
`
const BoldText = styled.span`
    font-weight: 700;
`
const NameIntro = styled.div`
    font-size: 4rem;
`
const TitleIntro = styled.span`
    font-size: 1.6rem;
    opacity: ${props => props.fading ? 0 : 1};
    transition: opacity 1s ease-in-out;
`
const IntroImage = styled.img`
    /* position: absolute; */
    /* right: 50%;
    top: 0%;
    transform: translateX(50%);
    z-index: 1; */
/* 
    margin: 0;
    padding: 0; */

    max-width: 20rem;
    max-height: 100%;
`

export default IntroSection;