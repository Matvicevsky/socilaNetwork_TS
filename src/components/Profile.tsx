import React from 'react';
import  profile from './Profile.module.css';

export function Profile() {
    return (
        <div className={profile.content}>
            <img className={profile.titlePng} src="https://www.barnesandnoble.com/blog/sci-fi-fantasy/wp-content/nas-uploads/sites/4/2019/09/matrix.png"
                 alt="png"/>
            <div>
                <img className={profile.avatar}
                     src={"https://cdn1.iconfinder.com/data/icons/diversity-avatars-volume-01-circles/64/matrix-neo-man-white-512.png"}/>
                ava+info
            </div>
            <div >
                my posts
                <div >
                    new post
                </div>
            </div>
            <div className={profile.post}>
                posts
                <div className={profile.item}>post1</div>
                <div className={profile.item}>post2</div>
            </div>
        </div>
    );
}