import React from 'react';
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import AuthPage from "./auth/AuthPage";
import Home from "./Home";
import ResetPassword from "./auth/ResetPassword";
import Register from "./auth/Register";
import ForgotPassword from "./auth/ForgotPassword";
import Header from "./Header";
import Footer from "./Footer";
import Login from "./auth/Login";
import Profile from "./Profile";
import Debug from "./Debug";
import Landing from "./landing/";
import {builderData} from "./landing/data"
import BuilderPage from "./builder/BuilderPage";
import Edit from "./builder/Edit";
export const REQUEST_ENDPOINT = 'http://localhost:8080/api/'


function App() {
    return (
        <Router>
            <Switch>
                <Route path={'/'} exact>
                    <Home/>
                </Route>
                <Route path={'/login'} exact>
                    <AuthPage content={<Login/>}/>
                </Route>
                <Route path={'/reset'} exact>
                    <AuthPage content={<ResetPassword/>}/>
                </Route>
                <Route path={'/register'} exact>
                    <AuthPage content={<Register/>}/>
                </Route>
                <Route path={'/forgot'} exact>
                    <AuthPage content={<ForgotPassword/>}/>
                </Route>
                <Route path={'/profile'} exact>
                    <Profile/>
                </Route>

                <Route path={"/builder/preview"} exact>
                    <Landing/>
                </Route>
                <Route path={"/builder/edit"} exact>
                    <Edit/>
                </Route>

                <Route path={"/:id(\\d+)"}>
                    <Landing/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
