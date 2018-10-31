import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { INavigation } from './INavigation';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

export interface INavigationService {
  getNavigations(appId: number): Observable<Array<INavigation>>;
}

@Injectable({
  providedIn: 'root'
})
export class NavigationService implements INavigationService {

  constructor(private httpClient: HttpClient)  {

   }

   getNavigations(appId: any): Observable<Array<INavigation>> {
      return this.httpClient.get<Array<INavigation>>('../assets/navigations.json')
                  .pipe(
                    map(data => data.filter(navigation => navigation.NavAppId === appId))
                  );

   }
}
