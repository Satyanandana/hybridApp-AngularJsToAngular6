import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {downgradeComponent, UpgradeModule} from '@angular/upgrade/static';
import { RouterModule, UrlHandlingStrategy } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdPanelComponent } from './components/ad-panel/ad-panel.component';
import { phoneServiceProvider } from './upgradedNg1Services/app.phone.service';

export class CustomHandlingStrategy implements UrlHandlingStrategy {
  shouldProcessUrl(url) {
    return url.toString().startsWith('/ng2-route') || url.toString() === '/';
  }
  extract(url) { return url; }
  merge(url, whole) { return url; }
}


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
  providers: [phoneServiceProvider,
    { provide: UrlHandlingStrategy, useClass: CustomHandlingStrategy }
  ],
  bootstrap: [AppComponent],
  entryComponents: [AdPanelComponent]
})
export class AppModule {


    constructor(private upgrade: UpgradeModule) { }
  /* ngDoBootstrap() {
     this.upgrade.bootstrap(document.body, ['phonecatApp'], { strictDi: true });
    } */
}
