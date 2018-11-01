import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { ValueTransformer } from '@angular/compiler/src/util';
import { INavigation } from '../INavigation';
import { ShareNavigationService } from '../share-navigation.service';

@Component({
  selector: 'app-navigation-detail',
  templateUrl: './navigation-detail.component.html',
  styleUrls: ['./navigation-detail.component.css']
})
export class NavigationDetailComponent implements AfterViewInit {
  navigation: INavigation;

  constructor(private sharedNavService: ShareNavigationService) { }

  ngAfterViewInit() {
    this.sharedNavService.navigationChanged.subscribe((navigation) => {
      this.navigation = navigation;
      console.log('navigation detail id is: ' + navigation.NavPageURL);
    });
  }

}
