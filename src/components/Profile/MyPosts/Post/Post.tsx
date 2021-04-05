import React from 'react';
import post from './Post.module.css';
import {PostMessagesPropsType} from "../../../../App";

type MyPostPropsType = {
    title: Array<PostMessagesPropsType>,

}

export function Post(props: MyPostPropsType) {
debugger
        return (
        <div>
        {
            props.title.map(t => {
                return (
                    <div className={post.post}>
                        <div className={post.postItem}>
                            <div className={post.nic}>{t.nicName}</div>
                            <img className={post.avatar}
                                 src={t.avatar}
                                 alt={"avatar"}/>
                        </div>
                        <div className={post.title}>
                            <div className={post.item}>{t.message}</div>
                            <button onClick={() => {
                                return t.count++}}>like</button>
                            <span>count:{t.count}</span>
                        </div>
                    </div>
                );
            })
        }
        </div>

    );
}