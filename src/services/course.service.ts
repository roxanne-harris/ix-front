import { Course } from "../models/course";
import { Injectable } from "@angular/core";


@Injectable()
export class CourseService {

    private listOfCourses: Array<Course>;
    private savedCourses: Array<Course>;

    constructor() {
        this.listOfCourses = [];
        this.savedCourses = [];
    }

    getListOfCourses() {
        return this.listOfCourses;
    }

    addCourseToService(course: Course) {
        this.listOfCourses.push(course);
        console.log(this.listOfCourses);
    }

    saveCourseToList(course: Course) {
        this.savedCourses.push(course);
    }

}