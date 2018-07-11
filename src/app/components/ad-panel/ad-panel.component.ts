import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ad-panel',
  templateUrl: './ad-panel.component.html',
  styleUrls: ['./ad-panel.component.css']
})
export class AdPanelComponent implements OnInit {

  title: string;

  constructor() {
    this.title = 'Ad Panel';
  }

  ngOnInit() {
  }

}
