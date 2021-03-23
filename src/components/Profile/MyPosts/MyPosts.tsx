import React from 'react';
import profile from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {PostMessagesPropsType} from "../../../App";

type MyPostsPropsType = {
    title: Array<PostMessagesPropsType>,
    addPost: (messagePost: any) => void,
}
type newPostElementType = any

export function MyPosts(props: MyPostsPropsType) {
    let newPostElement: newPostElementType = React.createRef();
    let addPost = () => {

        let text = newPostElement.current.value;
        props.addPost(text)
    }


    return (
        <div className={profile.content}>
            <h4>my posts</h4>
            <div>
                <div>
                    <textarea ref={newPostElement}>

                    </textarea>
                </div>
                <button onClick={addPost}>Add post</button>
            </div>
            <div>
                <h4>posts</h4>
                <Post title={props.title} />
            </div>
        </div>
    );
}