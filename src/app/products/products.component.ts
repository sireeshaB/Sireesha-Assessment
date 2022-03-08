import { Component } from '@angular/core';
import { ProductsService } from './products.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent {
  priceFilterLabel:string = '';
  priceFilterValue:string = '';
  products:any = [];
  showGridView = true;
  priceFilters:any;
  constructor(private productsService: ProductsService) {}
  ngOnInit() {
    this.priceFilterLabel = 'Select Price Filter';
    this.priceFilterValue = 'Select Filter';
    this.priceFilters = [
      {'label': 'Price: Low to High', 'value': 'asc'},
      {'label': 'Price: High to Low', 'value': 'desc'}
    ]
    this.productsService.getProducts().subscribe((res) => {
      console.log('res ',res);
      this.products = res;
  });
  }
  toggleView(str:string) {
    this.showGridView = (str === 'grid' ? true : false);
  }
  ngDropDwonClick(filter:any) {
    this.priceFilterValue = filter.value;
    this.priceFilterLabel = filter.label;
    this.products = filter.value === 'asc' ? this.products.sort((a:any, b:any) => parseFloat(a.price.split('£').pop()) - parseFloat(b.price.split('£').pop())) : this.products.sort((a:any, b:any) => parseFloat(b.price.split('£').pop()) - parseFloat(a.price.split('£').pop()))
  }
}
