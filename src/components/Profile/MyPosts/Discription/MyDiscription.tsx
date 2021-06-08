import React from 'react';
import description from './MyDiscription.module.css';
import {Preloader} from "../../../../common/Preloader/Preloader";

export function MyDiscription(props: any) {


    if (!props.profile) {
        return <Preloader/>
    } else {
        return (
            <div className={description.info}>
                <img className={description.avatar}
                     src={props.profile.photos.large} alt={'avatar'}/>
                <div className={description.description}>
                    <div>status: {props.profile.aboutMe}</div>
                    <div>name: {props.profile.fullName}</div>
                    {
                        Object.entries(props.profile.contacts).map(c => {
                            return (
                                <div className={description.contacts}>
                                    <span className={description.keys}>{c[0]}: </span>
                                    <span> {c[1]}</span>
                                </div>)
                        })
                    }

                    <div>????</div>
                </div>
            </div>
        );
    }
}
