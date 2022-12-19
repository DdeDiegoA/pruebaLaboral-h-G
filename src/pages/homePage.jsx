import React, { useState, useEffect } from "react";
import { Button, Container, Form } from "react-bootstrap";
import LoginForm from "../Components/pure/forms/loginForm";
import "../Styles/homeStyle.css";
import "../Styles/background.css";
import { Link } from "react-router-dom";
const HomePage = () => {
    const isLoggin = localStorage.getItem("credentials");
    // eslint-disable-next-line no-unused-vars
    const [loggin, setLoggin] = useState(isLoggin);

    useEffect(() => {
        return () => {
            console.log("unmount");
        };
    }, [isLoggin]);
    const email = localStorage.getItem("email");

    const handleSubmit = (event) => {
        event.preventDefault();
        const value = event.target.elements.opciones.value;
        localStorage.setItem("role", value);
    };

    // const objeto = JSON.parse(objetoString);
    const HomeContent = () => {
        return (
            <Container className="homeContent ">
                <div className="bg-light p-5 ">
                    <h2>Hello {email}</h2>
                    <p>
                        Now we will simulate an application with a call to
                        BackEnd, since we don't have a database, help us by
                        choosing a role to test this little app.
                    </p>
                    <div className="line">
                        <Form onSubmit={handleSubmit} className="form-line">
                            <Form.Group>
                                <Form.Select
                                    aria-label="Opciones"
                                    name="opciones"
                                    className="select-line"
                                >
                                    <option value="admin">Admin</option>
                                    <option value="employee">Employee</option>
                                </Form.Select>
                            </Form.Group>
                            <Button type="submit" className="btn-line">
                                <Link
                                    to={"/Employee-page"}
                                    className={"btn-link"}
                                >
                                    Be
                                </Link>
                            </Button>
                        </Form>
                    </div>
                </div>
            </Container>
        );
    };

    // const onView = ;

    return <div>{loggin ? <HomeContent /> : <LoginForm />}</div>;
};

export default HomePage;
