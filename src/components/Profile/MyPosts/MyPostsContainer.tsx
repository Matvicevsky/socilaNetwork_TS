import React, {ComponentType} from 'react';
import {addLikePost, addPost, PostMessagesPropsType, updateNewPostText} from "../../../Redux/profileReducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {AppReduxStateType} from "../../../Redux/ReduxStore";
import {Redirect} from "react-router-dom";
import {compose} from "redux";
import {WithAuthRedirect} from "../../../HOC/WithAuthRedirect";


export type mapStatePropsType = {
    newPostText: string
    title: Array<PostMessagesPropsType>
}
export type mapDispatchPropsType = {
    addPost: () => void
    onPostChange: (text: string | undefined) => void
    addLike: (id: string, count: number) => void
}

export type MyPostsPropsType = mapStatePropsType & mapDispatchPropsType


let mapStateToPost = (state: AppReduxStateType): mapStatePropsType => {
    return {
        newPostText: state.profilePage.newPostText,
        title: state.profilePage.PostMessages
    }
}
let mapDispatchToPost = {
    addPost: addPost,
    onPostChange: updateNewPostText,
    addLike: addLikePost,
    Redirect
}


 const MyPostsContainer = connect(mapStateToPost, mapDispatchToPost)(MyPosts);

export default compose<ComponentType>(
    WithAuthRedirect
)(MyPostsContainer)