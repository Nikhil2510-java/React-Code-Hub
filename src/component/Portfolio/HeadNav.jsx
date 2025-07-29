import '../../Styles/Styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const HeadNav = ({ tabs }) => {
    return (
        <div className="head-nav flexview bg-blue" id='head-nav'>
            <img id='logo' src="https://t4.ftcdn.net/jpg/03/20/98/89/360_F_320988925_5SuvsFEMnNyZz2LNFlWqOQs8x8ahCiR8.jpg" alt="Logo" />
            <ul id="head-nav-ul" className="flexview">
                {tabs.map((tab, index) => (
                    <li key={`${tab.name}-${index}`}>
                        <a href={tab.link}>
                            {tab.name} <FontAwesomeIcon icon={tab.icon} className="nav-icon" />
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default HeadNav;