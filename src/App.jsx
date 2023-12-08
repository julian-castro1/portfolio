import { useState } from 'react';
import { themes } from './themes';
import styled from 'styled-components';
import ThemeButton from './components/ThemeButton';
import NavBar from './components/NavBar';

import { useSectionObserver } from './useSectionObserver'

import IntroSection from './components/IntroSection';
import ProjectsSection from './components/ProjectsSection';
import EducationSection from './components/EducationSection';
import ContactSection from './components/ContactSection';
import './App.css';
import BioSection from './components/BioSection';

function App() {
  const [theme, changeTheme] = useState(themes.dark);
  const selectedSection = useSectionObserver();

  function handleThemeChange(){
    theme.current === 'dark' ? changeTheme(themes.light) : changeTheme(themes.dark);
  }

  return (
    <PageContainer theme={theme}>
      <ThemeButton theme={theme} changeTheme={handleThemeChange} />
      <NavBar theme={theme} selected={selectedSection}/>
      <IntroSection theme={theme}/>
      <BioSection theme={theme}/>
      <ProjectsSection theme={theme}/>
      <EducationSection theme={theme}/>
      <ContactSection theme={theme}/>
    </PageContainer>
  )
}

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  /* height: 100vh; */

  background-color: ${props => props.theme.back1};
`

export default App
