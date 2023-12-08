import styled from "styled-components";
import { useEffect, useState } from "react";

function NavBar({theme, selected}){



    const options = ['Home', 'Bio', 'Projects', 'Education', 'Contact me'];
    // const [selected, setSelected] = useState('Home');

    const scrollToSection = (sectionId, name) => {
        const section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: 'smooth' });
        // Set the selected state to the current section
        // setSelected(name);
    };

    return(
        <NavContainer theme={theme}>
            {options.map((name)=>{
                const sectionId = name.replace(/\s+/g, '-');
                return (
                    <NavOption 
                        key={name} 
                        name={name} 
                        theme={theme} 
                        selected={selected}
                        onClick={() => scrollToSection(sectionId, name)}>
                            <span>{name}</span>
                    </NavOption>
                
                )
            })}
        </NavContainer>
    )
}

const NavContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 2%;

    padding-left: 2rem;
    padding-top: 1rem;
    padding-bottom: 1rem;

    background-color: ${props => props.theme.back1};

    /* width: 100%; */
    height: 2rem;

    position: sticky;
    top: 0;
    z-index: 30;
    box-shadow: 0px 2px 5px rgba(0,0,0,0.3);

    overflow-x: scroll;
`
const NavOption = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${props=> props.selected == props.name.replace(/\s+/g, '-') ? props.theme.primary : props.theme.back1};
    padding: .5rem 1rem .5rem 1rem;
    border-radius: .5rem;
    color: ${props=> props.selected == props.name.replace(/\s+/g, '-') ? props.theme.primaryText : props.theme.text};

    &:hover{
        cursor: pointer;
    }
`

export default NavBar;