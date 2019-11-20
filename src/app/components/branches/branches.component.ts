import { Component, OnInit } from '@angular/core';
import { BreadcrumbsService } from "ng6-breadcrumbs";

@Component({
  selector: 'branches',
  templateUrl: './branches.component.html',
  styleUrls: ['./branches.component.css']
})
export class BranchesComponent implements OnInit {

  constructor(private breadcrumbsService: BreadcrumbsService) { }

  ngOnInit() {
    this.breadcrumbsService.storePrefixed({label: 'Home', url: '/', params: []});
  }

}
