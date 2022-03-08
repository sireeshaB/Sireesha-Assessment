import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'my-app';
  username: any;
  // password:any;
  // check = 'red';
  // colors =['red','yellow','green'];
  // constructor(){}
  ngOnInit() {
    this.username = '';
    // this.password = '';
  }
  // login(form:any){
  //   console.log(form);
  // }
}
