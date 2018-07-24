import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerListComponent} from "../customer-list/customer-list.component";
import {ProfileDataComponent} from "./profile-data/profile-data.component";

const routes: Routes = [{
  path: '',
  component: ProfileDataComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
