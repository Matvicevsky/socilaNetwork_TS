

type dataType = {
    userId: any,
    email: any,
    login: any,
}

type setUserDataACType = {
    type: 'SET-USER-DATA',
    data: dataType
}

type authReducerActionType =
    setUserDataACType


export let initialState = {
    userId: null,
    email: null,
    login: null,
    isFetching: false
}
export type initialStateType = typeof initialState

export const authReducer = (state: initialStateType = initialState, action: authReducerActionType): initialStateType => {

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