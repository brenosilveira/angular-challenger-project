import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Product } from '../product.model';
import { Router} from '@angular/router';

@Component({
  selector: 'app-product-read2',
  templateUrl: './product-read2.component.html',
  styleUrls: ['./product-read2.component.css']
})
export class ProductRead2Component implements AfterViewInit, OnInit {
  
  
  constructor(private router: Router) { }
  ngAfterViewInit(): void {
    throw new Error("Method not implemented.");
  }

  ngOnInit() {
    
  }

  navigateToProductDetails(): void {
    this.router.navigate(['/products/details'])
  }
}
