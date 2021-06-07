import React from "react";
import users from "./FindUsers.module.css"
import {FindUsersPropsType} from "./FindUsersContainer";
import axios from "axios";
import someAvatar from "../../assets/images/someAvatar.png"


export class FindUsersClass extends React.Component<FindUsersPropsType> {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                this.props.setUsers(response.data.items
                )
            })
    }

    render = () => {
        return (
            <div className={users.container}>
                <div className={users.selected}>
                    <span className={users.selectedPage}>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                    <span>5</span>
                </div>
                {
                    this.props.users.users.map((u: any) => <div key={u.id} className={users.block}>
                        <div className={users.avatar}>
                            <div className={users.img}>
                                <img className={users.ava}
                                     src={u.photos.small != null ? u.photos.small : someAvatar} alt={'avatar'}/>
                            </div>
                            <div className={users.button}>
                                {u.followed ?
                                    <button onClick={() => {
                                        this.props.unfollow(u.id)
                                    }}>follow</button> :
                                    <button onClick={() => {
                                        this.props.follow(u.id)
                                    }}>unfollow</button>}
                            </div>
                        </div>
                        <div className={users.info}>
                            <div className={users.title}>
                                <div className={users.name}>
                                    {u.name}
                                </div>
                                <div className={users.status}>
                                    {u.status}
                                </div>
                            </div>
                            <div className={users.address}>
                                <div className={users.country}>
                                    {"u.location.country"}
                                </div>
                                <div className={users.city}>
                                    {"u.location.city"}
                                </div>
                            </div>
                        </div>

                    </div>)
                }
            </div>
        )
    }
}