import React from "react";
import {v1} from "uuid";
import {ActionType} from "./Store";


export type profilePageType = {
    PostMessages: any,
    newPostText: string,
}

export type PostMessagesPropsType = {
    id: string,
    avatar: string,
    nicName: string,
    message: string,
    count: number
}

let initialState: profilePageType = {
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
    ],
    newPostText: '',
}

export const profileReducer = (state: profilePageType = initialState, action: ActionType): profilePageType => {
    let copyState = {...state}
    switch (action.type) {
        case  'UPDATE-NEW-POST-TEXT' :
            if (action.newText != null) {
                copyState.newPostText = action.newText;
            }
            return copyState;

        case "ADD-LIKE-POST" :
            return {...state,
            PostMessages: state.PostMessages.map( (tl: PostMessagesPropsType) => tl.id  === action.id ? {...tl, count: ++action.count} : tl)}

        case 'ADD-POST' :
            let newPost = {
                id: v1(),
                avatar: "https://cdn2.iconfinder.com/data/icons/coding-7/100/coding-matrix-coding-developer-the-matrix-hacker-neo-program-low-level-code-512.png",
                nicName: "unnamed",
                message: copyState.newPostText,
                count: 0,
            };
            copyState.PostMessages = [...state.PostMessages]
            copyState.PostMessages.push(newPost);
            copyState.newPostText = '';
            return copyState;

        default:
            return state;
    }

}