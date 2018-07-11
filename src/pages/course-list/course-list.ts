import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CourseService } from '../../services/course.service';
import { Course } from '../../models/course';
import { AddCoursePage } from '../add-course/add-course';
import { CoursePage } from '../course/course';
import { ProfilePage } from '../profile/profile';
import { MyCoursesPage } from '../my-courses/my-courses';

/**
 * Generated class for the CourseListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-course-list',
  templateUrl: 'course-list.html',
})
export class CourseListPage {

  public listOfCourses: Array<Course>;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public courseService: CourseService
  ) {
    this.listOfCourses = [];
    this.listOfCourses = courseService.getListOfCourses();
  }

  // saveCourse(course: Course) {
  //   this.courseService.addCourseToService(course);
  // }

  navigateToCourse(course: Course) {
    this.navCtrl.push(CoursePage, {
      courseParameter: course
    });
  }

  navigateToMyCourses() {
    this.navCtrl.push(MyCoursesPage);
  }

  navigateToAddCourse() {
    this.navCtrl.push(AddCoursePage);
  }

  navigateToProfile() {
    this.navCtrl.push(ProfilePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CourseListPage');
  }

}
