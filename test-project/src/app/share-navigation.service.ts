import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { INavigation } from './INavigation';

@Injectable({
  providedIn: 'root'
})
export class ShareNavigationService {

  constructor() { }

  private navigation = new Subject<INavigation>();
  public navigationChanged = this.navigation.asObservable();

  private showNavigationDetail = new Subject<boolean>();
  public navigationDetailChanged = this.showNavigationDetail.asObservable();

  public changeNavigation(value) {
    this.navigation.next(value);
    console.log('navigation from changeNavigation service is ' + value);
  }

  public updateNavigationDetail(value) {
    this.showNavigationDetail.next(value);
  }
}
