import {Component, Inject, OnInit} from '@angular/core';
import {PHONE_SERVICE} from "../../../upgradedNg1Services/app.phone.service";

@Component({
  selector: 'app-profile-data',
  templateUrl: './profile-data.component.html',
  styleUrls: ['./profile-data.component.css']
})
export class ProfileDataComponent implements OnInit {

  phones: any[] = [];

  constructor(@Inject(PHONE_SERVICE) private phoneService: any) {

  }

  ngOnInit() {
    this.phones = this.phoneService.query();
  }

}
