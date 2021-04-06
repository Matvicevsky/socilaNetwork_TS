import React from 'react';
import { newMessageActionCreator, onMessageChangeActionCreator} from "../../../Redux/Store";
import {Dialog} from "./Dialog";
import {connect} from "react-redux";
import {AppReduxStateType} from "../../../Redux/ReduxStore";



let mapStateToProps = (state: AppReduxStateType) => {
    return {
        title: state.dialogPage.dialogMessage,
        value: state.dialogPage.newDialog
    }
}
let mapDispatchToProps = (dispatch: any) => {
    return {
        newMessage: () => {
            dispatch(newMessageActionCreator())
        },
        onMessageChange: (text: string | undefined) => {
            let action = onMessageChangeActionCreator(text)
           dispatch(action);
        },
    }
}


export const DialogContainer = connect(mapStateToProps, mapDispatchToProps)(Dialog);