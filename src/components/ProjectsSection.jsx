import styled from "styled-components";
import SectionTitle from "./SectionTitle";
import InfoCard from "./InfoCard";

import PETNET_IMG from "../assets/PETNET.png";
import RHIANNSGPT_IMG from "../assets/RhiannaGPT.png";
import MYKEYGURU_IMG from "../assets/myKeyGuru.png";
import FAANGCOACH_IMG from "../assets/FAANGcoach.png";

function ProjectsSection({theme}){

    const projects = [
        // {    
        //     'title':'',
        //     'subtitle':'',
        //     'mainContent':'',
        //     'secondContent':'',
        //     'skills':['',''],
        //     'link':'null',
        //     'img': SAMPLE_IMG
        // },
        {
            'title':'PETNET',
            'subtitle':'a network of IoT devices monitoring your dog’s health',
            'mainContent':'Imagine a FitBit for your dog, but so much more. PETNET is a network of IoT devices that communicate with each other and provide a comprehensive breakdown of patterns and metrics on a user-friendly dashboard. There are currently 3 main modules: the collar, the bowl, and the crate monitor. The collar uses a suite of onboard sensors and processing to collect data and calculate the dog’s activity levels, current activity, steps, and can also be used as an emergency locater with onboard GNSS and Cellular connectivity. This data, synced with the smart bowl, allows for a complete caloric calculation, measuring both caloric intake and burn. This gives you the information necessary to make meaningful change in your dog’s lifestyle and promote longevity. In addition to these 2 modules is the crate module. The crate module allows of constant monitoring of the pet’s environment conditions, allowing you peace of mind while away.',
            'secondContent':'This project was multidisciplinary, involving a wide range of skills and technologies. It involved low level Embedded Systems Engineering to select the controller, sensor suites, and communication protocols. It involved writing and testing the firmware implementing algorithmic IMU sensor data processing so as to limit MQTT messages to the cloud. The dashboard was created using Node.JS, CSS, and HTML, receiving processed data from AWS IoT Core.',
            'skills':['Embedded Systems','ESP-32','IoT','AWS','C++','Python','Node.JS','CSS','HTML','AWS IoT Core','AWS S3'],
            'link':'null',
            'img': PETNET_IMG
        },
        {    
            'title':'myKeyGuru',
            'subtitle':'complete management tool for mobile locksmiths',
            'mainContent':'This is a complete management tool for mobile locksmiths with an intuitive UI on a tablet at the technician’s fingertips. It has 5 main modules: Inventory Management, Transaction History, Invoicing, Compatibility Map, and Job Routing. The best way to show the utility of this software is to go through a typical day as a mobile locksmith. The phone starts ringing early and quickly, with over 5 jobs in the job queue and all located around town. Instead of spending precious time finding an optimal route, only to need recalculating when another call comes in, you can enjoy your morning coffee while the route is planned for you, taking into account predefined parameter weights including driving time, how long each job will take, preferred customers, and more. You arrive at the first job: making a key for a 2017 Ford Focus. Instead of trying to recollect what exact key type you need, then trying to find it in your work van, you simply enter the information on your tablet and myKeyGuru tells you exactly what key you need; as well as relevant information such as vehicle specific tips, exact key location in your van, profit and revenue calculations, remaining inventory, and much more. At the end of the job, instead of handwriting a receipt or invoice, simply share or print it via the software with all the information pre-populated. After a long day of work, you can look at a summary of your day including time driving, revenue and profit calculations, inventory used, and more. myKeyGuru outperforms expensive, bloated ERP solutions with a modern, intuitive GUI and a low barrier of entry, made for locksmiths, by a locksmith.',
            'secondContent':'This project was a heavy full-stack development role. From encountering the problem in the real world, through brain storming, designing, and building, I applied a customer-first mindset to build the best product. I used a full serverless backend hosted on AWS with DynamoDB, Lambda, API Gateway, and more.',
            'skills':['Serverless Architecture','React','AWS','Python','Node.JS','CSS','HTML','NoSQL','AWS S3','REST API','Lambda'],
            'link':'null',
            'img': MYKEYGURU_IMG
        },
        {    
            'title':'DS&A Journal',
            'subtitle':'a guide through Data Structures & Algorithms practice',
            'mainContent':'Stop aimlessly throwing a dart at the Leetcode problem list in the hope you make progress towards Data Structures and Algorithms proficiency. Using DS&A Journal, you can input your current experience level and be recommended a custom roadmap to achieve your goals. You are able to choose your approximate session length, and the webapp will generate a custom session plan of Leetcode problems that are specific to your data. After each problem, take a second to give feedback about how you did, how difficult it was, and input your code to be reviewed. Once reviewed, your DSA journey will auto adjust and have your next curated session waiting so you can make efficient, data-driven practice progress towards acing your coding interviews. DS&A Journal tracks your progression over time, ensuring that your session plans focus on your weaknesses, while maintaining your strengths. Master Data Structures and Algorithms and be better prepared than ever to conquer the daunting coding interviews.',
            'secondContent':'This project began as a simple assistant for me as I was struggling through my own Data Structures and Algorithms journey. As I added features and shared it with friends, the breadth of the webapp grew as did its usefulness. It is hosted on AWS and uses OpenAI’s API to judge coding responses and contribute to the internal elo-style algorithm judging a person’s progression. Work in progress.',
            'skills':['Embedded Systems','ESP-32','IoT','AWS','C++','Python','Node.JS','CSS','HTML','AWS IoT Core','AWS S3'],
            'link':'null',
            'img': FAANGCOACH_IMG
        },
        {    
            'title':'RhiannaGPT',
            'subtitle':'a simple demonstration of OpenAI API',
            'mainContent':'A simple concept implementation of OpenAI’s API for a personal Oracle Netsuite education consultant. This intuitive UI allows for conversational access to deep NetSuite knowledge. Created as an assistant to an actual education consultant, this GPT powered chatbot can provide fast, relevant feedback and recommendations without needing to wait, or pay, for a consultant.',
            'secondContent':'This was a fun couple hour project that began as a joke. My partner is an education consultant that was stuck in client calls well into our planned dinner reservation. While I waited, I created this fun chatbot from scratch, using vanilla JS, CSS, and HTML and hooked it up to OpenAI’s GPT-4 model through an AWS Lambda function. It has actually proved quite useful to her in a pinch!',
            'skills':['JavaScript','AWS Lambda','AWS API Gateway','AWS','OpenAI','GPT-4','CSS','HTML','AWS S3','REST API'],
            'link':'https://rhianna-consults.com',
            'img': RHIANNSGPT_IMG
        },
        
    ]

    return (
        <ProjectsContainer id="Projects">
            <SectionTitle theme={theme} title="Projects"></SectionTitle>
            {projects.map((p)=>{
                return <InfoCard key={p.title} theme={theme} title={p.title} subtitle={p.subtitle} mainContent={p.mainContent} secondContent={p.secondContent} skills={p.skills} link={p.link} img={p.img}/>
            })}
        </ProjectsContainer>
    )
}
// {theme, title, subtitle, mainContent, secondContent, skills}

const ProjectsContainer = styled.div`
    
`

export default ProjectsSection;