import { Component, OnInit } from '@angular/core';
import { BreadcrumbsService } from "ng6-breadcrumbs";

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private breadcrumbsService: BreadcrumbsService) { }

  ngOnInit() {
    this.breadcrumbsService.storePrefixed({label: 'Home', url: '/', params: []});
  }

}
