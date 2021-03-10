import React from 'react';
import header from './Header.module.css'

export function Header() {
    return (
        <div className={header.header}>
            <img className={header.logo}
                 src={"https://seeklogo.com/images/M/michigan-wolverines-logo-9E0DB2CF1E-seeklogo.com.png"}
                 alt={"logo"}/>
        </div>
    );
}