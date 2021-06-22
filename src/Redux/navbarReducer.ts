import {v1} from "uuid";


export type AppNavbarPropsType = {
    id: string,
    title: string,
    link: string
}
export type AppNavbarActionType = SetNavbarUserDataType


let initialState = {
    id: 16115,
    list: [
        {id: v1(), title: "Profile", link: `/profile/16115`},
        {id: v1(), title: "Messages", link: "/dialogs"},
        {id: v1(), title: "Users", link: "/users"},
        {id: v1(), title: "News", link: "/news"},
        {id: v1(), title: "Music", link: "/music"},
        {id: v1(), title: "Settings", link: "/settings"},
    ]

}
type ListType = Array<AppNavbarPropsType>

type initialStateType = {
    list: ListType,
    id: number
}

export const navbarReducer = (state: initialStateType = initialState, action: AppNavbarActionType): initialStateType => {

    return state;
}


type SetNavbarUserDataType = {
    type: 'SET-NAVBAR-USER-DATA',
    payload: payloadType,
}
type payloadType = {
    userId: number,
    email: string | null,
    login: string | null,
    isAuth: boolean,
}