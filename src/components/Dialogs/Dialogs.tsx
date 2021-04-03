import React from 'react';
import dialogs from './Dialogs.module.css';
import {Dialog} from "./Dialog/Dialog";
import {Contacts} from './Contacts/Contacts';
import { dialogPageType} from "../../Redux/Store";

type DialogsPropsType = {
        title: dialogPageType
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