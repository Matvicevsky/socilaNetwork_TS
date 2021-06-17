import {AppContactsMessagePropsType, dialogsReducer, InitialStateType} from "./dialogsReducer";
import {v1} from "uuid";
import {onMessageChangeActionCreator} from "./Store";

let startState: InitialStateType
beforeEach( () => {
    startState = {
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
        ]as Array<AppContactsMessagePropsType>,
        dialogMessage: ['navbarReducer.ts', 'How are you'] as Array<string>,
        newDialog: '',
    }
})


test('dialog should be correct changed', () => {
    const endState = dialogsReducer(startState, onMessageChangeActionCreator("asgadshdshfsdfhs"))

    expect(endState.newDialog).toBe('asgadshdshfsdfhs')
})