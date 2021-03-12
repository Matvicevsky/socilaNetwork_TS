import React from 'react';
import  description from './MyDiscription.module.css';

export function MyDiscription() {
    return (
        <div className={description.info}>
            <img className={description.avatar}
                 src={"https://cdn1.iconfinder.com/data/icons/diversity-avatars-volume-01-circles/64/matrix-neo-man-white-512.png"}/>
            <div className={description.description} >
                <div>name</div>
                <div>city</div>
                <div>status</div>
                <div>????</div>
            </div>
        </div>
    );
}
