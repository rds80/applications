import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule, MatSelectModule, MatFormFieldModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ApplicationComponent } from './application/application.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NavigationDetailComponent } from './navigation-detail/navigation-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    ApplicationComponent,
    NavigationComponent,
    NavigationDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
