import { Component, OnInit } from '@angular/core';
import { ApplicationService } from '../application.service';
import { IApplication } from '../IApplication';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {
  apps: Array<IApplication>;
  displayedColumns: string[] = ['ApplicationName'];
  dataSource = new MatTableDataSource(this.apps);

  constructor(private applicationService: ApplicationService) { }

  ngOnInit() {
    this.applicationService
      .getApplications()
      .subscribe((data) => this.apps = data);
  }



}
