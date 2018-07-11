import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {downgradeComponent, UpgradeModule} from '@angular/upgrade/static';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdPanelComponent } from './components/ad-panel/ad-panel.component';


declare var angular: any;

angular.module('phonecatApp')
  .directive(
    'appAdPanel',
    downgradeComponent({component: AdPanelComponent})
  );

@NgModule({
  declarations: [
    AppComponent,
    AdPanelComponent
  ],
  imports: [
    BrowserModule,
    UpgradeModule,
    AppRoutingModule
  ],
  providers: [],
 // bootstrap: [AppComponent]
  entryComponents: [AdPanelComponent]
})
export class AppModule {


    constructor(private upgrade: UpgradeModule) { }
   ngDoBootstrap() {
     this.upgrade.bootstrap(document.body, ['phonecatApp'], { strictDi: true });
    }
}
