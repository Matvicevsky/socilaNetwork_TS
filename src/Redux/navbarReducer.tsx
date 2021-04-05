import React from "react";
import {v1} from "uuid";

let initialState = [
    {id: v1(), title: "Profile", link: "/profile"},
    {id: v1(), title: "Messages", link: "/dialogs"},
    {id: v1(), title: "News", link: "/news"},
    {id: v1(), title: "Music", link: "/music"},
    {id: v1(), title: "Settings", link: "/settings"}
]

export const navbarReducer = (state: any = initialState, action: any) => {
    return state;
}