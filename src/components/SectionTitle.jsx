import styled from "styled-components";

function SectionTitle({theme, title}){
    return (
        <Title theme={theme}><span>{title}</span></Title>
    )
}

const Title = styled.div`
    display: flex;
    justify-content: right;
    align-items: center;

    padding-left: 1rem;
    padding-right: 3%;
    background-color: ${props=>props.theme.primary};
    color: ${props=>props.theme.primaryText};

    margin-top: 4rem;
    margin-right:auto;
    height: 3rem;
    width: 15%;

    border-radius: 0 .8rem .8rem 0;

    font-weight: 700;
    font-size: 1.2rem;

    @media only screen and (max-width: 600px) {
        width: 30%;
    }
`

export default SectionTitle;