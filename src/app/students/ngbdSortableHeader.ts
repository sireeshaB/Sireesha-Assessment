import { EventEmitter, Input, Output } from '@angular/core';
import { SortEvent } from './SortEvent';
import { SortColumn, SortDirection, rotate } from './students.component';


export class NgbdSortableHeader {
  @Input() sortable: SortColumn = '';
  @Input() direction: SortDirection = '';
  @Output() sort = new EventEmitter<SortEvent>();

  rotate() {
    this.direction = rotate[this.direction];
    this.sort.emit({ column: this.sortable, direction: this.direction });
  }
}
