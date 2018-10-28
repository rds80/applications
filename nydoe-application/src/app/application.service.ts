import { Injectable } from '@angular/core';
import { IApplication} from './IApplication';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface IApplicationService {
  getApplications(): Observable<Array<IApplication>>;
}

@Injectable({
  providedIn: 'root'
})
export class ApplicationService implements IApplicationService {

  constructor(private httpClient: HttpClient) { }

  getApplications(): Observable<Array<IApplication>> {
    return this.httpClient.get<Array<IApplication>>('../assets/applications.json')
                   .pipe(
                     map(data => data)
                   );
  }
}
