import {v1} from "uuid";
import {Dispatch} from "redux";
import {AppActionType, AppThunkType} from "./ReduxStore";
import {profileAPI, ResultCodesEnum} from "../api/api";


export type PostMessagesPropsType = {
    id: string,
    avatar: string,
    nicName: string,
    message: string,
    count: number
}
type AddPostType = {
    type: 'ADD-POST'
}
type UpdateNewPostTextType = {
    type: 'UPDATE-NEW-POST-TEXT',
    newText: string | undefined
}
type addLikePostType = {
    type: 'ADD-LIKE-POST',
    count: number,
    id: string
}
type setUserProfileType = {
    type: 'SET-USER-PROFILE',
    profile: any
}
type SetStatusType = ReturnType<typeof setStatus>

export type AllProfileReducerActionType =
    | AddPostType
    | UpdateNewPostTextType
    | addLikePostType
    | setUserProfileType
    | SetStatusType

export type ProfileType = {
    contacts: ContactsType,
    fullName:  string | null,
    lookingForAJob:  boolean | null,
    lookingForAJobDescription:  string | null,
    photos: PhotosType,
    userId: number
}
type ContactsType = {
    facebook:  string | null,
    website: string | null,
    vk:  string | null,
    twitter: string | null,
    instagram: string | null,
    mainLink: string | null
}
type PhotosType={
    small:  string | undefined,
    large:  string | undefined,
}
let initialState = {
    PostMessages: [
        {
            id: v1(),
            avatar: "https://cdn1.iconfinder.com/data/icons/diversity-avatars-volume-01-circles/64/matrix-trinity-512.png",
            nicName: "Trinitttttti",
            message: "How are yuo",
            count: 42
        },
        {
            id: v1(),
            avatar: "https://icons.iconarchive.com/icons/mattahan/ultrabuuf/256/TV-Smith-icon.png",
            nicName: "Mr.Smith",
            message: "I am kill yor",
            count: 422
        },
        {
            id: v1(),
            avatar: "https://icons.iconarchive.com/icons/mattahan/ultrabuuf/256/TV-Smith-icon.png",
            nicName: "Mrrrrr.Smith",
            message: "I am kill yor",
            count: 422
        },
        {
            id: v1(),
            avatar: "https://icons.iconarchive.com/icons/mattahan/ultrabuuf/256/TV-Smith-icon.png",
            nicName: "Mr.Smith",
            message: "I am kill yor",
            count: 422
        },
    ] as Array<PostMessagesPropsType>,
    newPostText: '',
    profile: null as ProfileType | null,
    status: '' as string
}

export type initialStateType = typeof initialState

export const profileReducer = (state: initialStateType = initialState, action: AllProfileReducerActionType): initialStateType => {
    let stateCopy = {...state}
    switch (action.type) {
        case  'UPDATE-NEW-POST-TEXT' :
            if (action.newText != null) {
                stateCopy.newPostText = action.newText;
            }
            return stateCopy;

        case "ADD-LIKE-POST" :
            stateCopy.PostMessages = [...state.PostMessages]
            stateCopy.PostMessages = state.PostMessages.map((tl: PostMessagesPropsType) => tl.id === action.id ? {
                ...tl,
                count: ++action.count
            } : tl)
            return stateCopy

        case 'ADD-POST' :
            let newPost = {
                id: v1(),
                avatar: "https://cdn2.iconfinder.com/data/icons/coding-7/100/coding-matrix-coding-developer-the-matrix-hacker-neo-program-low-level-code-512.png",
                nicName: "unnamed",
                message: stateCopy.newPostText,
                count: 0,
            };
            stateCopy.PostMessages = [...state.PostMessages]
            stateCopy.PostMessages.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;

        case 'SET-USER-PROFILE' :
            return {...state, profile: action.profile}

        case "SET-STATUS":
            return {...state, status: action.status}


        default:
            return stateCopy;
    }

}
export let addPost = (): AddPostType => ({type: 'ADD-POST'})
export let updateNewPostText = (text: string | undefined): UpdateNewPostTextType => ({
    type: 'UPDATE-NEW-POST-TEXT',
    newText: text
})
export let addLikePost = (id: string, count: number): addLikePostType => ({
    type: 'ADD-LIKE-POST',
    count: count,
    id: id
})
export const setUserProfile = (profile: ProfileType): setUserProfileType => ({
    type: 'SET-USER-PROFILE', profile
})
export const setStatus = (status: string ) => ({
    type: 'SET-STATUS', status
} as const)


export const setUserProfileTC = (userId:  number ): AppThunkType => {
    return (dispatch: Dispatch<AppActionType>) => {
        profileAPI.getProfileApi(userId)
            .then(response => {
                dispatch(setUserProfile(response.data))
            })
    }
}

export const getStatusTC = (userId: string): AppThunkType => {
    return (dispatch: Dispatch<AppActionType>) => {
        profileAPI.getStatus(userId)
            .then(res => {
                dispatch(setStatus(res.data))
            })
    }
}

export const updateStatusTC = (status: string): AppThunkType => {
    return (dispatch: Dispatch<AppActionType>) => {
        profileAPI.updateStatus(status)
            .then(res => {
                if (res.data.resultCode === ResultCodesEnum.Success) {
                    dispatch(setStatus(status))
                }
            })
    }
}