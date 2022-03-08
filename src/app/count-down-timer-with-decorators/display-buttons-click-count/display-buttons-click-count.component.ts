import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-display-buttons-click-count',
  templateUrl: './display-buttons-click-count.component.html',
  styleUrls: ['./display-buttons-click-count.component.sass']
})
export class DisplayButtonsClickCountComponent implements OnChanges {
  @Input() btnClickCountObj:any;
  clickCount: any;
  ngOnChanges() {
    // console.log('display count ', this.btnClickCountObj);
    this.clickCount = this.btnClickCountObj;
    // console.log('display count clickCount', this.clickCount);
  }

}
