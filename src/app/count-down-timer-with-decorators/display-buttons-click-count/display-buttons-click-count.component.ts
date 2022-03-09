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
    this.clickCount = this.btnClickCountObj;
  }

}
