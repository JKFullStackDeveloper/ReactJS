import React, { useEffect, useState } from "react";

function UserData() {

    const [users, setUser] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchData = async () => {
        const res = await fetch('https://dummyjson.com/users');
        const data = await res.json();
        setUser(data.users);
        setIsLoading(false);
    }

    useEffect(() => {
        fetchData();
    }, [users])
    // console.log(users[0])    
    return (
        
            <div className="table-data">
                {isLoading?"Loading...":null}
                <table className="user-table">
                    <thead className="table-head">
                        <tr>
                            <th>CutomerID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Age</th>
                            <th>Gender</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>UserName</th>
                            <th>Password</th>
                            <th>BirthDate</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody className="table-body">
                        {
                            users.map((user, index) => (
                                <tr key={index}>
                                    <td>{user.id}</td>
                                    <td>{user.firstName}</td>
                                    <td>{user.lastName}</td>
                                    <td>{user.age}</td>
                                    <td>{user.gender}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phone}</td>
                                    <td>{user.username}</td>
                                    <td>{user.password}</td>
                                    <td>{user.birthDate}</td>
                                    <td>{user.address.city}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
    )
}

export default UserData;