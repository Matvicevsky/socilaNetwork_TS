import React from 'react';
import profile from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {PostMessagesPropsType} from "../../../App";

type MyPostsPropsType = {
    title: Array<PostMessagesPropsType>,
    onPostChange: (text: string | undefined) => void
    addPost : () => void
    newPostText: string | undefined

}




export function MyPosts(props: MyPostsPropsType) {
    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let onAddPost = () => {
        props.addPost();
        //props.dispatch(addPostActionCreator());
    }

    let updatePostChange = () => {
        let text = newPostElement.current?.value;
        props.onPostChange(text)
        //props.dispatch(updateNewPostTextActionCreator(text));
    }


    return (
        <div className={profile.content}>
            <h4>my posts</h4>
            <div>
                <div>
                    <textarea
                        onChange={updatePostChange}
                        ref={newPostElement}
                        placeholder={'Enter you message'}
                        value={props.newPostText}
                    />

                </div>
                <button onClick={onAddPost}>Add post</button>
            </div>
            <div>
                <h4>posts</h4>
                <Post title={props.title}/>
            </div>
        </div>
    );
}