import React from "react";
import { Container } from "react-bootstrap";
import EmployeeList from "../Components/container/EmployeeList";

const EmployeePage = () => {
    return (
        <Container className="emplyPage">
            <header>
                <h2>Employee List</h2>
            </header>
            <EmployeeList />
        </Container>
    );
};

export default EmployeePage;
