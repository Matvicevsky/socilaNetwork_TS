import {v1} from "uuid";
import {ActionType} from "./Store";



export type PostMessagesPropsType = {
    id: string,
    avatar: string,
    nicName: string,
    message: string,
    count: number
}

let initialState = {
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
    ] as Array<PostMessagesPropsType>,
    newPostText: '',
}
export type initialStateType = typeof initialState

export const profileReducer = (state: initialStateType = initialState, action: ActionType): initialStateType => {
    let stateCopy = {...state}
    switch (action.type) {
        case  'UPDATE-NEW-POST-TEXT' :
            if (action.newText != null) {
                stateCopy.newPostText = action.newText;
            }
            return stateCopy;

        case "ADD-LIKE-POST" :
            stateCopy.PostMessages = [...state.PostMessages]
            stateCopy.PostMessages = state.PostMessages.map( (tl: PostMessagesPropsType) => tl.id  === action.id ? {...tl, count: ++action.count} : tl)
            return stateCopy

        case 'ADD-POST' :
            let newPost = {
                id: v1(),
                avatar: "https://cdn2.iconfinder.com/data/icons/coding-7/100/coding-matrix-coding-developer-the-matrix-hacker-neo-program-low-level-code-512.png",
                nicName: "unnamed",
                message: stateCopy.newPostText,
                count: 0,
            };
            stateCopy.PostMessages = [...state.PostMessages]
            stateCopy.PostMessages.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;

        default:
            return state;
    }

}