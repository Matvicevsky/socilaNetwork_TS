import React from 'react';
import {Redirect} from 'react-router-dom';
import dialog from './Dialog.module.css';
import {DialogFormik} from './DialogFormik';


type DialogPropsType = {
    title: Array<string>,
    value: string
    newMessage: () => void,
    onMessageChange: (text: string | undefined) => void,
    isAuth: boolean,
    Redirect: typeof Redirect
}
type textNewMessageType = any



export function Dialog(props: DialogPropsType) {

    let textNewMessage: textNewMessageType = React.createRef();
    let newMessage = () => {
       props.newMessage(  )
    }
    let onMessageChange = () => {
        let text = textNewMessage.current.value;
        props.onMessageChange(text);
    }
   // if (!props.isAuth) return <Redirect to={'/login'}/>
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
                        <DialogFormik {...props}/>
                    </div>
                </div>
            </div>
        </div>
    );

}