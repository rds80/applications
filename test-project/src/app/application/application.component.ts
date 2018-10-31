import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ApplicationService } from '../application.service';
import { IApplication } from '../IApplication';
import { ShareAppIDService } from '../share-app-id.service';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements AfterViewInit {
  apps: Array<IApplication>;

  constructor(private applicationService: ApplicationService, private shareAppIdService: ShareAppIDService) { }

  ngAfterViewInit() {
    this.applicationService
      .getApplications()
      .subscribe(data => {this.apps = data; } );
  }

  sendChangedId(appId) {
    this.shareAppIdService.changeAppId(appId);
    console.log('app id from app controller is ' + appId);
  }


}
