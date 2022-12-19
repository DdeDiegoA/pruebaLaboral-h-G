import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <Container>
            <h3>Error 404, not found</h3>
            <h4>
                <Link>Back to home...</Link>
            </h4>
        </Container>
    );
};

export default ErrorPage;
