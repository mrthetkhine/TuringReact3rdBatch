import {useParams} from "react-router-dom";
export default function User()
{
    let params = useParams();
    return (<div>
        <h1>User {params.userId}</h1>
    </div>)
}