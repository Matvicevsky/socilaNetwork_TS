import React from 'react';
import profile from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {PostMessagesPropsType} from "../../../App";

type MyPostsPropsType = {
    title: Array<PostMessagesPropsType>
}



export function MyPosts(props: MyPostsPropsType ) {




    return (
        <div className={profile.content}>
            <h4>my posts</h4>
            <div>
                <div>
                    <textarea/>
                </div>
                <button>Add post</button>
            </div>
            <div>
                <h4>posts</h4>
                <Post title={props.title}/>
            </div>
        </div>
    );
}