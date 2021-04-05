import React from 'react';
import {newMessageActionCreator, onMessageChangeActionCreator} from "../../../Redux/Store";
import {Dialog} from "./Dialog";


type DialogContainerPropsType = {
    store: any
}
type textNewMessageType = any


export function DialogContainer(props: DialogContainerPropsType) {
    debugger
    let textNewMessage: textNewMessageType = React.createRef();

    let newMessage = () => {
        props.store.dispatch(newMessageActionCreator())
    }
    let onMessageChange = (text: string | undefined) => {
        let action = onMessageChangeActionCreator(text)
        props.store.dispatch(action);
    }

    return (
        <Dialog title={props.store.getState().dialogPage.dialogMessage}
                value={props.store.getState().dialogPage.newDialog}
                newMessage={newMessage}
                onMessageChange={onMessageChange}/>
    );

}