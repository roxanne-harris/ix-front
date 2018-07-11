

export class Student {

    studentId: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    paid: boolean;


    constructor(
        studentId: number,
        firstName: string,
        lastName: string,
        email: string,
        password: string,
        paid: boolean
    ) {

        this.studentId = studentId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.paid = paid;


    }



}
