import React from 'react';
import profile from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {v1} from "uuid";


export function MyPosts() {
    let PostMessages = [
        {id: v1(), avatar: "https://cdn1.iconfinder.com/data/icons/diversity-avatars-volume-01-circles/64/matrix-trinity-512.png" , nicName: "Triniti", message: "How are yuo", count: 42},
        {id: v1(), avatar: "https://icons.iconarchive.com/icons/mattahan/ultrabuuf/256/TV-Smith-icon.png" , nicName: "Mr.Smith", message: "I am kill yor", count: 422},
        {id: v1(), avatar: "https://icons.iconarchive.com/icons/mattahan/ultrabuuf/256/TV-Smith-icon.png" , nicName: "Mr.Smith", message: "I am kill yor", count: 422},
        {id: v1(), avatar: "https://icons.iconarchive.com/icons/mattahan/ultrabuuf/256/TV-Smith-icon.png" , nicName: "Mr.Smith", message: "I am kill yor", count: 422},
    ]

    let posts = PostMessages.map( p =>  <Post id={PostMessages[0].id}
                                               avatar={PostMessages[0].avatar}
                                               nicName={PostMessages[0].nicName}
                                               messages={PostMessages[0].message}
                                               count={PostMessages[0].count}/>

    )

    return (
        <div className={profile.content}>
            <h4>my posts</h4>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <button>Add post</button>
            </div>
            <div>
                <h4>posts</h4>
                {posts}
            </div>
        </div>
    );
}