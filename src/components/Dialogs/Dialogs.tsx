import React from 'react';
import dialogs from './Dialogs.module.css';
import DialogContainer from "./Dialog/DialogContainer";
import {ContactsContainer} from "./Contacts/ContactsContainer";




export function Dialogs() {

    return (
            <div className={dialogs.content}>
                <ContactsContainer/>
                <DialogContainer/>

            </div>
    );

}