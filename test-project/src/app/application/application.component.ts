import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ApplicationService } from '../application.service';
import { IApplication } from '../IApplication';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements AfterViewInit {
  apps: Array<IApplication>;
  displayedColumns: string[] = [
    'ApplicationName',
    'ApplicationURL',
    'Status',
    'ApplicationImageURL',
    'ApplicationGroup',
    'ApplicationSideMenuImage',
    'ApplicationTarget'
  ];
  dataSource = new MatTableDataSource<IApplication>();

  constructor(private applicationService: ApplicationService) { }

  ngAfterViewInit() {
    this.applicationService
      .getApplications()
      .subscribe(data => {this.dataSource.data = data; });
  }



}
