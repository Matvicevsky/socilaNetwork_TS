import React from "react";
import {ActionType} from "./Store";
import {v1} from "uuid";

export type dialogPageType = {
    contactsMessage: Array<AppContactsMessagePropsType>,
    dialogMessage: Array<string>,
    newDialog: string,
}

export type AppContactsMessagePropsType = {
    id: string,
    avatar: string,
    title: string,
    nicName: string,
    link: string
}


let initialState = {
    contactsMessage: [
        {
            id: v1(),
            nicName: "Neo",
            avatar: "https://cdn1.iconfinder.com/data/icons/diversity-avatars-volume-01-circles/64/matrix-neo-man-white-512.png",
            link: "/dialogs/neo",
            title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto ea eligendi facere id"
        },
        {
            id: v1(),
            nicName: "Morphius",
            avatar: "https://cdn1.iconfinder.com/data/icons/diversity-avatars-volume-01-circles/64/matrix-morpheus-512.png",
            link: "/dialogs/morphius",
            title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto ea eligendi facere id"
        },
        {
            id: v1(),
            nicName: "Triniti",
            avatar: "https://cdn1.iconfinder.com/data/icons/diversity-avatars-volume-01-circles/64/matrix-trinity-512.png",
            link: "/dialogs/triniti",
            title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto ea eligendi facere id"
        },
        {
            id: v1(),
            nicName: "Mr.Smith",
            avatar: "https://icons.iconarchive.com/icons/mattahan/ultrabuuf/256/TV-Smith-icon.png",
            link: "/dialogs/mr.smith",
            title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto ea eligendi facere id"
        }
    ],
    dialogMessage: ['navbarReducer.tsx', 'How are you'],
    newDialog: '',
}

export const dialogsReducer = (state: dialogPageType = initialState, action: ActionType): dialogPageType => {
    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE-TEXT' :
            let copyState = {...state}
            if (action.newTitle != null) {
                copyState.newDialog = action.newTitle;
            }
            return copyState
        case 'ADD-MESSAGE':
            let newState = {...state}
            let body = state.newDialog;
            newState.dialogMessage = [...state.dialogMessage]
            newState.dialogMessage.push(body);
            newState.newDialog = '';

            return newState;
        default:
            return state;
    }
}