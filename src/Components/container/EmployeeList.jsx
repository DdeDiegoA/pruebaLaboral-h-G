import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { Employee } from "../../Models/employee.model";
import { STATES } from "../../Models/enum/states.enum";
import EmployeeComponent from "../pure/EmployeeComponent";
import EmployeeForm from "../pure/forms/employeeForm";

const EmployeeList = () => {
    const defaultEmployee = [
        new Employee("ramon", "valdez", STATES.ACTIVE, "fecha"),
        new Employee("santiago", "ramirez", STATES.INACTIVE, "fecha"),
    ];

    // eslint-disable-next-line no-unused-vars
    const [employees, setEmployees] = useState(defaultEmployee);
    // eslint-disable-next-line no-unused-vars
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log("employee list state has been modified");
        setTimeout(() => {
            setLoading(false);
        }, 2000);
        return () => {
            console.log("employee list component is going to unmount");
        };
    }, [employees]);

    const isEmployee = localStorage.getItem("role") === "employee";

    /**
     * The function editEmployee takes two parameters, keyNumber and employee, and then sets the state
     * of employees to a new array, tempEmployees, which is a copy of the original employees array,
     * with the employee at the index of keyNumber replaced with the employee passed in as a parameter.
     */
    const deleteEmployee = (employee) => {
        if (!isEmployee) {
            const index = employees.indexOf(employee);
            const tempEmployee = [...employees];
            tempEmployee.splice(index, 1);
            setEmployees(tempEmployee);
        }
    };
    /**
     * The function editEmployee takes two parameters, keyNumber and employee, and then sets the state
     * of employees to a new array, tempEmployees, which is a copy of the original employees array,
     * with the employee at the index of keyNumber replaced with the employee passed in as a parameter.
     */
    const addEmployee = (employee) => {
        const tempEmployee = [...employees];
        tempEmployee.push(employee);
        setEmployees(tempEmployee);
    };
    /**
     * The function editEmployee takes two parameters, keyNumber and employee, and then sets the state
     * of employees to a new array, tempEmployees, which is a copy of the original employees array,
     * with the employee at the index of keyNumber replaced with the employee passed in as a parameter.
     */
    const editEmployee = (keyNumber, employee) => {
        // const index = employees.indexOf(employee);
        const tempEmployees = [...employees];
        tempEmployees.splice(keyNumber, 1, employee);
        setEmployees(tempEmployees);
    };

    const TableComponent = () => {
        return (
            <Table responsive className="emplyTable">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>LastName</th>
                        <th>Status</th>
                        <th>Registration Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee, index) => {
                        return (
                            <EmployeeComponent
                                key={index}
                                employee={employee}
                                deleteEmployee={deleteEmployee}
                                editEmployee={editEmployee}
                                keyNumber={index}
                                isEmployee={isEmployee}
                            />
                        );
                    })}
                </tbody>
            </Table>
        );
    };

    return (
        <div className="d-flex-column justify-content-center align-items-center">
            {employees.length ? (
                <TableComponent />
            ) : (
                <h4 style={{ margin: "2rem" }}>
                    You currently have no employees, please add one
                </h4>
            )}
            <EmployeeForm
                addEmployee={addEmployee}
                tLength={employees.length}
                isEmployee={isEmployee}
            />
        </div>
    );
};

export default EmployeeList;
