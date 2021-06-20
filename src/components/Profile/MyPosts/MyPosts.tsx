import React from 'react';
import profile from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {MyPostsPropsType} from "./MyPostsContainer";
import {PostsFormik} from "./Discription/PostFormik";


export function MyPosts(props: MyPostsPropsType) {

 /*   let newPostElement = React.createRef<HTMLTextAreaElement>();

    let onAddPost = () => {

        props.addPost();
        //props.dispatch(addPostActionCreator());
    }

    let updatePostChange = () => {

        let text = newPostElement.current?.value;
        props.onPostChange(text)
        //props.dispatch(updateNewPostTextActionCreator(text));
    }*/
    let onAddLike = (id: string, count: number) => {
        props.addLike(id, count)
    }


    return (
        <div className={profile.content}>
            <h4>my posts</h4>
            <div>
                   <PostsFormik  {...props} />
            </div>
            <div>
                <h4>posts</h4>
                <Post title={props.title} onChange={onAddLike}/>
            </div>
        </div>
    );
}