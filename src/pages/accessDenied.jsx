import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const AccessDenied = () => {
    return (
        <Container>
            <h3>Access Denied</h3>
            <h4>
                plase,<Link to="/">loggin</Link>
            </h4>
        </Container>
    );
};

export default AccessDenied;
