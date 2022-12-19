import { STATES } from "./enum/states.enum";

/* The Employee class is a blueprint for creating objects that have four properties: name, lastName,
state, and registrationDate. */
export class Employee {
    name = "";
    lastName = "";
    state = STATES.ACTIVE;
    registrationDate = "";

    constructor(name, lastName, state, registrationDate) {
        this.name = name;
        this.lastName = lastName;
        this.state = state;
        this.registrationDate = registrationDate;
    }
}
