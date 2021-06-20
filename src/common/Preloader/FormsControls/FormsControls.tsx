import React from "react";
import textarea from "./FormsControls.module.css"

type propsType = {
    field: any
    props: any
    form: {
        touched: {
            email: any
            password: any
            title: any
        }
        errors: {
            email: any
            password: any
            title: any
        }
    }
}


export const InputLogin = ({field, form: {touched, errors}, ...props}: propsType) => {
    return (
        <div className={ textarea.login +' '+`${(touched.email === undefined) ? '' : textarea.error}` }>
            <input type={'text'}  {...field} {...props} {...touched} {...errors}/>

        </div>
    )
}

export const InputPassword = ({field, form: {touched, errors}, ...props}: propsType) => {
    return(
        <div className={ textarea.password +' '+`${(touched.password === undefined) ? '' : textarea.error}` }>
            <input type={'text'}  {...field} {...touched} {...errors} {...props}/>
        </div>
    )
}

export const Textarea = ({field, form: {touched, errors}, ...props}: propsType) => {
    return(
        <div className={ textarea.textarea +' '+`${(touched.title === undefined) ? '' : textarea.error}` }>
            <textarea type={'text'}  {...field} {...touched} {...errors} {...props}/>
        </div>
    )
}