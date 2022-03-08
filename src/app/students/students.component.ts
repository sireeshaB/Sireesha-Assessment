import { Component} from '@angular/core';
import { Student } from './student';
import { StudentsService } from './students.service';
  @Component({
    selector: 'app-students',
    templateUrl: './students.component.html',
    styleUrls: ['./students.component.sass']
  })
  export class StudentsComponent {
  // students:Student[] = [];
  students:any;
  keys:any;
  constructor(private studentsService: StudentsService) {}
  ngOnInit() {
    this.getStudentsData();
  }
  getKeys() {
    return Object.keys(this.students[0]);
  }
  getStudentsData() {
    this.studentsService.getStudents().subscribe((res:any) => {
      console.log('res ',res);
      this.students = res;
    });
  }
  sortItems(event:any){
    console.log('event sortItems ', event);
    if (event["class"] === 'active sort-desc') {
      this.getStudentsData();
      console.log(this.students);
    }
  }
}
