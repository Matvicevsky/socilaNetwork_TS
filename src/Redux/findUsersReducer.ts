import {v1} from "uuid";

export type findUsersPageType = {}


let initialState = {
    users: [

    ]
}


export const findUsersReducer = (state: any = initialState, action: any): any => {

    switch (action.type) {
        case 'FOLLOW' :
            return  {...state,
                users: state.users.map((u: any) => {
                    if(u.id === action.userId){
                        return {...u, followed: true}
                    }
                    return u;
                })
            }

        case 'UNFOLLOW' :
            return  {...state,
                users: state.users.map((u: any) => {
                    if(u.id === action.userId){
                        return {...u, followed: false}
                    }
                    return u;
                })
            }

        case 'SET-USERS':
            return {...state, users: [ ...state.users, ...action.users]}

        default:
            return state
    }
}
export const followAC = (userId: string) => ({type: 'FOLLOW', userId})
export const unFollowAC = (userId: string) => ({type: 'UNFOLLOW', userId})
export const setUsersAC = (users: any) => ({type: 'SET-USERS', users})