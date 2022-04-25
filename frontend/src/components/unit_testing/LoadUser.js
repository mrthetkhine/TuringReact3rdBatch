import React, { useEffect, useState } from 'react';
import {formatUserName} from "../../utils/Util";
import axios from 'axios';
import {Link, Outlet} from "react-router-dom";

const LoadUser = ()=> {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        let mounted = true;

        const getUsers = async () => {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            if (mounted) {
                console.log("User ",response.data);
                setUsers(response.data);
            }

        };
        getUsers();
    },[]);
    return(<div>
        <h1>Load User</h1> {users.length}

        {users.length >0  &&
        <nav>
            <ul data-testid="user-list" >
            { users.map(user=>{
                return(<li key={user.id} data-testid="user-item">
                    <Link to={`/users/${user.id}`}>
                    {user.name+ "(" +formatUserName(user.username) +")"}
                    </Link>

                </li>)
            })}

            </ul>
        </nav>
            }
        <Outlet />

    </div>);

}

export default LoadUser;