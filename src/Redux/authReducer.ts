import {AppThunkType} from "./ReduxStore";
import {ResultCodeForCaptcha, ResultCodesEnum, usersAPI} from "../api/api";
import {Dispatch} from "redux";


type payloadType = {
    userId: number,
    email: string | null,
    login: string | null,
    isAuth: boolean,
}

type setUserDataACType = {
    type: 'SET-USER-DATA',
    payload: payloadType,

}

type SetCaptchaType = {
    type: 'SET-CAPTCHA',
    captcha: boolean
    url: string | undefined,
}

type SetMessagesType = {
    type: 'SET-MESSAGES'
    messages: string | null,
}

export type AllAuthReducerActionType =
    setUserDataACType
    | SetCaptchaType
    | SetMessagesType


export let initialState = {
    userId: 16115,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    captcha: false,
    url: undefined as string | undefined,
    messages: null as string | null,
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

export const setUserData = (userId: number, email: string | null, login: string | null, isAuth: boolean): setUserDataACType => ({
    type: 'SET-USER-DATA',
    payload: {userId, email, login, isAuth},
})

export const setCaptcha = (captcha: boolean, url: string | undefined): SetCaptchaType => ({
    type: 'SET-CAPTCHA',
    captcha,
    url,

})
export const setMessages = (messages: string): SetMessagesType => ({
    type: 'SET-MESSAGES',
    messages
})

export const setUserIdTC = (): any => {
    return (dispatch: Dispatch) => {
        usersAPI.getLogin()
            .then(res => res.data.data.id)
    }

}

export const setUserDataTC = (): any => {
    return (dispatch: Dispatch) => {
        return usersAPI.getLogin()
            .then(response => {
                if (response.data.resultCode === ResultCodesEnum.Success) {
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
                if (res.data.resultCode === ResultCodeForCaptcha.Success) {
                    dispatch(setUserDataTC())
                } else if (res.data.resultCode === ResultCodeForCaptcha.CaptchaIsRequired) {
                    dispatch(captchaTC())
                } else if (res.data.resultCode === ResultCodeForCaptcha.Error) {
                    dispatch(setMessages(res.data.messages[0]))
                }
            })
    }
}

export const logOutTC = (): AppThunkType => {
    return (dispatch) => {
        usersAPI.logOut()
            .then(res => {
                if (res.data.resultCode === ResultCodesEnum.Success) {
                    dispatch(setUserData(16115, null, null, false));
                }
            })
    }
}