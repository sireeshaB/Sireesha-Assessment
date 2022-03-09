import { Component } from '@angular/core';
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
}
