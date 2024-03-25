import React, { useContext } from "react";
import MyInput from "../UI/input/MyInput";
import MyButton from "../UI/button/MyButton";
import { AuthContext } from "../context/context";

function Login() {
    const { setIsAuth } = useContext(AuthContext);
    function Login(e) {
        e.preventDefault();
        localStorage.setItem("auth", "true");
        setIsAuth(true);
    }
    return (
        <form style={{ marginTop: 50 }} onSubmit={Login}>
            <h1 style={{ textAlign: "center" }}>Login</h1>
            <MyInput type="text" />
            <MyInput type="text" />
            <MyButton>Login</MyButton>
        </form>
    );
}

export default Login;
