import React from "react";
import {v1} from "uuid";
import {ActionType, profilePageType} from "./Store";


export const profileReducer = (state: profilePageType, action: ActionType): profilePageType => {
    switch (action.type) {
        case  'UPDATE-NEW-POST-TEXT' :
            if (action.newText != null) {
                state.newPostText = action.newText;
            }
            return state;
        case 'ADD-POST' :
            debugger
            let newPost = {
                id: v1(),
                avatar: "https://cdn2.iconfinder.com/data/icons/coding-7/100/coding-matrix-coding-developer-the-matrix-hacker-neo-program-low-level-code-512.png",
                nicName: "unnamed",
                message: state.newPostText,
                count: 0,
            };
            state.PostMessages.push(newPost);
            state.newPostText = '';
            return state
        default:
            return state;
    }

}