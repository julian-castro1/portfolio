import styled from "styled-components";
import SectionTitle from "./SectionTitle";
import GH_IMG from "../assets/Github.svg";
import LI_IMG from "../assets/LinkedIN.svg";

function ContactSection({theme}){

    function downloadResume(){
        window.open("https://julian-portfolio.s3.us-east-2.amazonaws.com/Julian-Castro_Resume.pdf", '_blank', 'noopener,noreferrer');
    }
    function gitLink(){
            window.open("https://github.com/julian-castro1", '_blank', 'noopener,noreferrer');
    }
    function linkedLink(){
            window.open("https://www.linkedin.com/in/julian-castro1/", '_blank', 'noopener,noreferrer');
    }

    return (
        <ContactContainer id="Contact-me">
            <SectionTitle theme={theme} title="Contact me"></SectionTitle>
            <CardContainer theme={theme}>
                <InfoContainer theme={theme}>
                    <TextContainer theme={theme}>
                        <TitleContainer theme={theme}>
                            <Title theme={theme}>Contact Information</Title>
                        </TitleContainer>
                        <MainContent theme={theme}>
                            <p>
                                <BoldWord>LinkedIn: </BoldWord>
                                <span  onClick={linkedLink}>https://www.linkedin.com/in/julian-castro1/</span>
                            </p>
                            <p>
                                <BoldWord>GitHub: </BoldWord>
                                <span onClick={gitLink}>https://github.com/julian-castro1</span>
                            </p>
                            <p>
                                <BoldWord>Email: </BoldWord>
                                <span>julian_castro1@icloud.com</span>
                            </p>
                            <p>
                                <BoldWord>Phone: </BoldWord>
                                <span>(832)-692-6367</span>
                            </p>
                        </MainContent>
                    </TextContainer>
                    <LinksContainer theme={theme}>
                        <DownloadResume onClick={downloadResume} theme={theme}><span>Download Resume</span></DownloadResume>
                        <SocialsLinks theme={theme}>
                            <GitLink onClick={gitLink} theme={theme}><LogoImg src={GH_IMG}></LogoImg></GitLink>
                            <LinkedLink onClick={linkedLink} theme={theme}><LogoImg src={LI_IMG}></LogoImg></LinkedLink>
                        </SocialsLinks>
                    </LinksContainer>
                </InfoContainer>
            </CardContainer>
        </ContactContainer>
    )
}

const DownloadResume = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    /* width: 35vw; */
    flex: 1;

    border-radius: 1rem;

    background-color: ${props=>props.theme.accent};

    text-align: center;
    color: ${props=>props.theme.back2};
    font-weight: 700;
    font-size: 2.5rem;


    &:hover{
        cursor: pointer;
    }
`
const LogoImg = styled.img`
    width: 5vw;
    /* height: 10vh; */

    @media only screen and (max-width: 600px) {
        width: 50%;
    }
`
const SocialsLinks = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover{
        cursor: pointer;
    }

    flex: 1;
    gap: 1rem;
`
const GitLink = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    height: 100%;

    border-radius: 1rem;

    background-color: #101010;
`
const LinkedLink = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    height: 100%;

    border-radius: 1rem;

    background-color: #0077B5;
`
const ContactContainer = styled.div``

const BoldWord = styled.span`
    font-weight: 700;
`
const CardContainer = styled.div`
    display: flex;
    flex-direction: column;

    background-color: ${props=>props.theme.back2};
    color: ${props=>props.theme.text};

    margin: 2rem;
    padding: 1rem 2rem 1rem 2rem;

    border-radius: 2rem;

    @media only screen and (max-width: 600px) {
        /* margin: 0; */
    }
`
const InfoContainer = styled.div`
    display: flex;
    flex-direction: row;

    gap: 1rem;

    @media only screen and (max-width: 600px) {
        flex-direction: column;
        /* width: 100%; */
    }
`
const TextContainer = styled.div`
    display: flex;
    flex-direction: column;

    /* justify-content: space-evenly; */

    gap: .5rem;
`
const TitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    gap:2vw;
`
const Title = styled.div`
    color: ${props=>props.theme.primary};
    font-size: 3vw;
    font-weight: 800;

    &:hover{
        cursor: ${props=>props.link == 'null' ? "auto" : "pointer"};
    }
`
const MainContent = styled.div`
    text-align: left;
    font-weight: 300;
    font-size: 1.4rem;

    @media only screen and (max-width: 600px) {
        font-size: 1rem;
    }

    flex-grow: 1;
`

const LinksContainer = styled.div`
    display: flex;
    flex-direction: column;

    max-width: 60vw;
    height: 25rem;

    width: 30vw;

    padding-top: 2rem;
    padding-bottom: 2rem;
    padding-right: .7rem;
    
    /* margin: 2rem; */

    margin-left: auto;

    gap: 1rem;

    @media only screen and (max-width: 600px) {
        width: 100%;
        max-width: 100%;
        margin: 0;

    }
`



export default ContactSection;