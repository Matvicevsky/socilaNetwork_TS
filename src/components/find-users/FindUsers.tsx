import React from "react";
import users from "./FindUsers.module.css"
import {v1} from "uuid";


export function FindUsers(props: any) {


    if (props.users.length === 0) {
        props.setUsers([
                {
                    id: v1(),
                    avatar: "https://icons.iconarchive.com/icons/mattahan/ultrabuuf/256/TV-Smith-icon.png",
                    followed: false,
                    fullName: "Mr.Smith",
                    status: "I am kill you",
                    location: {city: 'Minsk', country: 'Belarus'}
                },
                {
                    id: v1(),
                    avatar: "https://cdn1.iconfinder.com/data/icons/diversity-avatars-volume-01-circles/64/matrix-neo-man-white-512.png",
                    followed: true,
                    fullName: "Neo",
                    status: "I am a boss",
                    location: {city: 'Moscow', country: 'Russia'}
                },
                {
                    id: v1(),
                    avatar: "https://cdn1.iconfinder.com/data/icons/diversity-avatars-volume-01-circles/64/matrix-trinity-512.png",
                    followed: true,
                    fullName: "Triniti",
                    status: "Yo Yo Yo",
                    location: {city: 'NewYork', country: 'USA'}
                },
                {
                    id: v1(),
                    avatar: "https://cdn1.iconfinder.com/data/icons/diversity-avatars-volume-01-circles/64/matrix-morpheus-512.png",
                    followed: false,
                    fullName: "Morphius",
                    status: "No, i am a boss",
                    location: {city: 'Minsk', country: 'Belarus'}
                },
            ]
        )
    }

    return (
        <div className={users.container}>
            {
                props.users.map((u: any) => <div key={u.id} className={users.block}>
                    <div className={users.avatar}>
                        <div className={users.img}>
                            <img className={users.ava} src={u.avatar} alt={'avatar'}/>
                        </div>
                        <div className={users.button}>
                            {u.followed ?
                                <button onClick={() => {
                                    props.unfollow(u.id)
                                }}>follow</button> :
                                <button onClick={() => {
                                    props.follow(u.id)
                                }}>unfollow</button>}
                        </div>
                    </div>
                    <div className={users.info}>
                        <div className={users.title}>
                            <div className={users.name}>
                                {u.fullName}
                            </div>
                            <div className={users.status}>
                                {u.status}
                            </div>
                        </div>
                        <div className={users.address}>
                            <div className={users.country}>
                                {u.location.country}
                            </div>
                            <div className={users.city}>
                                {u.location.city}
                            </div>
                        </div>
                    </div>

                </div>)
            }
        </div>
    )
}