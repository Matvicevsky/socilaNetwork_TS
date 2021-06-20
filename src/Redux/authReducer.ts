import {AppThunkType} from "./ReduxStore";
import {usersAPI} from "../api/api";
import {Dispatch} from "redux";


type payloadType = {
    userId: any,
    email: any,
    login: any,
    isAuth: any,
}

type setUserDataACType = {
    type: 'SET-USER-DATA',
    payload: payloadType,

}
type SetCaptchaType = {
    type: 'SET-CAPTCHA',
    captcha: boolean
    url: string
}

type SetMessagesType = {
    type: 'SET-MESSAGES'
    messages: string
}

export type AllAuthReducerActionType =
    setUserDataACType
    | SetCaptchaType
    | SetMessagesType


export let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captcha: false,
    url: '',
    messages: ''
}
export type initialStateType = typeof initialState

export const authReducer = (state: initialStateType = initialState, action: AllAuthReducerActionType): initialStateType => {

    switch (action.type) {
        case  'SET-USER-DATA' :
            return {
                ...state,
                ...action.payload,
            }
        case "SET-MESSAGES":
            return {
                ...state,
                messages: action.messages
            }
        case "SET-CAPTCHA":
            return {
                ...state,
                captcha: action.captcha,
                url: action.url,
            }

        default:
            return {...state};
    }

}

export const setUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean  ): setUserDataACType => ({
    type: 'SET-USER-DATA',
    payload: {userId, email, login: login, isAuth},
})

export const setCaptcha = (captcha: boolean, url: string): SetCaptchaType => ({
    type: 'SET-CAPTCHA',
    captcha,
    url,

})
export const setMessages = (messages: string): SetMessagesType => ({
    type: 'SET-MESSAGES',
    messages
})
export const setUserDataTC = (): AppThunkType => {
    return (dispatch: Dispatch) => {
        usersAPI.getLogin()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data;
                    dispatch(setUserData(id, email, login, true));
                }
            })
    }
}
export const captchaTC = (): AppThunkType => {
    return (dispatch: Dispatch) => {
        usersAPI.getCaptcha()
            .then(res => {
                    dispatch(setCaptcha(true, res.data.url))
            })
    }
}

export const loginTC = (email: string, password: string, rememberMe: boolean, captcha?: string): AppThunkType => {
    return (dispatch) => {
        usersAPI.login(email, password, rememberMe, captcha)
            .then(res => {
                if (res.data.resultCode === 0) {
                    dispatch(setUserDataTC())
                }else if (res.data.resultCode === 10) {
                    dispatch(captchaTC())
                } else if (res.data.resultCode === 1) {
                    dispatch(setMessages(res.data.messages))
                }
            })
    }
}

export const logOutTC = (): AppThunkType => {
    return (dispatch) => {
        usersAPI.logOut()
            .then(res => {
                if (res.data.resultCode === 0) {
                    dispatch(setUserData(null, null, null, false));
                }
            })
    }
}