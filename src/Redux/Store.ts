import {v1} from "uuid";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {navbarReducer} from "./navbarReducer";


export type appStateType = {
    navbar: Array<AppNavbarPropsType>,
    dialogPage: dialogPageType,
    profilePage: profilePageType,


}

export type AppNavbarPropsType = {
    id: string,
    title: string,
    link: string
}

 type dialogPageType = {
    contactsMessage: Array<AppContactsMessagePropsType>,
    dialogMessage: Array<string>,
    newDialog: string,
}

 type AppContactsMessagePropsType = {
    id: string,
    avatar: string,
    title: string,
    nicName: string,
    link: string
}

export type profilePageType = {
    PostMessages: Array<PostMessagesPropsType>,
    newPostText: string,
}

export type PostMessagesPropsType = {
    id: string,
    avatar: string,
    nicName: string,
    message: string,
    count: number
}


export type  AddPostActionCreatorType = {
    type: 'ADD-POST'
}

export type  UpdateNewPostTextActionCreatorType = {
    type: 'UPDATE-NEW-POST-TEXT',
    newText: string | undefined
}
export type addLikePostActionCreatorType = {
    type: 'ADD-LIKE-POST'
    id: string,
    count: number
}

export type  NewMessageActionCreatorType = {
    type: 'ADD-MESSAGE',
}

export type  OnMessageChangeActionCreatorType = {
    type: 'UPDATE-NEW-MESSAGE-TEXT',
    newTitle: string | undefined,
}

export type ActionType =
    AddPostActionCreatorType
    | UpdateNewPostTextActionCreatorType
    | NewMessageActionCreatorType
    | OnMessageChangeActionCreatorType
    | addLikePostActionCreatorType


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
        dialogPage: {
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
            dialogMessage: ['navbarReducer.ts', 'How are you'],
            newDialog: '',
        },
        // for profile>post
        profilePage: {
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
            newPostText: '',
        }
    },

    _callSubscriber(state: appStateType) {
        console.log(state)
    },
    getState() {
        return this._state;
    },

    subscribe(observer: any) {
        this._callSubscriber = observer;
    },

    dispatch(action: ActionType) {  // { type: 'ADD-POST' }

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogPage = dialogsReducer(this._state.dialogPage, action);
        this._state.navbar = navbarReducer(this._state.navbar, action);
        this._callSubscriber(this._state);

    }
}

export let addPostActionCreator = (): AddPostActionCreatorType => ({type: 'ADD-POST'})

export let updateNewPostTextActionCreator = (text: string | undefined): UpdateNewPostTextActionCreatorType => ({
    type: 'UPDATE-NEW-POST-TEXT',
    newText: text
})
export let addLikePostActionCreator = ( id: string, count: number): addLikePostActionCreatorType => ({
    type: 'ADD-LIKE-POST',
    count: count,
    id: id
})

export let newMessageActionCreator = (): NewMessageActionCreatorType => ({type: 'ADD-MESSAGE'})

export let onMessageChangeActionCreator = (text: string | undefined): OnMessageChangeActionCreatorType => ({
    type: 'UPDATE-NEW-MESSAGE-TEXT',
    newTitle: text
})





