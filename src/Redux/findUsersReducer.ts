//export type findUsersPageType = {}

import {Dispatch} from "redux";
import {usersAPI} from "../api/api";
import {AppActionType, AppThunkType} from "./ReduxStore";

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
        followingInProgress: boolean
    }

type followType = ReturnType<typeof follow>
type unFollowType = ReturnType<typeof unfollow>
type setUsersType = ReturnType<typeof setUsers>
type setCurrentPageType = ReturnType<typeof setCurrentPage>
type setTotalUserCountType = ReturnType<typeof setTotalUserCount>
type setIsFetchingType = ReturnType<typeof setIsFetching>
type setIsFollowingProgressType = ReturnType<typeof setIsFollowingProgress>

export type AllFindUsersActionCreatorType =
    | followType
    | unFollowType
    | setUsersType
    | setCurrentPageType
    | setTotalUserCountType
    | setIsFetchingType
    | setIsFollowingProgressType


let initialState = {
    users: [],
    pageSize: 10,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: false
}

export const findUsersReducer = (state: InitialStateType = initialState, action: AllFindUsersActionCreatorType): InitialStateType => {

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

        case 'TOGGLE-IS-FETCHING': {
            return {...state, isFetching: action.isFetching}
        }

        case "TOGGLE-IS-FOLLOWING-PROGRESS": {
            return {...state, followingInProgress: action.followingInProgress}
        }
        default:
            return state
    }
}
export const follow = (userId: string) => ({type: 'FOLLOW', userId} as const)
export const unfollow = (userId: string) => ({type: 'UNFOLLOW', userId} as const)
export const setUsers = (users: Array<UserType>) => ({type: 'SET-USERS', users} as const)
export const setCurrentPage = (currentPage: number) => ({type: 'SET-CURRENT-PAGE', currentPage} as const)
export const setTotalUserCount = (totalUserCount: number) => ({
    type: 'SET-TOTAL-USER-COUNT',
    count: totalUserCount
} as const)
export const setIsFetching = (isFetching: boolean) => ({type: 'TOGGLE-IS-FETCHING', isFetching} as const)
export const setIsFollowingProgress = (followingInProgress: boolean) => ({
    type: 'TOGGLE-IS-FOLLOWING-PROGRESS',
    followingInProgress
} as const)

export const getUsersTC = (currentPage: number, pageSize: number): AppThunkType => {
    return (dispatch: Dispatch<AppActionType>) => {
        dispatch(setIsFetching(true))
        usersAPI.getUsers(currentPage, pageSize)
            .then(response => {
                dispatch(setIsFetching(false))
                dispatch(setUsers(response.items))
                dispatch(setTotalUserCount(response.totalCount))
            })
    }
}

export const followTC = (userId: string): AppThunkType => {
    return (dispatch: Dispatch<AppActionType>) => {
        dispatch(setIsFollowingProgress(true))
        usersAPI.followApi(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(follow(userId))
                }
                dispatch(setIsFollowingProgress(false))
            })
    }
}

export const unFollowTC = (userId: string): AppThunkType => {
    return (dispatch: Dispatch<AppActionType>) => {
        dispatch(setIsFollowingProgress(true))
        usersAPI.unFollowApi(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(unfollow(userId))
                }
                dispatch(setIsFollowingProgress(false))
            })
    }
}