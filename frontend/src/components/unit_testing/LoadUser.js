import { useEffect, useState } from 'react';
import {formatUserName} from "../../utils/Util";
import axios from 'axios';

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

        {users.length >0  && <ul data-testid="user-list" >
            { users.map(user=>{
                return(<li key={user.id} data-testid="user-item">
                    {user.name+ "(" +formatUserName(user.username) +")"}
                </li>)
            })}
        </ul>}

    </div>);

}

export default LoadUser;