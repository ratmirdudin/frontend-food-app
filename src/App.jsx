import {Navigate, Route, Routes} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import {LINKS, routes} from "./routes/routes";
import React from "react";
import LoginPage from "./pages/AuthPage/LoginPage/LoginPage";
import RegisterPage from "./pages/AuthPage/RegisterPage/RegisterPage";
import Auth from "./components/Auth/Auth";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import AccountPage from "./pages/AccountPage/AccountPage";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                {routes.map((route, i) => (
                    <Route key={i} {...route}/>))}
                <Route path="/auth" element={<Auth/>}>
                    <Route index element={<Navigate replace to={LINKS.Login}/>}/>
                    <Route path={LINKS.Login} element={<LoginPage/>}/>
                    <Route path={LINKS.Register} element={<RegisterPage/>}/>
                </Route>
                <Route path="/" element={<RequireAuth/>}>
                    <Route path={LINKS.Account} element={<AccountPage/>}/>
                </Route>
            </Route>
        </Routes>
    );
}

export default App;
