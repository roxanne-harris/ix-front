export class Course {

    courseId: number;
    subject: string;
    number: number;
    title: string;
    description: string;


    constructor(
        courseId: number,
        subject: string,
        number: number,
        title: string,
        description: string
    ) {

        this.courseId = courseId;
        this.subject = subject;
        this.number = number;
        this.title = title;
        this.description = description;


    }

}
