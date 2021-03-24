import React from "react";
import {v1} from "uuid";



export type appStateType = {
    navbar: Array<AppNavbarPropsType>,
    contactsMessage: Array<AppContactsMessagePropsType>,
    PostMessages: Array<PostMessagesPropsType>,
    newPostText: string | undefined
    dialogMessage: Array<string>
    newDialog: string

}

export type AppNavbarPropsType = {
    id: string,
    title: string,
    link: string
}

export type AppContactsMessagePropsType = {
    id: string,
    avatar: string,
    title: string,
    nicName: string,
    link: string
}

export type PostMessagesPropsType = {
    id: string,
    avatar: string,
    nicName: string,
    message: string,
    count: number
}


export let store = {
    _state: {
        //for navbar
        navbar: [
            {id: v1(), title: "Profile", link: "/profile"},
            {id: v1(), title: "Messages", link: "/dialogs"},
            {id: v1(), title: "News", link: "/news"},
            {id: v1(), title: "Music", link: "/music"},
            {id: v1(), title: "Settings", link: "/settings"}
        ],
        //for dialog
        contactsMessage: [
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
        ],
        dialogMessage: ['Hello loser', 'How are you'],
        newDialog: 'write text',
        // for profile>post
        PostMessages: [
            {
                id: v1(),
                avatar: "https://cdn1.iconfinder.com/data/icons/diversity-avatars-volume-01-circles/64/matrix-trinity-512.png",
                nicName: "Trinitttttti",
                message: "How are yuo",
                count: 42
            },
            {
                id: v1(),
                avatar: "https://icons.iconarchive.com/icons/mattahan/ultrabuuf/256/TV-Smith-icon.png",
                nicName: "Mr.Smith",
                message: "I am kill yor",
                count: 422
            },
            {
                id: v1(),
                avatar: "https://icons.iconarchive.com/icons/mattahan/ultrabuuf/256/TV-Smith-icon.png",
                nicName: "Mrrrrr.Smith",
                message: "I am kill yor",
                count: 422
            },
            {
                id: v1(),
                avatar: "https://icons.iconarchive.com/icons/mattahan/ultrabuuf/256/TV-Smith-icon.png",
                nicName: "Mr.Smith",
                message: "I am kill yor",
                count: 422
            },
        ],
        newPostText: 'it-kamasutra.com'
    },

    _callSubscriber  ( state: appStateType) {
        console.log(state)
    },
    getState () {
        return this._state;
    },
    subscribe (observer: any) {
        this._callSubscriber = observer;

    },


    dispatch(action: any) {  // { type: 'ADD-POST' }
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: v1(),
                avatar: "https://cdn2.iconfinder.com/data/icons/coding-7/100/coding-matrix-coding-developer-the-matrix-hacker-neo-program-low-level-code-512.png",
                nicName: "unnamed",
                message: this._state.newPostText,
                count: 0,
            };
            this._state.PostMessages.push(newPost);
            this._callSubscriber (this._state);
            this._state.newPostText = '';
        } else if ( action.type === 'UPDATE-NEW-POST-TEXT' ) {
            this._state.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === 'ADD-MESSAGE') {
            this._state.dialogMessage.push(this._state.newDialog);
            this._callSubscriber(this._state);
            this._state.newDialog = '';
        } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
            this._state.newDialog = action.newText;
            this._callSubscriber(this._state);
        }
    }
}







