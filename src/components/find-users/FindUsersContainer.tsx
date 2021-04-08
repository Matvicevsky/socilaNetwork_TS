import React from "react";
import {connect} from "react-redux";
import {FindUsers} from "./FindUsers";
import {Dispatch} from "redux";
import {followAC, setUsersAC, unFollowAC} from "../../Redux/findUsersReducer";


let mapStateToProps = (state: any) => {
    return {
        users: state.usersPage.users
    }
}
let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        follow: (userId: string) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId: string) => {
            dispatch(unFollowAC(userId));
        },
        setUsers: (users: any) => {
            dispatch(setUsersAC(users));
        }
    }
}

export const FindUsersContainer = connect(mapStateToProps, mapDispatchToProps)(FindUsers)