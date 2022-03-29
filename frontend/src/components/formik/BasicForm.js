import * as React from "react";
import {Field, Form, Formik,ErrorMessage} from 'formik';
const BasicForm =()=>{
    return(<div>
        <Formik initialValues={{
                    firstName:'',
                    lastName:'',
                    email:'',
                    }
                }
                validate={values => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }
                    if(!values.firstName)
                    {
                        errors.firstName = 'Required FirstName';
                    }
                    return errors;
                }}
                onSubmit={(values)=>{
                    console.log('Form value ',values);
                }}>
            <Form className={"row"}>
                <div className={"mb-3 input-group"}>
                    <label htmlFor="firstName" className={"form-label col-2"}>First Name</label>
                    <Field id="firstName" name="firstName" placeholder="Jane"
                           className={"form-control col-4"}/>
                    <ErrorMessage name="firstName" component="span" />
                </div>

                <div className={"mb-3 input-group"}>
                    <label htmlFor="lastName" className={"form-label col-2"}>Last Name</label>
                    <Field id="lastName" name="lastName" placeholder="Doe"
                           className={"form-control col-4"}/>


                </div>
                <div className={"mb-3 input-group"}>
                    <label htmlFor="email"  className={"form-label col-2"}>Email</label>
                    <Field
                        id="email"
                        name="email"
                        placeholder="jane@acme.com"
                        type="email"
                        className={"form-control col-4"}
                    />
                    <ErrorMessage name="email" component="span" />
                </div>
                <div className={"mb-3 input-group"}>
                    <div className={"col-2"}></div>
                    <button type="submit" className={"btn btn-primary col-4"}>Submit</button>
                </div>

            </Form>
        </Formik>
    </div>);
}
export default BasicForm;