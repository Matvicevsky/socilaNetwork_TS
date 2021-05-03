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
    {id: v1(), title: "Settings", link: "/settings"},
    {id: v1(), title: "Find Users", link: "/users"}
] as Array<AppNavbarPropsType>
type initialStateType = typeof initialState

export const navbarReducer = (state: initialStateType = initialState, action: ActionType): initialStateType => {
    return state;
}