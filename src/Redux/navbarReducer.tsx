import React from "react";
import {v1} from "uuid";
import {ActionType} from "./Store";


export type AppNavbarPropsType = {
    id: string,
    title: string,
    link: string
}

let initialState = [
    {id: v1(), title: "Profile", link: "/profile"},
    {id: v1(), title: "Messages", link: "/dialogs"},
    {id: v1(), title: "News", link: "/news"},
    {id: v1(), title: "Music", link: "/music"},
    {id: v1(), title: "Settings", link: "/settings"}
]

export const navbarReducer = (state: Array<AppNavbarPropsType> = initialState, action: ActionType): Array<AppNavbarPropsType> => {
    return state;
}