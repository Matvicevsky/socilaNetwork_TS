import React from 'react';
import {NavLink} from 'react-router-dom';
import header from './Header.module.css'


type HeaderPropsType = {
    setUserDataTC: () => void
    logOutTC: () => void
    captchaTC: () => void
    isAuth: boolean
    login: string | null

}
export function Header(props: HeaderPropsType) {
    return (
        <div className={header.header}>
            <NavLink to={"/profile"}>
                <img className={header.logo}
                     src={"https://seeklogo.com/images/M/michigan-wolverines-logo-9E0DB2CF1E-seeklogo.com.png"}
                     alt={"logo"}/>
            </NavLink>
            <div className={header.loginBlock}>
                {props.isAuth ?
                    <div>
                        {props.login}
                        <button onClick={props.logOutTC}>Log out</button>
                    </div> :
                    <NavLink to={'/login'}>Login</NavLink>}

            </div>
        </div>
    );
}