import './userStyle.css';   
const UserDataApi = (user) => {
    const { name, username, email, address:{street,city,zipcode} } = user;
   // const { street, city, zipcode } = address;
    return (
        <tr>
            <td>{name}</td>
            <td>{username}</td>
            <td>{email}</td>
            <td>{street}&nbsp;{city}&nbsp;{zipcode}</td>
        </tr>
    );
}

export default UserDataApi;