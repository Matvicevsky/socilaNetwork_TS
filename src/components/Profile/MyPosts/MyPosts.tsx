import React from 'react';
import profile from './MyPost.module.css';
import {Posts} from "./Post/Posts";

export function MyPosts() {
    return (
        <div className={profile.content}>
            <h4>my posts</h4>
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <h4>posts</h4>
            <Posts/>
            <Posts/>
        </div>
    );
}