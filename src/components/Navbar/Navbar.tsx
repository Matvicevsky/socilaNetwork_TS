import React from 'react';
import navbar from './Navbar.module.css';

export type navbarPropsType = {
    title: Array<navbarItemPropsType>
}
export type navbarItemPropsType = {
    id: string,
    title: string,

}

export function Navbar(props: navbarPropsType) {
    return (
        <nav className={navbar.siteBar}>
            {
                props.title.map( t => {
                    return (
                        <div className={navbar.item}>
                            <a href={"#"}>{t.title}</a>
                        </div>
                    );
                })
            }
            {/*<div className={navbar.item}>
                    <a href={"#"}>Profile</a>
                </div>
                <div className={navbar.item}>
                    <a href={"#"}>Messages</a>
                </div>
                <div className={navbar.item}>
                    <a href={"#"}>News</a>
                </div>
                <div className={navbar.item}>
                    <a href={"#"}>Music</a>
                </div>
                <div className={navbar.item}>
                    <a href={"#"}>Settings</a>
                </div>*/}
        </nav>

    );
}