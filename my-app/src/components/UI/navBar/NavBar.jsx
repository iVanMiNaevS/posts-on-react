import React, { useContext } from "react";
import "./navBar.css";
import { Link } from "react-router-dom";
import MyButton from "../button/MyButton";
import { AuthContext } from "../../context/context";
function NavBar() {
    const { setIsAuth } = useContext(AuthContext);
    function logOut() {
        setIsAuth(false);
        localStorage.setItem("auth", "false");
    }
    return (
        <header>
            <h2>Navigation panel</h2>
            <MyButton style={{ padding: 10 }} onClick={logOut}>
                Logout
            </MyButton>
            <div className="nav__links">
                <Link to="/posts" className="link">
                    Posts
                </Link>
                <Link to="/about" className="link">
                    About
                </Link>
            </div>
        </header>
    );
}

export default NavBar;
