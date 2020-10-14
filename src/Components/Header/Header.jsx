import React, { useState, useEffect } from "react";
import "./Header.scss";
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
    MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon,
} from "mdbreact";
// Componants
import Login from "../../Pages/Login/Login";
// Redux
import { useDispatch, useSelector, } from "react-redux";
import { Link, Redirect, useHistory, useParams } from "react-router-dom";
import { loginUserData } from "./../../Store/action/action";
// Web API
import { getAllPostList } from './../../Services/WebAPI';
import RoundLoader from './../Loaders/RoundLoader/RoundLoader';

function Header(props) {
    const allPostData = useSelector(state => state.postReducer);
    const loginUser = useSelector(state => state.loginReducer.data);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllPostList())
    }, []);


  
    const onLogoutHandle = () => {
        dispatch(loginUserData(null))
    }

    return (
        <div id="Header">
            {!loginUser&& <Redirect to="/"/> }
            <MDBNavbar color="indigo" dark expand="md">
                <MDBNavbarBrand>
                    <img src="https://courses.cs.washington.edu/courses/cse143/20wi/images/messageBoard.png" className="logo-style"></img>
                        message board
                    </MDBNavbarBrand>
                <MDBNavbarToggler />
                {loginUser &&
                <MDBCollapse id="navbarCollapse3" navbar>
                    <MDBNavbarNav left>
                        <MDBNavItem className="search-nav-item">
                            <input class="form-control" type="search" placeholder="Search" aria-label="Search" />
                        </MDBNavItem>
                    </MDBNavbarNav>
                    <MDBNavbarNav right>
                            <MDBNavItem className="login-user">
                                <img src="https://qwcodes.com/try2.tk/eliteadmin/plugins/images/users/4.jpg"></img>
                                {loginUser.name}
                            </MDBNavItem>
                            <MDBNavItem>
                                <button class="btn btn-sm align-middle btn-outline-white" type="button" onClick={() => onLogoutHandle()}>Logout</button>
                            </MDBNavItem>
                    </MDBNavbarNav>
                </MDBCollapse>
                 }
            </MDBNavbar>
        </div>
    )
}
export default Header
