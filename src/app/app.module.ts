import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BreadcrumbsModule } from "ng6-breadcrumbs";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SpecialsSidebarComponent } from './components/specials-sidebar/specials-sidebar.component';
import { CategoriesSidebarComponent } from './components/categories-sidebar/categories-sidebar.component';
import { ProductsComponent } from './components/products/products.component';
import { AboutComponent } from './components/about/about.component';
import { BranchesComponent } from './components/branches/branches.component';
import { StaffComponent } from './components/staff/staff.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { BukHeaderComponent } from './components/buk-header/buk-header.component';
import { BukFooterComponent } from './components/buk-footer/buk-footer.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SpecialsSidebarComponent,
    CategoriesSidebarComponent,
    ProductsComponent,
    AboutComponent,
    BranchesComponent,
    StaffComponent,
    ContactsComponent,
    GalleryComponent,
    BukHeaderComponent,
    BukFooterComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BreadcrumbsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
