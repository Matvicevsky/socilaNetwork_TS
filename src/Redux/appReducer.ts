import {AppThunkType} from "./ReduxStore";
import {setUserDataTC} from "./authReducer";


type setInitializedACType = {
    type: 'SET-INITIALIZED',
    initialized: boolean,
}

export type AllAppReducerActionType =
    setInitializedACType


export let initialState = {
    initialized: false
}
export type initialStateType = typeof initialState

export const appReducer = (state: initialStateType = initialState, action: AllAppReducerActionType): initialStateType => {

    switch (action.type) {

        case  'SET-INITIALIZED' :
            return {
                ...state,
                initialized: action.initialized,
            }

        default:
            return {...state};
    }

}

export const setInitialized = ( initialized: boolean ): setInitializedACType => ({
    type: 'SET-INITIALIZED',
    initialized
})


export const initializeAppTC = (): AppThunkType =>  {
    return (dispatch) => {
        let promise = dispatch(setUserDataTC());
        promise.then( () => {
            dispatch(setInitialized(true))
        })
    }
}
