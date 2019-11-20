import { Component, OnInit } from '@angular/core';
import { BreadcrumbsService } from "ng6-breadcrumbs";

@Component({
  selector: 'staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {

  constructor(private breadcrumbsService: BreadcrumbsService) { }

  ngOnInit() {
    this.breadcrumbsService.storePrefixed({label: 'Home', url: '/', params: []});
  }

}
