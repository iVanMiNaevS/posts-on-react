import About from "../pages/about";
import PagePostbyId from "../pages/pagePostbyId";
import Posts from "../pages/posts";
import Login from "../pages/Login";
export const privateRoutes = [
    { path: "/posts", element: <Posts />, exact: true },
    { path: "/about", element: <About />, exact: true },
    { path: "/posts/:id", element: <PagePostbyId />, exact: true },
];
export const publicRoutes = [
    { path: "/login", element: <Login />, exact: true },
];
