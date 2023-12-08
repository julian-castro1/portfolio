import styled from "styled-components";
import { v4 as uuidv4 } from 'uuid';

function InfoCard({theme='', title='', subtitle='', mainContent='', secondContent='', skills=[], link='', img=''}){
    
    function handleRedirect(){
        if(link != 'null'){
            window.open(link, '_blank', 'noopener,noreferrer');
        }
    }

    const mainContentParagraphs = mainContent.split('~');


    return (
        <CardContainer theme={theme}>
            <TitleContainer theme={theme}>
                        <Title onClick={handleRedirect} link={link} theme={theme}>{title}</Title>
                        <Subtitle theme={theme}>{subtitle}</Subtitle>
            </TitleContainer>
            <InfoContainer theme={theme}>
                <TextContainer theme={theme}>
                    <MainContent theme={theme}>
                        {mainContentParagraphs.map((para)=>{
                            let nextIsBegin = true;
                            return <p key={para}>
                                {para.split(' ').map((word)=>{
                                    // if a word is upper cased and its not the first word of the sentence, bold it
                                    const out = word == 'I' || word[0].toUpperCase() != word[0] || nextIsBegin ? 
                                     <span key={uuidv4()}>{word} </span> :
                                     <BoldWord key={uuidv4()}>{word} </BoldWord> ;
                                    nextIsBegin = word[word.length-1] == '.';
                                    return out;
                                })}
                            </p>
                        })}
                    </MainContent>
                    <SecondContent theme={theme}>{secondContent}</SecondContent>
                </TextContainer>
                <MediaContainer theme={theme}><ImgContainer src={img} theme={theme} img={img}/></MediaContainer>
            </InfoContainer>

            <SkillsContainer theme={theme}>
                {skills.map((skill)=>{
                    return <SkillBubble key={skill} theme={theme}><span>{skill}</span></SkillBubble>
                })}
            </SkillsContainer>
        </CardContainer>
    )
}

const MediaContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    @media only screen and (max-width: 600px) {
        order: 1; /* Show text container second on smaller screens */
    }
`
const BoldWord = styled.span`
    font-weight: 700;
`
const CardContainer = styled.div`
    display: flex;
    flex-direction: column;

    background-color: ${props=>props.theme.back2};
    color: ${props=>props.theme.text};

    margin: 4rem;
    padding: 1rem 2rem 1rem 2rem;

    border-radius: 2rem;

    @media only screen and (max-width: 600px) {
        margin: .5rem;
        padding: 1rem 1.7rem 1rem 1.7rem;
    }
`
const InfoContainer = styled.div`
    display: flex;
    flex-direction: row;
    /* align-items: center; */

    margin: 1.4rem;
    margin-bottom: 1rem;
    margin-top: .4rem;

    gap: 1rem;

    @media only screen and (max-width: 600px) {
        flex-direction: column;
        margin: 0rem;
    }
`
const TextContainer = styled.div`
    display: flex;
    flex-direction: column;

    /* justify-content: space-evenly; */

    gap: .5rem;
     @media only screen and (max-width: 600px) {
        order: 2; /* Show text container second on smaller screens */
    }

`
const TitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    gap:2vw;

    @media only screen and (max-width: 600px) {
        flex-direction: column;
    }
`
const Title = styled.div`
    color: ${props=>props.theme.primary};
    font-size: 3vw;
    font-weight: 800;

    &:hover{
        cursor: ${props=>props.link == 'null' ? "auto" : "pointer"};
    }
    @media only screen and (max-width: 600px) {
        font-size: 3rem;
    }
`
const Subtitle = styled.div`
    font-weight: 200;
`
const MainContent = styled.div`
    text-align: left;
    font-weight: 300;

    flex-grow: 1;
`
const SecondContent = styled.div`
    text-align: left;
    font-weight: 700;

    flex-grow: 1;

    padding-bottom: 1rem;
`
const ImgContainer = styled.img`
    max-width: 60vw;
    max-height: ${props=>props.img == 'null' ? '0' : '25rem'};

    margin-top: 1.1rem;

    border-radius:1rem;
`
const SkillsContainer = styled.div`
    display: flex;
    flex-direction: row;

    gap:.5rem;

    flex-wrap: wrap;
`
const SkillBubble = styled.div`
    background-color: ${props=>props.theme.back4};
    color: ${props=>props.theme.text};
    padding: .2rem .8rem .2rem .8rem;
    border-radius: .6rem;

`

export default InfoCard;