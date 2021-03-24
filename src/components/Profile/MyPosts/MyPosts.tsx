import React from 'react';
import profile from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {PostMessagesPropsType} from "../../../App";

type MyPostsPropsType = {
    title: Array<PostMessagesPropsType>,
    dispatch: any
    newPostText: string | undefined

}


export function MyPosts(props: MyPostsPropsType) {

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPost = () => {
        props.dispatch({ type: 'ADD-POST' });
    }

    let onPostChange = () => {
        let text = newPostElement.current?.value;
        props.dispatch( { type: 'UPDATE-NEW-POST-TEXT', newText: text } );
    }


    return (
        <div className={profile.content}>
            <h4>my posts</h4>
            <div>
                <div>
                    <textarea
                        onChange={onPostChange}
                              ref={newPostElement}
                              value={props.newPostText}
                    />

                </div>
                <button onClick={addPost}>Add post</button>
            </div>
            <div>
                <h4>posts</h4>
                <Post title={props.title}/>
            </div>
        </div>
    );
}