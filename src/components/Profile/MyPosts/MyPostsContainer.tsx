import React from 'react';
import {addLikePost, addPost, PostMessagesPropsType, updateNewPostText} from "../../../Redux/profileReducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {AppReduxStateType} from "../../../Redux/ReduxStore";


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
let mapDispatchToPost =  {
        addPost: addPost,
        onPostChange:  updateNewPostText,
        addLike: addLikePost,
}


export const MyPostsContainer = connect(mapStateToPost, mapDispatchToPost)(MyPosts);