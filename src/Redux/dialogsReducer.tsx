import React from "react";
import {ActionType, dialogPageType} from "./Store";
import {v1} from "uuid";

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
            if (action.newTitle != null) {
                state.newDialog = action.newTitle;
            }
            return state
        case 'ADD-MESSAGE':
            debugger
            let body = state.newDialog;
            state.dialogMessage.push(body);
            state.newDialog = '';

            return state;
        default:
            return state;
    }
}