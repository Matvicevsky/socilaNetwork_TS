import {Dispatch} from "redux";
import {AppActionType, AppThunkType} from "./ReduxStore";
import {usersAPI} from "../api/api";


type dataType = {
    userId: any,
    email: any,
    login: any,
}

type setUserDataACType = {
    type: 'SET-USER-DATA',
    data: dataType
}

export type AllAuthReducerActionType =
    setUserDataACType


export let initialState = {
    userId: null,
    email: null,
    login: null,
    isFetching: false
}
export type initialStateType = typeof initialState

export const authReducer = (state: initialStateType = initialState, action: AllAuthReducerActionType): initialStateType => {

    switch (action.type) {
        case  'SET-USER-DATA' :
            return {
                ...state,
                ...action.data,
                isFetching: true
            }

        default:
            return {...state};
    }

}

export const setUserData = (userId: number, email: string, login: string): setUserDataACType => ({
    type: 'SET-USER-DATA',
    data : {userId, email, login}
})

export const setUserDataTC = (): AppThunkType => {
    return (dispatch: Dispatch<AppActionType>) => {
        usersAPI.getLogin()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data;
                    dispatch(setUserData(id, email, login));
                }
            })
    }
}
