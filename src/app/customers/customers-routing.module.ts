import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerListComponent} from "./customer-list/customer-list.component";


const routes: Routes = [{
  path: '',
  component: CustomerListComponent
},
  {
    path: 'customers.profile',
    loadChildren: './profile/profile.module#ProfileModule'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
