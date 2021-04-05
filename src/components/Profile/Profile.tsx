import React from 'react';
import profile from './Profile.module.css';
import {MyDiscription} from "./MyPosts/Discription/MyDiscription";
import {profilePageType} from "../../Redux/Store";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {store} from "../../Redux/ReduxStore";

type ProfilePostMessagesPropsType = {
    profilePage: profilePageType
    dispatch: any


}

export function Profile(props: ProfilePostMessagesPropsType) {

    return (
        <div className={profile.content}>
            <img className={profile.titlePng}
                 src="https://www.barnesandnoble.com/blog/sci-fi-fantasy/wp-content/nas-uploads/sites/4/2019/09/matrix.png"
                 alt="png"/>
            <MyDiscription/>
            <MyPostsContainer store={store} />

        </div>
    );
}