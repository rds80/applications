import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { ValueTransformer } from '@angular/compiler/src/util';
import { INavigation } from '../INavigation';
import { ShareNavigationService } from '../share-navigation.service';
import { ShareAppIDService } from '../share-app-id.service';
import { Navigation } from 'selenium-webdriver';

@Component({
  selector: 'app-navigation-detail',
  templateUrl: './navigation-detail.component.html',
  styleUrls: ['./navigation-detail.component.css']
})
export class NavigationDetailComponent implements OnInit, AfterViewInit {
  navigation: INavigation;
  showNavDetail: boolean;

  constructor(private sharedNavService: ShareNavigationService,
      private sharedAppService: ShareAppIDService
    ) {
      // this.navigation.NavName = '';
    }

    ngOnInit() {
      this.navigation = {} as INavigation;
      this.navigation.NavActive = 'N';
      this.navigation.NavDesktop = 'N';
      this.navigation.NavTablet = 'N';
      this.navigation.NavPhone = 'N';
    }

  ngAfterViewInit() {

    this.sharedNavService.navigationChanged.subscribe((navigation) => {
      // if (navigation != null) {
      this.navigation = navigation;
      console.log('navigation detail id is: ' + navigation.NavPageURL);
      this.navigation.NavTarget = navigation.NavTarget;
      console.log('navActive' + navigation.NavActive);
      this.showNavDetail = true;
      // }
    });


    this.sharedAppService.appIdChanged.subscribe((appId: number) => {
      console.log('appId in nav detail is' + appId);
      // this.navigation.NavAppId = appId;
    });

    this.sharedNavService.navigationDetailChanged.subscribe((data) => {
      console.log('show nav detail is' + data);
      this.showNavDetail = data;
    });
  }

  onActiveChange(navigation, event) {
    this.navigation.NavActive = event.target.checked ? 'Y' : 'N';
  }

  onDesktopChange(navigation, event) {
    this.navigation.NavDesktop = event.target.checked ? 'Y' : 'N';
  }

  onTabletChange(navigation, event) {
    this.navigation.NavTablet = event.target.checked ? 'Y' : 'N';
  }

  onPhoneChange(navigation, event) {
    this.navigation.NavPhone = event.target.checked ? 'Y' : 'N';
  }

  onSubmit(navigation) {
    alert('Submitting data:' + JSON.stringify(navigation));
  }

}
