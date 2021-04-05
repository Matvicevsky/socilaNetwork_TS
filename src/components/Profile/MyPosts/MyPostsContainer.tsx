import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/Store";
import {MyPosts} from "./MyPosts";

type MyPostsPropsType = {
    store: any
}


export function MyPostsContainer(props: MyPostsPropsType) {
    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    let onPostChange = (text: string | undefined) => {
        let action = updateNewPostTextActionCreator(text)
        props.store.dispatch(action);
    }


    return (
        <MyPosts newPostText={props.store.getState().profilePage.newPostText}
                 title={props.store.getState().profilePage.PostMessages}
                 onPostChange={onPostChange}
                 addPost={addPost}/>
    );
}