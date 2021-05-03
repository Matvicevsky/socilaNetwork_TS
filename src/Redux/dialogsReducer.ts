import {ActionType} from "./Store";
import {v1} from "uuid";

export type dialogPageType = {
    contactsMessage: Array<AppContactsMessagePropsType>,
    dialogMessage: Array<string>,
    newDialog: string,
}

export type AppContactsMessagePropsType = {
    id: string,
    avatar: string,
    title: string,
    nicName: string,
    link: string
}

let initialState = {
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
    ] as Array<AppContactsMessagePropsType>,
    dialogMessage: ['navbarReducer.ts', 'How are you'] as Array<string>,
    newDialog: '',
}

export type InitialStateType = typeof initialState



export const dialogsReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    let stateCopy = {...state,
        dialogMessage: [...state.dialogMessage]
    }
    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE-TEXT' :
            if (action.newTitle != null) {
                stateCopy.newDialog = action.newTitle;
            }
            return stateCopy
        case 'ADD-MESSAGE':
            let body = state.newDialog;
            stateCopy.dialogMessage.push(body);
            stateCopy.newDialog = '';

            return stateCopy;
        default:
            return state;
    }
}