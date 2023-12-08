import styled from "styled-components";
import SectionTitle from "./SectionTitle";
import InfoCard from "./InfoCard";

import AWS_IMG from "../assets/aws.png"

function EducationSection({theme}){

    const education = [
        {
            'title':'Baylor University',
            'subtitle':'Bachelor of Science',
            'mainContent':'Major: Electrical & Computer Engineering~Minors: Computer Science and Mathematics',
            'secondContent':'Relevant Coursework: Data Structures, Algorithms, Computer Architecture, Embedded Systems Engineering',
            'skills':['Embedded Systems','Electrical Engineering','Computer Engineering','Computer Science','Mathematics','Software Engineering'],
            'link':'null',
            'img': 'null'
        },
        {    
            'title':'AWS Certifications',
            'subtitle':'',
            'mainContent':'2023: AWS Associate Developer~2022: AWS Cloud Practitioner',
            'secondContent':'Relevant Topics: AWS Core Services, Serverless Architecture, AWS Security Practices, DevOps on AWS, AWS Database Services, Application Deployment and Monitoring on AWS',
            'skills':['AWS','AWS Lambda','AWS S3','AWS API Gateway','DynamoDB','AWS CI/CD'],
            'link':'null',
            'img': AWS_IMG
        },
    ]


return (
        <EducationContainer id="Education">
            <SectionTitle theme={theme} title="Education"></SectionTitle>
            {education.map((p)=>{
                return <InfoCard key={p.title} theme={theme} title={p.title} subtitle={p.subtitle} mainContent={p.mainContent} secondContent={p.secondContent} skills={p.skills} link={p.link} img={p.img}/>
            })}
        </EducationContainer>
    )
}

const EducationContainer = styled.div`
    
`


export default EducationSection;