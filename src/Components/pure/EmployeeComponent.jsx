import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { Employee } from "../../Models/employee.model";
import { Button, Form, Modal } from "react-bootstrap";
import { STATES } from "../../Models/enum/states.enum";
import "../../Styles/tableStyle.css";

const EmployeeComponent = ({
    employee,
    deleteEmployee,
    editEmployee,
    keyNumber,
    isEmployee,
}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // const isAdmin = localStorage.getItem("role") === "admin";

    const nameRef = useRef("");
    const lastNameRef = useRef("");
    const statusRef = useRef("");
    const registrationDateRef = useRef("");

    useEffect(() => {
        console.log("La propiedad employees ha cambiado");
    }, [employee]);

    /**
     * When the save button is clicked, the form is submitted and the values of the form are saved to
     * the state.
     */
    const save = (e) => {
        e.preventDefault();
        const saveEmployee = new Employee(
            nameRef.current.value,
            lastNameRef.current.value,
            statusRef.current.value,
            registrationDateRef.current.value
        );
        editEmployee(keyNumber, saveEmployee);
        handleClose();
    };

    return (
        <tr>
            <td>
                <span>{employee.name}</span>
            </td>
            <td>
                <span>{employee.lastName}</span>
            </td>
            <td>
                <span>{employee.state}</span>
            </td>
            <td>
                <span>{employee.registrationDate}</span>
            </td>
            <td>
                <i
                    className="bi bi-pencil-fill action-icons "
                    onClick={handleShow}
                    style={{ color: "green", margin: "0.7rem" }}
                />
                <i
                    className="bi-trash-fill action-icons"
                    style={{ color: "tomato", margin: "0.7rem" }}
                    onClick={() => deleteEmployee(employee)}
                />
            </td>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Employee...</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="Name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                ref={nameRef}
                                type="text"
                                placeholder={employee.name}
                                required
                                readOnly={isEmployee}
                                defaultValue={employee.name}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="LastName">
                            <Form.Label>LastName</Form.Label>
                            <Form.Control
                                ref={lastNameRef}
                                type="text"
                                placeholder={employee.lastName}
                                required
                                readOnly={isEmployee}
                                defaultValue={employee.lastName}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="Status">
                            <Form.Label>Status</Form.Label>
                            <Form.Select required ref={statusRef}>
                                <option disabled>select the status</option>
                                <option value={STATES.ACTIVE}>ACTIVE</option>
                                <option value={STATES.INACTIVE}>
                                    INACTIVE
                                </option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="Registration Date"
                        >
                            <Form.Label>Registration Date</Form.Label>
                            <Form.Control
                                disabled
                                type="text"
                                ref={registrationDateRef}
                                value={employee.registrationDate}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={save} type="submit">
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </tr>
    );
};

EmployeeComponent.propTypes = {
    employee: PropTypes.instanceOf(Employee).isRequired,
    deleteEmployee: PropTypes.func.isRequired,
};

export default EmployeeComponent;
