import React from "react";
import {Field, Form, Formik} from 'formik';
import {Textarea} from "../../../common/Preloader/FormsControls/FormsControls";
import dialogformik from "./Dialogformik.module.css"

function validate(value: any) {
    let error;
    if (!value || value === ' ') {
        error = 'Enter yor message';
    }
    return error;
}

export const DialogFormik = (props: any) => {
    return (
        <div>
            <Formik
                initialValues={{title: ''}}

                onSubmit={(values, {setSubmitting}) => {
                    console.log(values.title)
                    props.onMessageChange(values.title)
                    props.newMessage(values.title)
                    setSubmitting(false)

                }}
            >
                {({isSubmitting, errors, touched}) => (
                    <Form>
                        <div>
                            <Field name="title" placeholder={'Enter yor message'}  validate={validate} component={Textarea} />
                                {errors.title && touched.title && <div className={dialogformik.textError}>{errors.title}</div>}
                        </div>
                        <button  type="submit" disabled={isSubmitting}   >
                            Submit
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}



