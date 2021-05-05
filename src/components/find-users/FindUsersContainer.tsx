import React from "react";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {followAC, InitialStateType, setUsersAC, unFollowAC, UserType} from "../../Redux/findUsersReducer";
import {AppReduxStateType} from "../../Redux/ReduxStore";
import {FindUsersClass} from "./FindUsersClass";

type MapStatePropsType = {
    users: InitialStateType
}
type MapDispatchToPropsType = {
    follow: (userId: string) => void,
    unfollow: (userId: string) => void,
    setUsers: (users: Array<UserType>) => void
}
export type FindUsersPropsType = MapStatePropsType & MapDispatchToPropsType

let mapStateToProps = (state: AppReduxStateType): MapStatePropsType => {
    return {
        users: state.usersPage
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        follow: (userId: string) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId: string) => {
            dispatch(unFollowAC(userId));
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users));
        }
    }
}

export const FindUsersContainer = connect(mapStateToProps, mapDispatchToProps)(FindUsersClass)