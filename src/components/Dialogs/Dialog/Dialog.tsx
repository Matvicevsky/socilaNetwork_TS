import React, {useState} from 'react';
import dialog from './Dialog.module.css';
import {v1} from "uuid";

type DialogPropsType = {
    title: Array<DialogItemPropsType>,
}
type DialogItemPropsType = {
    id: string,
    avatar: string,
    title: string,
    nicName: string,
    link: string

}

export function Dialog(props: DialogPropsType) {

    return (

        <div className={dialog.content}>

            <img className={dialog.avatar}
                 src={"https://cdn1.iconfinder.com/data/icons/diversity-avatars-volume-01-circles/64/matrix-neo-man-white-512.png"}
                 alt={"avatar"}/>
            <div className={dialog.message}>
                <div className={dialog.nik}>
                    ery
                </div>
                <div className={dialog.title}>
                    erye
                </div>
            </div>
        </div>
    );

}