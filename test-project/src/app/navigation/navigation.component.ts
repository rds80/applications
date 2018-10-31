import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { NavigationService } from '../navigation.service';
import { INavigation } from '../INavigation';
import { ShareAppIDService } from '../share-app-id.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements AfterViewInit {
  navigations: Array<INavigation>;

  constructor(private navigationService: NavigationService, private shareAppIdService: ShareAppIDService) { }

  ngAfterViewInit() {
    this.shareAppIdService.appIdChanged.subscribe((appId) => {
      this.navigationService
        .getNavigations(appId)
        .subscribe(data => {this.navigations = data; });
        console.log(appId);
    });
  }
}
