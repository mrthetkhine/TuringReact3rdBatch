import * as React from "react";
import {Field, Form, Formik,ErrorMessage} from 'formik';
import * as Yup from 'yup';
const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('First Name Required'),
    lastName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Last Name Required'),
    email: Yup.string().email('Invalid email').required('Required'),
});
const YupForm =()=>{
    return(<div>
        <Formik initialValues={{
                    firstName:'',
                    lastName:'',
                    email:'',
                    }
                }
                validationSchema={SignupSchema}
                onSubmit={(values)=>{
                    console.log('Form value ',values);
                }}>
            <Form className={"row"}>
                <div className={"mb-3 input-group"}>
                    <label htmlFor="firstName" className={"form-label col-2"}>First Name</label>
                    <Field id="firstName" name="firstName" placeholder="Jane"
                           className={"form-control col-4"}/>

                </div>
                <div className={"mb-3 input-group"}>
                    <ErrorMessage name="firstName" component="span" className={"alert alert-danger col-4 offset-md-2"}/>
                </div>

                <div className={"mb-3 input-group"}>
                    <label htmlFor="lastName" className={"form-label col-2"}>Last Name</label>
                    <Field id="lastName" name="lastName" placeholder="Doe"
                           className={"form-control col-4"}/>


                </div>
                <div className={"mb-3 input-group"}>
                    <ErrorMessage name="lastName" component="span" className={"alert alert-danger col-4 offset-md-2"}/>
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
                </div>
                <div className={"mb-3 input-group"}>
                    <ErrorMessage name="email" component="span" className={"alert alert-danger col-4 offset-md-2"}/>
                </div>
                <div className={"mb-3 input-group"}>
                    <div className={"col-2"}></div>
                    <button type="submit" className={"btn btn-primary col-4"}>Submit</button>
                </div>

            </Form>
        </Formik>
    </div>);
}
export default YupForm;