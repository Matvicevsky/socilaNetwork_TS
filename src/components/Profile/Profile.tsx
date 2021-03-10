import React from 'react';
import profile from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {MyDiscription} from "./MyPosts/Discription/MyDiscription";

export function Profile() {
    return (
        <div className={profile.content}>
            <img className={profile.titlePng}
                 src="https://www.barnesandnoble.com/blog/sci-fi-fantasy/wp-content/nas-uploads/sites/4/2019/09/matrix.png"
                 alt="png"/>
            <MyDiscription/>
            <MyPosts/>

        </div>
    );
}