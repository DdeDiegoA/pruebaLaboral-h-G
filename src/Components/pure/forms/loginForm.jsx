import React from "react";
// eslint-disable-next-line no-unused-vars
import { Link, redirect } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const loginSchema = Yup.object().shape({
    email: Yup.string()
        .email("Invalid Email Format")
        .required("Email Is Required"),
    password: Yup.string()
        .required("Password is Required")
        .min(8, "Password too short"),
});

/**
 * When the user clicks the submit button, the form values are sent to the submit function, which then
 * saves the values to local storage and reloads the page.
 */
const submit = async (values) => {
    await new Promise((r) => setTimeout(r, 1000));
    // alert(JSON.stringify(values, null, 2));
    localStorage.setItem("credentials", values);
    localStorage.setItem("email", values.email);
    window.location.reload();
};
const LoginForm = () => {
    const initialCredentials = {
        email: "",
        password: "",
    };
    return (
        <div className="col-12  d-flex flex-column justify-content-center align-items-center pt-md-5">
            {/* <div className="logginForm"> */}
            <h4 className="fw-bold"> Login Form </h4>
            <Formik
                initialValues={initialCredentials}
                validationSchema={loginSchema}
                onSubmit={(values) => submit(values)}
            >
                {({ touched, errors, isSubmitting }) => {
                    return (
                        <Form className="col-3">
                            <div className="form-floating mb-3">
                                <Field
                                    className="form-control"
                                    id="email"
                                    type="email"
                                    name="email"
                                />
                                <label htmlFor="email">Email</label>
                                {errors.email && touched.email && (
                                    <div style={{ color: "white" }}>
                                        <ErrorMessage
                                            name="email"
                                            component={"div"}
                                        />
                                    </div>
                                )}
                            </div>
                            <div className="form-floating mb-3">
                                <Field
                                    className="form-control"
                                    id="password"
                                    type="password"
                                    name="password"
                                />
                                <label htmlFor="password">Password</label>
                                {errors.password && touched.password && (
                                    <div style={{ color: "white" }}>
                                        <ErrorMessage
                                            name="password"
                                            component={"div"}
                                        />
                                    </div>
                                )}
                            </div>
                            <div className="d-grid">
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                >
                                    Loggin Account
                                </button>
                                {isSubmitting ? (
                                    <p style={{ color: "tomato" }}>
                                        we logging you...
                                    </p>
                                ) : null}
                            </div>
                        </Form>
                    );
                }}
            </Formik>
            {/* </div> */}
        </div>
    );
};

export default LoginForm;
