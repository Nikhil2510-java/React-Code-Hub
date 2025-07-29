import EducationDetails from '../../component/Portfolio/EducationDetails';
import SkillBars from '../../component/Portfolio/SkillBars';
const educationData = [
    {
        institution: "Sardar Patel College, Chandrapur, Maharashtra",
        degree: "Master of Computer Science",
        percentage: "77.20%",
        duration: "2021 – 2023"
    },
    {
        institution: "Shree Shivaji College, Rajura, Dist. Chandrapur, Maharashtra",
        degree: "Bachelor of Science (PMCs)",
        percentage: "67.30%",
        duration: "2018 – 2021"
    },
    {
        institution: "Mahatma Gandhi College, Gadchandur, Dist. Chandrapur, Maharashtra",
        degree: "Higher Secondary Certificate (HSC) – Science",
        percentage: "72.62%",
        duration: "2016 – 2018"
    }
];

const skillsData = [
    {
        skill: "Java, C",
        percentage: "80%"
    },
    {
        skill: "HTML, CSS, JavaScript, XML, Sightly (HTL), React (Basic)",
        percentage: "80%"
    },
    {
        skill: "SQL, PL/SQL",
        percentage: "60%"
    },
    {
        skill: "Spring, Spring Boot, OSGi",
        percentage: "70%"
    },
    {
        skill: "AEM Sites, Components, Sling Models, Scheduler, Cloud Manager",
        percentage: "85%"
    },
    {
        skill: "Adobe Experience Manager (AEM), Cloud-based deployment",
        percentage: "85%"
    },
    {
        skill: "Maven, Gradle,JUnit, Mockito",
        percentage: "75%"
    },
    {
        skill: "Git, GitHub, GitLab",
        percentage: "85%"
    },
    {
        skill: "Eclipse, VS Code, IntelliJ IDEA",
        percentage: "80%"
    }
];



const AboutUs = () => {
    return (
        <div id="about" className="about-us">
            <div className="about-content" id="about-content">
                <h2>About Me</h2>
                <h3 className="typing-effect">I'm Nikhil Borutkar and <span className="color-change"><u>Full-Stack Developer</u></span></h3>
                <p>I am an AEM Full Stack Developer with practical experience in supporting high-traffic enterprise websites. Since April 2025, I’ve enhanced AEM components using HTL, Sling Models, and Java, optimized UI performance by 20%, built adaptive mobile view models, resolved 30+ cross-browser issues, and integrated React for dynamic routing. I’ve also created reusable templates, custom servlets, and experience fragments to strengthen content architecture. Previously, I improved authoring speed by 30%, achieved 90% backend test coverage with JUnit and Mockito, automated content updates using Sling Scheduler, and streamlined deployment via Adobe Cloud Manager. My agile approach and commitment to code quality consistently enhance performance, usability, and delivery speed across digital platforms.</p>
            </div>
            <div id="education" className='flexview'>
                <div>
                    <h2>Education</h2>
                    <div>
                        {
                            educationData.map((edu, index) => (
                                <EducationDetails key={index} {...edu} />
                            ))
                        }
                    </div>
                </div>
                <div>
                    <h2>Skill</h2>
                    <div className='skills-wrapper'>
                        {
                            skillsData.map((skill, index) => (
                                <SkillBars key={index} {...skill} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;