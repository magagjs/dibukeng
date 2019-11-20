import { Component, OnInit } from '@angular/core';
import { BreadcrumbsService } from "ng6-breadcrumbs";

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private breadcrumbsService: BreadcrumbsService) { }

  ngOnInit() {
    this.breadcrumbsService.storePrefixed({label: 'Home', url: '/', params: []});
  }

}
