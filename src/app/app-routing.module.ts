import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { AboutComponent } from './components/about/about.component';
import { BranchesComponent } from './components/branches/branches.component';
import { StaffComponent } from './components/staff/staff.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { GalleryComponent } from './components/gallery/gallery.component';

const routes: Routes = [
  {path: '', component: HomeComponent, data: {breadcrumb: 'Home'}},
  {path: 'products', component: ProductsComponent, data: {breadcrumb: 'Products'}},
  {path: 'about', component: AboutComponent, data: {breadcrumb: 'About Us'}},
  {path: 'branches', component: BranchesComponent, data: {breadcrumb: 'Branches'}},
  {path: 'staff', component: StaffComponent, data: {breadcrumb: 'Staff'}},
  {path: 'contacts', component: ContactsComponent, data: {breadcrumb: 'Contact Us'}},
  {path: 'gallery', component: GalleryComponent, data: {breadcrumb: 'Gallery'}}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
