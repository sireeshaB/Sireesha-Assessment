// import { Component, OnInit } from '@angular/core';
// import { ChangeEvent } from '@angular2-virtual-scroll';

// @Component({
//   selector: 'my-app',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent implements OnInit {
//   items = [];
//   viewPortItems;
//   loading: boolean;

//   constructor() {

//   }

//   ngOnInit() {
//     for (let i = 0; i < 100; i++) {
//       this.addItem(i);
//       // this.items.push(i);
//     }

//     console.log(this.items);
//   }
//   showAlert(item) {
//     alert(item)
//   }
//   addItem(item) {
//     this.items = [
//       ...this.items,
//       item
//     ];
//   }

//   update($event) {
//     this.viewPortItems = $event;
//     console.log(this.viewPortItems);
//   }

//   fetchMore(event: ChangeEvent) {
//     if (event.end !== this.items.length) return;
//     this.loading = true;
//     this.fetchNextChunk(this.items.length, 10).then(chunk => {
//       this.items = this.items.concat(chunk);
//       this.loading = false;
//     }, () => this.loading = false);
//   }

//   fetchNextChunk(skip: number, limit: number): Promise<number[]> {
//         return new Promise((resolve, reject) => {
//             let chunk = [];

//             for(let i = skip; i < (skip + limit); i++) {
//               chunk.push(i);
//             }

//             resolve(chunk);
//         });
//     }
// }


// "angular2-virtual-scroll": "0.3.2",



// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms';

// import { VirtualScrollModule } from 'angular2-virtual-scroll';

// import { AppComponent } from './app.component';
// import { HelloComponent } from './hello.component';

// @NgModule({
//   imports:      [ BrowserModule, FormsModule, VirtualScrollModule ],
//   declarations: [ AppComponent, HelloComponent ],
//   bootstrap:    [ AppComponent ]
// })
// export class AppModule { }
