import { useNavigate } from "react-router-dom";
const Login = () => {
    const navigate = useNavigate();
    const onLogin = (e) => {
        e.preventDefault();
        const username = e.target.username.value;
        const password = e.target.password.value;
        if(username === "admin" && password === "admin") {
            // alert("Login successful");
            navigate('/dashboard'); 
        } else {
            alert("Invalid credentials");
        }
    };
    return (
        <>
            <form onSubmit={onLogin}>
                <div>
                    <label htmlFor="username">Username: </label>
                    <input type="text" id="username" name="username" required />
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input type="password" id="password" name="password" required />
                </div>
                <input type="Submit" value="Login" />
            </form>
        </>
    )
}

export default Login;