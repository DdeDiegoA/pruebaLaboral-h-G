import React, { useRef, useState } from "react";
import { Button, Container, Form, Modal } from "react-bootstrap";
import { Employee } from "../../../Models/employee.model";
import { STATES } from "../../../Models/enum/states.enum";
import "../../../Styles/tableStyle.css";

const EmployeeForm = ({ addEmployee, tLength, isEmployee }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const nameRef = useRef("");
    const lastNameRef = useRef("");
    const statusRef = useRef(STATES.ACTIVE);

    const newDate = () => {
        let today = new Date();
        const dd = String(today.getDate()).padStart(2, "0");
        const mm = String(today.getMonth() + 1).padStart(2, "0");
        const yyyy = today.getFullYear();

        today = `${mm}/${dd}/${yyyy}`;
        return today;
    };

    /**
     * When the user clicks the submit button, the add function is called, which prevents the default
     * action of the submit button, creates a new employee object, and then adds the new employee to
     * the list of employees.
     */
    const add = (e) => {
        e.preventDefault();
        const newEmployee = new Employee(
            nameRef.current.value,
            lastNameRef.current.value,
            statusRef.current.value,
            newDate()
        );
        addEmployee(newEmployee);
        handleClose();
    };

    return (
        <Container className="d-flex flex-row-reverse  mb-3">
            <Button
                variant="primary"
                onClick={handleShow}
                disabled={isEmployee}
            >
                {tLength ? "New Employee" : "First employee"}
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>New employee</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container className="mb-3">
                        <Form onSubmit={add} className="">
                            <Form.Group className="mb3" controlId="name">
                                <Form.Label className="mb-0">Name</Form.Label>
                                <Form.Control
                                    required
                                    ref={nameRef}
                                    type="text"
                                    placeholder="employee name"
                                />
                            </Form.Group>
                            <Form.Group className="mb3" controlId="lastName">
                                <Form.Label className="mb-0">
                                    LastName
                                </Form.Label>
                                <Form.Control
                                    required
                                    ref={lastNameRef}
                                    type="text"
                                    placeholder="employee LastName"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="mb-0">Status</Form.Label>
                                <Form.Select required ref={statusRef}>
                                    <option value={STATES.ACTIVE}>
                                        ACTIVE
                                    </option>
                                    <option value={STATES.INACTIVE}>
                                        INACTIVE
                                    </option>
                                </Form.Select>
                            </Form.Group>
                            <Button variant="outline-primary" type="submit">
                                {tLength ? "Add employee" : "First employee"}
                            </Button>
                        </Form>
                    </Container>
                </Modal.Body>
            </Modal>
        </Container>
    );
};

export default EmployeeForm;
