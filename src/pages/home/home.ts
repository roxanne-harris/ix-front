import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CourseListPage } from '../course-list/course-list';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  navigateToCourseList() {
    this.navCtrl.setRoot(CourseListPage);
  }

}
