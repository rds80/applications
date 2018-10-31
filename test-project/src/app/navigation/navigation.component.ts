import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NavigationService } from '../navigation.service';
import { INavigation } from '../INavigation';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements AfterViewInit {
  appId = 1;
  navigations: Array<INavigation>;

  constructor(private navigationService: NavigationService) { }

  ngAfterViewInit() {
    this.navigationService
      .getNavigations(this.appId)
      .subscribe(data => {this.navigations = data; });
  }

}
