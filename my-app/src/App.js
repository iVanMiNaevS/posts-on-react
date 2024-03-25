import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";

import NavBar from "./components/UI/navBar/NavBar";
import AppRouter from "./components/UI/AppRouter/AppRouter";
import { AuthContext } from "./components/context/context";

function App() {
    const [isAuth, setIsAuth] = useState(false);
    useEffect(() => {
        if (localStorage.getItem("auth") === "true") {
            setIsAuth(true);
        }
    }, []);
    return (
        <AuthContext.Provider
            value={{
                isAuth,
                setIsAuth,
            }}
        >
            <BrowserRouter>
                <NavBar />
                <AppRouter />
            </BrowserRouter>
        </AuthContext.Provider>
    );
}

export default App;
