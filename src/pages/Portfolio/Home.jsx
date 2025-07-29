
import HeadNav from "../../component/Portfolio/HeadNav";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faBriefcase, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Data = {
    tabs: [
        { id: 1, name: 'Home', link: "#home", icon: faHome },
        { id: 2, name: 'About', link: "#about", icon: faUser },
        { id: 3, name: 'Portfolio', link: "#portfolio", icon: faBriefcase },
        { id: 4, name: 'Contact', link: "#contact", icon: faEnvelope },
    ]
};
const Home = () => {
    return (
        <div id="home">
            <div className="bg-blue">
                <HeadNav tabs={Data.tabs} />
            </div>
            <div className="flexview backgroundImage main-content" id="main-content">
                <div id="introText">
                    <h2 className="typing-effect">Hello I am <span className="color-change"><i>Nikhil Borutkar</i></span></h2>
                    <p>I'm a Full Stack Developer with 1 year of hands-on experience building responsive web applications using modern JavaScript frameworks and scalable backend solutions. I combine technical precision with problem-solving to deliver reliable and efficient products. I'm passionate about writing clean, reusable code and continually improving my skills to stay aligned with industry best practices.</p>
                </div>
                <div id="profileSection">
                    <img id="profile" src="https://cdn-icons-png.flaticon.com/512/8815/8815077.png" alt="profile" />
                </div>
            </div>
        </div>

    )
}

export default Home;