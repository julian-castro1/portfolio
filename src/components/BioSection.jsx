import styled from "styled-components";
import SectionTitle from "./SectionTitle";
import InfoCard from "./InfoCard";
import julianIMG from "../assets/julian.png"

function BioSection({theme}){
    const subtitle = 'from 3D printing to Software Engineering'
    const main = 'My name is Julian Castro and I was born and raised in Houston, TX. I am a first generation college graduate and American. Since a young age, I have been tinkering and playing with any hardware I can get my hands on. Whether it was an old alarm clock my parents were getting rid of or a broken fan, I loved taking things apart and looking through all the components, even if I wasnt able to put it all back together. I would sit for hours in the ‘technology’ section of Half Priced Books and look through all the course books I could. I loved the idea of being able to make and fix things, but I never really knew what it was called, that is before I begged my parents to get me a copy of “Code: The Hidden Language of Computer Hardware and Software” by Charles Petzold. The book was the catalyst that turned my aimless dissambly of electronics into a passion for a deep understanding of how things work. During the summer of 8th grade, I decided I wanted to get an Arduino and start tinkering with programming and simple electronics. Since my parents didnt have the budget to fund my hobbies, I decided to take matters into my own hands. From that summer until I got my first internship freshman year in college, I would work the first half of the summer, saving and designing, and use that money to buy parts for the project I had been interested in. 8th grade was an Arduino electronics kit, 9th was making a 3D printer, 10th a structured light 3D scanner, 11th a racing drone, and 12th was a HAB to record 360 video of the edge of space. The process of designing, building, debugging, and result of each of these projects has molded my problem solving mentality and fueled my passion.'
    const secondary = 'Needless to say, I have been a lifelong learner and engineer, long before I formalized it with a Bachelors from Baylor. I am a well rounded multidisciplinary engineer with a passion for engineering and problem solving. As I continue on my professional journey, I am eager to apply this lifelong passion and diverse engineering expertise to innovative projects and challenging roles, aiming to make impactful contributions in the field of engineering.'
    return (
       <BioContainer id="Bio">
            <SectionTitle theme={theme} title="Bio"></SectionTitle>
            <InfoCard theme={theme} title="About me" subtitle={subtitle} mainContent={main} secondContent={secondary} img='null'/>
        </BioContainer>
    )
}

const BioContainer = styled.div`
    
`

export default BioSection;