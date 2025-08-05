import { Link } from "react-router-dom";
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
                    <Link to={"/home2"}>Grid-List-Product</Link>
                </li>
                <li>
                    <Link to={"/portfolio"}>Portfolio</Link>
                </li>
                <li>
                    <Link to={"/userEnquiry"}>User Enquiry</Link>
                </li>
                <li>
                    <Link to={"/home3"}>User Table</Link>
                </li>
                <li>
                    <Link to={"/home3/form"}>country form</Link>
                </li>
            </ul>
        </div>
    )
}

export default Header;