import axios from "axios";
import { useState, useEffect } from "react";
import UserDataApi from "../../component/Task-1/UserDataApi";
import FormValidation from "../../component/Task-2/Form-Validation";
const Home3 = () => {
    const data = "https://jsonplaceholder.typicode.com/users";
    const [userData, setUserData] = useState([]);

    const fetchData = async () => {
        try {
            const res = await axios.get(data);
            setUserData(res.data);
        }
        catch (error) {
            console.error("Error fetching data:", error);
        }
    }
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {userData.map(user => (
                        <UserDataApi key={user.id} {...user} />
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default Home3;