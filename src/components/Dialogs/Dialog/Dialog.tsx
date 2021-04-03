import React from 'react';
import dialog from './Dialog.module.css';
import {newMessageActionCreator, onMessageChangeActionCreator} from "../../../Redux/Store";


type DialogPropsType = {
    title: Array<string>,
    value: string
    dispatch: any
}
type textNewMessageType = any



export function Dialog(props: DialogPropsType) {

    let textNewMessage: textNewMessageType = React.createRef();
    let newMessage = () => {
       props.dispatch( newMessageActionCreator() )
    }
    let onMessageChange = () => {
        let text = textNewMessage.current.value;
        props.dispatch( onMessageChangeActionCreator(text) );
    }

    return (

        <div className={dialog.content}>
            <img className={dialog.avatar}
                 src={"https://cdn1.iconfinder.com/data/icons/diversity-avatars-volume-01-circles/64/matrix-neo-man-white-512.png"}
                 alt={"avatar"}/>
            <div className={dialog.message}>
                <div className={dialog.nik}>
                    unnamed
                </div>
                <div className={dialog.title}>
                    {
                        props.title.map(t => <div className={dialog.dialog}>{t}</div>)
                    }
                    <div>
                        <textarea ref={textNewMessage}
                                  placeholder={'Enter you message'}
                                  onChange={onMessageChange}
                                  value={props.value}/>
                        <button onClick={newMessage}>
                            add message
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );

}