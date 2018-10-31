import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareAppIDService {

  constructor() { }

  private appId = new Subject();
  public appIdChanged = this.appId.asObservable();

  public changeAppId(value) {
    this.appId.next(value);
    console.log('app id from changeAppId service is ' + value);
  }
}
