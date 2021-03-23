import React  from 'react';
import dialog from './Dialog.module.css';

type DialogPropsType = {
    title: Array<DialogItemPropsType>,
}
type DialogItemPropsType = {
    id: string,
    avatar: string,
    title: string,
    nicName: string,
    link: string

}
type textNewMessageType = any

export function Dialog(props: DialogPropsType) {

    let textNewMessage: textNewMessageType = React.createRef();
    let newMessage = () => {
        let text = textNewMessage.current.value;
        alert(text)
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

                    <div>
                        <textarea ref={textNewMessage}/>
                        <button onClick={newMessage}>add message</button>
                    </div>
                </div>
            </div>
        </div>
    );

}