import {Component, Inject, OnInit} from '@angular/core';
import { PHONE_SERVICE } from '../../upgradedNg1Services/app.phone.service';

@Component({
  selector: 'app-ad-panel',
  templateUrl: './ad-panel.component.html',
  styleUrls: ['./ad-panel.component.css']
})
export class AdPanelComponent implements OnInit {

  title: string;
  phones: any[] = [];

  constructor(@Inject(PHONE_SERVICE) private phoneService: any) {
    this.title = 'Ad Panel';
  }

  ngOnInit() {
    this.phones = this.phoneService.query();
  }

}
