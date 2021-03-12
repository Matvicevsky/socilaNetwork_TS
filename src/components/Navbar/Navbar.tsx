import React from 'react';
import { NavLink } from 'react-router-dom';
import navbar from './Navbar.module.css';

export type navbarPropsType = {
    title: Array<navbarItemPropsType>
}

export type navbarItemPropsType = {
    id: string,
    title: string,
    link: string
}

export function Navbar(props: navbarPropsType) {
    return (
        <nav className={navbar.siteBar}>
            {
                props.title.map(t => {
                    return (
                        <div className={navbar.item}>
                            <NavLink className={navbar.link}
                                     activeClassName={navbar.active}
                                     to={t.link}>{t.title}
                            </NavLink>
                        </div>
                    );
                })
            }
        </nav>
    );
}