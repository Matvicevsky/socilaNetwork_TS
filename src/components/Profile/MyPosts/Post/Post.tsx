import React from 'react';
import post from './Post.module.css';

type MyPostsPropsType = {
    messages: string
    count: number
    nicName: string
    id: string
    avatar: string
}

export function Post(props: MyPostsPropsType) {
    return (
        <div className={post.post}>
            <div className={post.postItem}>
                <div className={post.nic}>{props.nicName}</div>
                <img className={post.avatar}
                     src={props.avatar}
                     alt={"avatar"}/>
            </div>
            <div className={post.title}>
                <div className={post.item}>{props.messages}</div>
                <button>like</button>
                <span>count:{props.count}</span>
            </div>
        </div>
    );
}