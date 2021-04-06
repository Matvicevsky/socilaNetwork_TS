import React from 'react';
import {addLikePostActionCreator, addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/Store";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {AppReduxStateType} from "../../../Redux/ReduxStore";
import {PostMessagesPropsType} from "../../../Redux/profileReducer";
import {Dispatch} from "redux";


export type mapStatePropsType = {
    newPostText: string
    title: Array<PostMessagesPropsType>
}

export type mapDispatchPropsType = {
    addPost: () =>  void
    onPostChange: (text: string | undefined) => void
    addLike: ( id: string, count: number) => void
}

export type MyPostsPropsType = mapStatePropsType & mapDispatchPropsType


let mapStateToPost = (state: AppReduxStateType): mapStatePropsType => {
    return {
        newPostText: state.profilePage.newPostText,
        title: state.profilePage.PostMessages
    }
}
let mapDispatchToPost = (dispatch: Dispatch): mapDispatchPropsType => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        onPostChange: (text: string | undefined) => {
            let action = updateNewPostTextActionCreator(text)
            dispatch(action);
        },
        addLike: ( id: string, count: number) => {
            dispatch(addLikePostActionCreator(id, count))
        },
    }
}



export const MyPostsContainer = connect(mapStateToPost, mapDispatchToPost)(MyPosts);