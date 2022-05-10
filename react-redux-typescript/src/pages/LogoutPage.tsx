import {useAppDispatch} from "../app/hooks";
import {useNavigate,useParams,useLocation} from "react-router-dom";
import {logout} from './../features/auth/authSlice';
export default function LogoutPage()
{
    let navigate = useNavigate();
    let dispatch = useAppDispatch();
    let logoutHandler = ()=>{
        console.log("Logout ");
        dispatch(logout());
        navigate("/");

    }
    return (<div>
        <button className="btn btn-primary"
            onClick={logoutHandler}>Logout
        </button>
    </div>);
}