import React from 'react';
import profile from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {MyDiscription} from "./MyPosts/Discription/MyDiscription";
import {PostMessagesPropsType} from "../../App";

type ProfilePostMessagesPropsType = {
    title: Array<PostMessagesPropsType>
    addPost: (messagePost: any) => void,
    newPostText: string,
    updateNewPostText: (newPostText: any) => void,
}

export function Profile(props: ProfilePostMessagesPropsType) {
    return (
        <div className={profile.content}>
            <img className={profile.titlePng}
                 src="https://www.barnesandnoble.com/blog/sci-fi-fantasy/wp-content/nas-uploads/sites/4/2019/09/matrix.png"
                 alt="png"/>
            <MyDiscription/>
            <MyPosts title={props.title}
                     newPostText={props.newPostText}
                     updateNewPostText={props.updateNewPostText}
                     addPost={props.addPost}
                     />

        </div>
    );
}