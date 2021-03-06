import React from 'react';
import {connect} from "react-redux";
import {Navbar} from "./Navbar";
import {AppReduxStateType} from "../../Redux/ReduxStore";
import {AppNavbarPropsType} from "../../Redux/navbarReducer";


export type mapStateNavbarPropsType = {
    title: Array<AppNavbarPropsType>
}

export type onPropsType = mapStateNavbarPropsType


let mapStateToNavbar = (state: AppReduxStateType): mapStateNavbarPropsType => {
    return {
        title: state.navbar.list
    }
}


export const NavbarContainer = connect(mapStateToNavbar)(Navbar)

