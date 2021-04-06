import React from 'react';
import post from './Post.module.css';
import {PostMessagesPropsType} from "../../../../App";

type MyPostPropsType = {
    title: Array<PostMessagesPropsType>,
    onChange: ( id: string, count: number) => void

}

export function Post(props: MyPostPropsType) {


    return (
        <div>
            {
                props.title.map(t => {
                    let addLike = () => {
                        props.onChange( t.id, t.count);
                    }
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
                                <button onClick={addLike}>like
                                </button>
                                <span>count:{t.count}</span>
                            </div>
                        </div>
                    );
                })
            }
        </div>

    );
}