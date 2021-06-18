import React from "react";
import login from "./Login.module.css"

type LoginPropsType = {
    title: string
}

export const Login = (props: LoginPropsType) => {
    return (
        <div className={login.container}>
            <h1>{props.title}</h1>
        </div>
    )
}