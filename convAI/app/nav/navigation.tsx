import { NavLink } from "react-router";
import './styles.css'; 

export default function Navigation(){

    return <div className="nav-container">

        <NavLink to="/">SignUp</NavLink>
        <NavLink to="/login">Login</NavLink>
   
    </div>
}