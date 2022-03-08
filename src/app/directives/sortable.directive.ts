// import {Directive} from '@angular/core';

// @Directive({
//   selector: 'th[sortable]',
//   host: {
//     '[class.asc]': 'direction === "asc"',
//     '[class.desc]': 'direction === "desc"',
//     '(click)': 'rotate()'
//   }
// })
// export class SortableDirective{}
import { Directive, ElementRef, HostListener, Input, Output, Renderer2, EventEmitter } from "@angular/core";

@Directive({
   selector: '[appSort]'
})
export class AppSortDirective{
    @Input() appSort: any;
    @Output() sortItems = new EventEmitter();
    items:any;
    // ele:any;
    constructor(private renderer: Renderer2, private eleRef: ElementRef){}
    @HostListener('click')
    SortData() {
        console.log('appSort ', this.appSort);
        const ele = this.eleRef.nativeElement;
        // const order = ele.getAttribute('data-order');
        const property = ele.getAttribute('id');
        const cssClass = ele.getAttribute('class');
        if (document.querySelector('.students-block .active') !== null) {
            document.querySelector('.students-block .active')?.removeAttribute('class');
          }
        if (!cssClass) {
            ele.setAttribute('class', 'active sort-asc');
            this.appSort.sort((a:any,b:any)=> { 
                return a[property] < b[property] ?  -1 : 0;
            });
            this.items = {"id": property, "class": ''}
        } else if(cssClass === 'active sort-asc') {
            ele.setAttribute('class', 'active sort-desc');
            this.items = {"id": property, "class": cssClass}
            this.appSort.sort((a:any,b:any)=> { 
                return a[property] > b[property] ?  -1 : 0;
            });
        } 
        else if (cssClass === 'active sort-desc') {
            this.items = {"id": property, "class": cssClass}
            ele.setAttribute('class', '');
        }
        this.sortItems.emit(this.items);
    };
}