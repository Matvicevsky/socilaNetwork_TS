import React, {useState} from 'react';
import dialogs from './Dialogs.module.css';
import {Dialog} from "./Dialog/Dialog";
import {v1} from "uuid";
import {Contacts} from './Contacts/Contacts';
import {BrowserRouter, Route} from "react-router-dom";


export function Dialogs() {

    let [contactsMessage, setContacts] = useState([
        {
            id: v1(),
            nicName: "Neo",
            avatar: "https://cdn1.iconfinder.com/data/icons/diversity-avatars-volume-01-circles/64/matrix-neo-man-white-512.png",
            link: "/dialogs/neo",
            title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto ea eligendi facere id"
        },
        {
            id: v1(),
            nicName: "Morphius",
            avatar: "https://cdn1.iconfinder.com/data/icons/diversity-avatars-volume-01-circles/64/matrix-morpheus-512.png",
            link: "/dialogs/morphius",
            title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto ea eligendi facere id"
        },
        {
            id: v1(),
            nicName: "Triniti",
            avatar: "https://cdn1.iconfinder.com/data/icons/diversity-avatars-volume-01-circles/64/matrix-trinity-512.png",
            link: "/dialogs/triniti",
            title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto ea eligendi facere id"
        },
        {
            id: v1(),
            nicName: "Mr.Smith",
            avatar: "https://icons.iconarchive.com/icons/mattahan/ultrabuuf/256/TV-Smith-icon.png",
            link: "/dialogs/mr.smith",
            title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto ea eligendi facere id"
        }
    ])
    let DialogProps = () => {
        return (
            <Dialog title={contactsMessage}/>
        )
    }

    return (
                <BrowserRouter>
            <div className={dialogs.content}>
                <Contacts title={contactsMessage}/>
                <Route path={contactsMessage[0].link}
                       component={DialogProps}/>
                <Route path={contactsMessage[1].link}
                       component={DialogProps}/>
                <Route path={contactsMessage[2].link}
                       component={DialogProps}/>
                <Route path={contactsMessage[3].link}
                       component={DialogProps}/>


            </div>
        </BrowserRouter>
    );

}