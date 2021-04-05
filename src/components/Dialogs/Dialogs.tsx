import React from 'react';
import dialogs from './Dialogs.module.css';
import {Contacts} from './Contacts/Contacts';
import { dialogPageType} from "../../Redux/Store";
import {DialogContainer} from "./Dialog/DialogContainer";
import {store} from "../../Redux/ReduxStore";

type DialogsPropsType = {
        title: dialogPageType
        dispatch: any

}


export function Dialogs(props: DialogsPropsType) {



    return (
            <div className={dialogs.content}>
                <Contacts title={props.title.contactsMessage}/>
                <DialogContainer store={store}/>

            </div>
    );

}