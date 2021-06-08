import React from 'react';
import { NavLink } from 'react-router-dom';
import header from './Header.module.css'

export function Header(props: any) {
    return (
        <div className={header.header}>
            <NavLink to={"/profile"}><img className={header.logo}
                 src={"https://seeklogo.com/images/M/michigan-wolverines-logo-9E0DB2CF1E-seeklogo.com.png"}
                    alt={"logo"}/></NavLink>
            <div className={header.loginBlock}>
                {props.isFetching ?
                    props.login :
                    <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </div>
    );
}