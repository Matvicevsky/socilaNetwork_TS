import React from "react";
import users from "./FindUsers.module.css";
import someAvatar from "../../assets/images/someAvatar.png";
import {UsersPropsType} from "./FindUsersContainer";
import {Preloader} from "../../common/Preloader/Preloader";
import {NavLink} from "react-router-dom";


export let Users = (props: UsersPropsType) => {
    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div className={users.container}>

            {props.isFetching ? <Preloader/> : null}

            <div className={users.selected}>
                 {pages.map(p => {
                    return (
                        <span className={props.currentPage === p ? users.selectedPage : ''} onClick={() => {
                            props.onPageChanged(p)
                        }}>{p} </span>
                    )
                })}
            </div>
            {

                props.users.map((u: any) => <div key={u.id} className={users.block}>

                    <div className={users.avatar}>
                        <div className={users.img}>
                            <NavLink to={'/profile/' + u.id}>
                                <img className={users.ava}
                                     src={u.photos.small != null ? u.photos.small : someAvatar} alt={'avatar'}/>
                            </NavLink>
                        </div>
                        <div className={users.button}>
                            {u.followed
                                ? <button disabled={props.followingInProgress} onClick={() => {
                                    props.unFollowTC(u.id)
                                }}>unfollow</button>

                                : <button disabled={props.followingInProgress} onClick={() => {
                                    props.followTC(u.id)
                                }}>follow</button>
                            }
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