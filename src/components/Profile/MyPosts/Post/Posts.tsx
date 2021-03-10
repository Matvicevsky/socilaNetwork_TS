import React from 'react';
import  post from './Post.module.css';

export function Posts() {
    return (
        <div className={post.post}>

            <div className={post.item}>post1</div>
            <div className={post.item}>post2</div>
        </div>
    );
}