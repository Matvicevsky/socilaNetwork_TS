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

export type InitialStateType =
    {
        users: Array<UserType>,
        pageSize: number,
        totalUserCount: number,
        currentPage: number,
        isFetching: boolean
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
type setCurrentPageACType = {
    type: 'SET-CURRENT-PAGE',
    currentPage: number
}
type setTotalUserCountACType = {
    type: 'SET-TOTAL-USER-COUNT',
    count: number
}
type setIsFetchingAC={
    type: 'TOOGGLE-IS-FETCHING',
    isFetching: boolean
}

type AllActionCreatorType =
    followACType
    | unFollowACType
    | setUsersACType
    | setCurrentPageACType
    | setTotalUserCountACType
    | setIsFetchingAC;


let initialState = {
    users: [],
    pageSize: 10,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: false
}

export const findUsersReducer = (state: InitialStateType = initialState, action: AllActionCreatorType): InitialStateType => {

    switch (action.type) {
        case 'FOLLOW' :
            return {
                ...state,
                users: state.users.map((u: UserType) => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }

        case 'UNFOLLOW' :
            return {
                ...state,
                users: state.users.map((u: UserType) => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }

        case 'SET-USERS': {
            return {...state, users: action.users}
        }

        case 'SET-CURRENT-PAGE': {
            return {...state, currentPage: action.currentPage}
        }

        case 'SET-TOTAL-USER-COUNT': {
            return {...state, totalUserCount: action.count}
        }

        case 'TOOGGLE-IS-FETCHING': {
            return {...state, isFetching: action.isFetching}
        }

        default:
            return state
    }
}
export const follow = (userId: string) => ({type: 'FOLLOW', userId})
export const unfollow = (userId: string) => ({type: 'UNFOLLOW', userId})
export const setUsers = (users: Array<UserType>) => ({type: 'SET-USERS', users})
export const setCurrentPage = (currentPage: number) => ({type: 'SET-CURRENT-PAGE', currentPage})
export const setTotalUserCount = (totalUserCount: number) => ({type: 'SET-TOTAL-USER-COUNT', count: totalUserCount})
export const setIsFetching = (isFetching: boolean) => ({type: 'TOOGGLE-IS-FETCHING', isFetching})