import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Error from "../../pages/error";
import { privateRoutes, publicRoutes } from "../../roters/routers";
import { AuthContext } from "../../context/context";

function AppRouter() {
    const { isAuth } = useContext(AuthContext);
    console.log(isAuth);
    return isAuth ? (
        <Routes>
            <Route path="/login" element={<Navigate to={"/posts"} replace />} />
            <Route path="/" element={<Navigate to={"/posts"} replace />} />
            {privateRoutes.map((route) => {
                return (
                    <Route
                        key={route.path}
                        path={route.path}
                        element={route.element}
                        exact={route.exact}
                    />
                );
            })}
        </Routes>
    ) : (
        <Routes>
            <Route path="/*" element={<Navigate to={"/login"} replace />} />
            <Route path="/" element={<Navigate to={"/login"} replace />} />
            {publicRoutes.map((route) => {
                return (
                    <Route
                        key={route.path}
                        path={route.path}
                        element={route.element}
                        exact={route.exact}
                    />
                );
            })}
            <Route path="*" element={<Error />} />
        </Routes>
    );
}

export default AppRouter;
