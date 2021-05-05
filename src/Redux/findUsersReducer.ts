//export type findUsersPageType = {}

export type UserLocationType = {
    city: string,
    country: string,
}

export type UserType = {
    id: string,
    avatar: string,
    followed: boolean,
    fullName: string,
    status: string,
    location: UserLocationType
}

export type InitialStateType = {
    users: Array<UserType>,
}

type followACType = {
    type: 'FOLLOW',
    userId: string
}

type unFollowACType = {
    type: 'UNFOLLOW',
    userId: string
}

type setUsersACType = {
    type: 'SET-USERS',
    users: Array<UserType>,
}

type AllActionCreatorType = followACType | unFollowACType | setUsersACType;


let initialState: InitialStateType = {
    users: [],
}

export const findUsersReducer = (state: InitialStateType = initialState, action: AllActionCreatorType): InitialStateType => {

    switch (action.type) {
        case 'FOLLOW' :
            return {
                ...state,
                users: state.users.map((u: any) => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }

        case 'UNFOLLOW' :
            return {
                ...state,
                users: state.users.map((u: any) => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }

        case 'SET-USERS':
            return {...state, users: [...state.users, ...action.users]}

        default:
            return state
    }
}
export const followAC = (userId: string) => ({type: 'FOLLOW', userId})
export const unFollowAC = (userId: string) => ({type: 'UNFOLLOW', userId})
export const setUsersAC = (users: Array<UserType>) => ({type: 'SET-USERS', users})