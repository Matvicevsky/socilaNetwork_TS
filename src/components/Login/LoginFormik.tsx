import React from "react";
import login from "./Login.module.css"
import {Field, Form, Formik} from 'formik';
import {InputLogin, InputPassword, Textarea} from "../../common/Preloader/FormsControls/FormsControls";
import {captchaTC, loginTC, logOutTC} from "../../Redux/authReducer";
import {connect} from "react-redux";
import {AppReduxStateType} from "../../Redux/ReduxStore";
import {Redirect} from "react-router-dom";
import {Button} from "antd";
import {RedoOutlined} from '@ant-design/icons';
import 'antd/dist/antd.css';

function validateEmail(value: any) {
    let error;
    if (!value) {
        error = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        error = 'Invalid email address';
    }
    return error;
}

function validatePassword(value: any) {
    let error;
    if (!value) {
        error = 'Required';
    } else if (value.length < 6) {
        error = 'Min length 6 symbol';
    }
    return error;
}

type PropsType = MapDispatchToProps & MapStateToProps
type MapStateToProps = {
    isAuth: boolean,
    captcha: boolean,
    url: string
    messages: string
}
type MapDispatchToProps = {
    loginTC: (email: string, password: string, rememberMe: boolean, captcha?: string) => void
    logOutTC: () => void,
    captchaTC: () => void
}

const LoginFormik = (props: PropsType) => {
    if (props.isAuth) {
        return <Redirect to={'profile'}/>
    }
    return (
        <div className={login.container}>
            <h1>Login</h1>
            <Formik
                initialValues={
                    {
                        email: '',
                        password: '',
                        rememberMe: false,
                        captcha: '',
                        messages: ''
                    }
                }
                onSubmit={(values, {setSubmitting}) => {
                    console.log(values.captcha)
                    props.loginTC(values.email, values.password, values.rememberMe, values.captcha)
                    setSubmitting(false)
                }}
            >

                {({isSubmitting, errors, touched}) => (

                    <Form>
                        <div>
                            <Field validate={validateEmail}
                                   component={InputLogin}
                                   name="email"
                                   placeholder={'email'}
                                   type={'email'}/>
                            {errors.email && touched.email && <div className={login.texterror}>{errors.email}</div>}
                        </div>
                        <div>
                            <Field validate={validatePassword}
                                   component={InputPassword}
                                   name="password"
                                   placeholder={'password'}
                                   type={'password'}
                            />
                            {errors.password && touched.password &&
                            <div className={login.texterror}>{errors.password}</div>}
                            {props.messages ? <div className={login.texterror}>{props.messages}</div> : ''}


                        </div>

                        <div>
                            <Field type="checkbox" name="rememberMe"/> Remember Me
                        </div>
                        {props.captcha && <div>
                            <Field name='captcha'
                                   component={Textarea}
                                   placeholder={'enter the text from the picture'}/>
                            <img src={props.url} alt={'captcha'}/>
                            <Button shape="circle" onClick={props.captchaTC} icon={<RedoOutlined/>}/>
                        </div>}
                        <button type="submit" disabled={isSubmitting}>
                            Login
                        </button>

                    </Form>
                )}
            </Formik>
        </div>
    )
}
const mapStateToProps = (state: AppReduxStateType) => ({
    isAuth: state.auth.isAuth,
    captcha: state.auth.captcha,
    url: state.auth.url,
    messages: state.auth.messages

})
export default connect(mapStateToProps, {loginTC, logOutTC, captchaTC})(LoginFormik)


