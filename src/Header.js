import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import {NavItem, NavLink } from 'reactstrap';
import {TOKEN_KEY} from "./auth/AuthPage";

class Header extends Component {
    constructor(props) {
        super(props);
    }

    logout = (e) => {
        e.preventDefault();
        localStorage.removeItem(TOKEN_KEY);
        this.props.history.push('/');
    };

    render() {
        let hasToken = !!localStorage.getItem(TOKEN_KEY);
        return (
            <header className="header switched-header">
                <div className="header-section">
                    <div className="container-fluid ">
                        <nav className="navbar navbar-expand-lg header-navbar ">
                            <a className=" navbar-brand navbar-logo" href="/">
                                <img className="mb-0 logo-light" src="assets/svg/logo-light.svg" alt=""/>
                                <img className="mb-0 logo-dark" src="assets/svg/logo-dark.svg" alt=""/>
                            </a>
                            <button className="navbar-toggler btn-navbar-toggler" type="button"
                                    data-toggle="collapse"
                                    data-target=".nav-menu" aria-expanded="true" aria-label="Toggle navigation">
                                <span className="fa fa-bars"></span>
                            </button>
                            <div
                                className="nav-menu collapse navbar-collapse navbar-collapse justify-content-end py-0 ">
                                <ul className="navbar-nav  header-navbar-nav ">
                                    <NavItem><NavLink href={'/'}>Home</NavLink></NavItem>
                                    {hasToken ? (
                                        <>
                                            <NavItem><NavLink href={'/profile'} className={"nav-link"}>Profile</NavLink></NavItem>
                                            <NavItem><NavLink href={'/builder/edit'}
                                                              className={"nav-link"}>Landing Edit </NavLink></NavItem>
                                            <NavItem><NavLink href={'/builder/preview'}
                                                                  className={"nav-link"}>Landing Preview</NavLink></NavItem>
                                             <NavItem><a onClick={this.logout} className={"nav-link"}>Logout</a></NavItem>
                                        </>
                                    ) : (
                                        <NavLink href={'/login'}>Login</NavLink>
                                    )}
                                    <li className="ml-lg-auto">
                                        <a className=" nav-link nav-divider" href="index.html#reservation">
                                            <img src="assets/svg/ring-bell-light.svg" alt=""
                                                 className="max-width-xsm bell-light"/>
                                            <img src="assets/svg/ring-bell-dark.svg" alt=""
                                                 className="max-width-xsm bell-dark"/>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="nav-link pr-0" href="/">
                                            <img src="assets/svg/phone.svg" alt=""
                                                 className="max-width-xsm logo-dark"/>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="nav-link pr-0" href="/">
                                            343-434-3434
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
        );
    }
}

export default withRouter(Header);
