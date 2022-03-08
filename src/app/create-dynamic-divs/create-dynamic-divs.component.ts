import { Component } from '@angular/core';
// import { p } from 'ngx-virtual-scroller';
@Component({
  selector: 'app-create-dynamic-divs',
  templateUrl: './create-dynamic-divs.component.html',
  styleUrls: ['./create-dynamic-divs.component.sass']
})
export class CreateDynamicDivsComponent{

  items : number[] = [];
  itemsCount: number = 40;
  staticAlertClosed: boolean = true;
  selectedIndex: number = 0;
  ngOnInit() {
    for (let i = 0; i < this.itemsCount; i++) {
      this.addItem(i);
    }
  }
  addItem(item:number) {
    this.items = [
      ...this.items,
      item
    ];
  }
  onScrollDown(ev: any) {
    console.log("scrolled down!!", ev, this.items.length);
    let startIndex = this.items.length;
    let count = this.items.length + this.itemsCount;
    console.log('count ', count, 'startIndex ', startIndex);
    for (let i = startIndex; i < count; i++) {
      if (i === startIndex) {
        console.log('for loop startIndex', startIndex);
      }
      this.addItem(i);
    }
  }
  onScrollUp(ev: any) {
    console.log("scrolled down!!", ev, this.items.length);
    let startIndex = this.items.length;
    let count = this.items.length - this.itemsCount;
    console.log('count ', count, 'startIndex ', startIndex);
    for (let i = count; i < startIndex; i--) {
      if (i === startIndex) {
        console.log('for loop startIndex', startIndex);
      }
      this.removeItem(i);
    }
  }
  removeItem(item:number) {
    this.items.unshift(item)
  }
  showAlert(index:number) {
    this.staticAlertClosed = false;
    this.selectedIndex = index;
  }

  // onScrollUp(ev: any) {
  //   console.log("scrolled up!", ev);
  //   // this.sum += 20;
  //   this.prependItems();

  //   // this.direction = "scroll up";
  // }

  // appendItems() {
  //   this.addItems("push");
  // }

  // prependItems() {
  //   this.addItems("unshift");
  // }

  // addItems(_method: string) {
  //   for (let i = 0; i < this.sum; ++i) {
  //     if( _method === 'push'){
  //       this.listArray.push([i].join(""));
  //     }else if( _method === 'unshift'){
  //       this.listArray.unshift([i].join(""));
  //     }
  //   }
  // }
  // items:number[] = [];
  // viewPortItems:any;
  // loading: any;

  // constructor() {

  // }

  // ngOnInit() {
  //   for (let i = 0; i < 100; i++) {
  //     this.addItem(i);
  //     // this.items.push(i);
  //   }

  //   console.log(this.items);
  // }
  // showAlert(item:number) {
  //   alert(item)
  // }
  // addItem(item:number) {
  //   this.items = [
  //     ...this.items,
  //     item
  //   ];
  // }

  // update($event:any) {
  //   this.viewPortItems = $event;
  //   console.log(this.viewPortItems);
  // }

  // fetchMore(event: ChangeEvent) {
  //   if (event.end !== this.items.length) return;
  //   this.loading = true;
  //   this.fetchNextChunk(this.items.length, 10).then(chunk => {
  //     this.items = this.items.concat(chunk);
  //     this.loading = false;
  //   }, () => this.loading = false);
  // }

  // fetchNextChunk(skip: number, limit: number): Promise<number[]> {
  //       return new Promise((resolve, reject) => {
  //           let chunk = [];

  //           for(let i = skip; i < (skip + limit); i++) {
  //             chunk.push(i);
  //           }

  //           resolve(chunk);
  //       });
  // }

}
