import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdPanelComponent} from './components/ad-panel/ad-panel.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'ng2-route'

  },
  {
    path: 'ng2-route',
    component: AdPanelComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
