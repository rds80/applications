import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ApplicationService } from '../application.service';
import { IApplication } from '../IApplication';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements AfterViewInit {
  apps: Array<IApplication>;

  constructor(private applicationService: ApplicationService) { }

  ngAfterViewInit() {
    this.applicationService
      .getApplications()
      .subscribe(data => {this.apps = data; } );
  }



}
