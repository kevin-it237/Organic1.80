import React, {Fragment} from 'react';
import { NavLink } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import {Notification} from '../ReactNotification/ReactNotification'
import './Header.scss';

export const Header = () => {

    return(
        <Fragment>
            <Notification />
            <div className="container-fluid header-1">
                <nav className="navbar navbar-expand-lg py-0">
                    <div className="navbar-collapse">
                        <NavLink className="nav-item nav-link logo" to="/dashboard"></NavLink>
                        <ul className="navbar-nav ml-auto mt-2 mt-lg-0 flex-row justify-content-md-center">
                            <li className="nav-item active">
                                <NavLink className="nav-item nav-link" to="/dashboard">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-item nav-link" to="/about">About Us</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-item nav-link" to="/contact">Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            <div className="container-fluid header-2">
                <nav className="navbar navbar-expand-lg navbar-dark py-4">
                    <div className="collapse navbar-collapse d-sm-flex flex-row">
                        <NavLink className="nav-item nav-link logo" to="/dashboard">ORGANIC 1.80</NavLink>
                        <form className="ml-auto my-2 my-lg-0 d-flex flex-row justify-content-center align-items-center">
                            <input className="form-control mr-sm-2" type="text" placeholder="Search Lead" aria-label="Search" />
                            <a href="#search"><FaSearch /></a>
                        </form>
                        <ul className="navbar-nav ml-auto mt-2 mt-lg-0 d-sm-flex flex-row">
                            <li className="nav-item">
                                <NavLink className="nav-item nav-link" to="/login">Login</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-item nav-link" to="/signup">Sign Up</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>

        </Fragment>
    )
}