import React from "react";
import {ActionType, dialogPageType} from "./Store";

export const dialogsReducer = (state: dialogPageType, action: ActionType): dialogPageType => {
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