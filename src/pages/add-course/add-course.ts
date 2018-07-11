import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Course } from '../../models/course';
import { CourseService } from '../../services/course.service';

/**
 * Generated class for the AddCoursePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-add-course',
  templateUrl: 'add-course.html',
})
export class AddCoursePage {

  public addedCourse: Course;
  public courseCode: string;
  public title: string;
  public description: string;
  public instructor: string;
  public topics: Array<string>;
  public recommendation: Array<string>;
  public resources: Array<string>;
  public keywords: Array<string>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public courseService: CourseService
  ) {

  }

  // addCourseToList() {

  //   console.log(this.courseCode);
  //   if (this.courseCode != null) {
  //     this.addedCourse = new Course(
  //       this.courseCode,
  //       this.title,
  //       this.description,
  //       this.instructor,
  //       this.recommendation,
  //       this.resources,
  //       this.keywords);
  //     this.courseService.addCourseToService(this.addedCourse);
  //     this.navCtrl.pop();
  //   }


  // }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddCoursePage');
  }

}
