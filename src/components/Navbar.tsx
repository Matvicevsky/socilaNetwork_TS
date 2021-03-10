import React from 'react';

export function Navbar() {
    return (
        <div>
            <nav className={"navbar"}>
                <div>
                    <a href={"#"}>Profile</a>
                </div>
                <div>
                    <a href={"#"}>Messages</a>
                </div>
                <div>
                    <a href={"#"}>News</a>
                </div>
                <div>
                    <a href={"#"}>Music</a>
                </div>
                <div>
                    <a href={"#"}>Settings</a>
                </div>
            </nav>
        </div>
    );
}