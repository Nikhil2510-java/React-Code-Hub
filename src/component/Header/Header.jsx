import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <div style={{
            backgroundColor: "lightblue",
            padding: "10px",
            position: "sticky",
            top: 0,
            zIndex: 1000
        }}>
            <ul style={{
                display: "flex",
                justifyContent: "space-evenly",
                listStyle: "none"
            }}>
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
                <li>
                    <Link to={"/products"}>Grid-List-Product</Link>
                </li>
                <li>
                    <Link to={"/portfolio"}>Portfolio</Link>
                </li>
                <li>
                    <Link to={"/userEnquiry"}>User Enquiry</Link>
                </li>
                <li>
                    <Link to={"/userData"}>User Table</Link>
                </li>
                <li>
                    <Link to={"/userData/form"}>country form</Link>
                </li>
                <li>
                    <Link to={"/login"}>Login<FontAwesomeIcon icon={faUser} className="nav-icon" /></Link>
                </li>
            </ul>
        </div>
    )
}

export default Header;