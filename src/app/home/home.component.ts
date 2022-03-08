import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {
  images:any;

  ngOnInit(){
    this.images =  [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
    console.log(this.images)
  }
}

