import { Component, OnInit } from '@angular/core';
import { BreadcrumbsService } from "ng6-breadcrumbs";

@Component({
  selector: 'contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  constructor(private breadcrumbsService: BreadcrumbsService) { }

  ngOnInit() {
    this.breadcrumbsService.storePrefixed({label: 'Home', url: '/', params: []});
  }

}
