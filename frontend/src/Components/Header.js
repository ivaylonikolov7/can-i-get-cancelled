import { Link } from "react-router-dom";
import "../styles/header.css";

function Header(){
    return <>
        <ul id="menu">
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/leaderboard'>Leaderboard</Link>
            </li>
        </ul>
    </>
}

export default Header;