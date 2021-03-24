import React from 'react';
import dialogs from './Dialogs.module.css';
import {Dialog} from "./Dialog/Dialog";
import {Contacts} from './Contacts/Contacts';
import {PostMessagesPropsType} from "../../App";
import {AppContactsMessagePropsType, AppNavbarPropsType, store} from "../../Redux/State";

type DialogsPropsType = {
        title: {
            navbar: Array<AppNavbarPropsType>,
            contactsMessage: Array<AppContactsMessagePropsType>,
            PostMessages: Array<PostMessagesPropsType>,
            newPostText: string | undefined
            dialogMessage: Array<string>
            newDialog: string
        }
        dispatch: any

}


export function Dialogs(props: DialogsPropsType) {



    return (
            <div className={dialogs.content}>
                <Contacts title={props.title.contactsMessage}/>
                <Dialog title={props.title.dialogMessage}
                        value={props.title.newDialog}
                        dispatch={props.dispatch}/>

            </div>
    );

}