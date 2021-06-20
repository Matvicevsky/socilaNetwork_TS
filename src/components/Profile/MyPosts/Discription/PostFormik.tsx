import React from "react";
import {Field, Form, Formik} from 'formik';
import {Textarea} from "../../../../common/Preloader/FormsControls/FormsControls";
import postformik from "./Postformik.module.css"

function validate(value: any) {
    let error;
    if (!value) {
        error = 'Enter yor message';
    }
    return error;
}

export const PostsFormik = (props: any) => {
    return (
        <div>
            <Formik
                initialValues={{title: ''}}

                onSubmit={(values, {setSubmitting}) => {
                    props.onPostChange(values.title)
                    props.addPost()
                    setSubmitting(false)

                }}
            >
                {({isSubmitting, errors, touched}) => (
                    <Form>
                        <div>
                            <Field name="title" placeholder={'Enter yor message'}  validate={validate} component={Textarea} />
                                {errors.title && touched.title && <div className={postformik.texterror}>{errors.title}</div>}
                        </div>
                        <button  type="submit" disabled={isSubmitting} >
                            Submit
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}



