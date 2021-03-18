import React from 'react';
import dialogs from './Dialogs.module.css';
import {Dialog} from "./Dialog/Dialog";
import {Contacts} from './Contacts/Contacts';
import {BrowserRouter, Route} from "react-router-dom";

type DialogsPropsType = {
    title:  Array<DialogsContactsMessagePropsType> ,
}
type DialogsContactsMessagePropsType = {
    id: string,
    avatar: string,
    title: string,
    nicName: string,
    link: string

}


export function Dialogs(props: DialogsPropsType) {

    let DialogProps = () =>  <Dialog title={props.title}/>

    return (
            <div className={dialogs.content}>
                <Contacts title={props.title}/>
                <Route path={props.title[0].link}
                       component={DialogProps}/>
                <Route path={props.title[1].link}
                       component={DialogProps}/>
                <Route path={props.title[2].link}
                       component={DialogProps}/>
                <Route path={props.title[3].link}
                       component={DialogProps}/>
            </div>
    );

}