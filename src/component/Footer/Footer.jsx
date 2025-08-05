import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <div style={{
            backgroundColor: "#222",
            color: "#fff",
            padding: "20px 0",
            textAlign: "center",
            position: "fixed",
            left: 0,
            bottom: 0,
            width: "100%"
        }}>
            <p style={{ margin: 0 }}>© 2024 React Code Hub. All rights reserved.</p>
            <div style={{ marginTop: "8px" }}>
                <Link
                    style={{
                        padding: "0 10px",
                        color: "#fff",
                    }}
                    to={"/"} >Home</Link>
                <Link
                    style={{
                        padding: "0 10px",
                        color: "#fff",
                    }}
                    to={"/home2"}>Grid-List-Product</Link>
                <Link
                    style={{
                        padding: "0 10px",
                        color: "#fff",
                    }}
                    to={"/portfolio"}>Portfolio</Link>
                <Link
                    style={{
                        padding: "0 10px",
                        color: "#fff",
                    }}
                    to={"/userEnquiry"}>User Enquiry</Link>
                <Link
                    style={{
                        padding: "0 10px",
                        color: "#fff",
                    }}
                    to={"/home3"}>User Table</Link>
                <Link
                    style={{
                        padding: "0 10px",
                        color: "#fff",
                    }}
                    to={"/home3/form"}>Country Form</Link>
            </div>
        </div>
    )
}

export default Footer;