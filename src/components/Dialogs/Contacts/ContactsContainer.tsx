import React from 'react';
import {connect} from "react-redux";
import {Contacts} from "./Contacts";
import {AppReduxStateType} from "../../../Redux/ReduxStore";

export type AppContactsMessagePropsType = {
    id: string,
    avatar: string,
    title: string,
    nicName: string,
    link: string
}


export type mapToContactPropsType = {
    title: Array<AppContactsMessagePropsType>
}


let mapToContact = (state: AppReduxStateType): mapToContactPropsType => {
    return{
        title: state.dialogPage.contactsMessage
    }
}

export const ContactsContainer = connect(mapToContact)(Contacts)