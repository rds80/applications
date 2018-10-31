import { Component, OnInit, Input } from '@angular/core';
import { ValueTransformer } from '@angular/compiler/src/util';

@Component({
  selector: 'app-navigation-detail',
  templateUrl: './navigation-detail.component.html',
  styleUrls: ['./navigation-detail.component.css']
})
export class NavigationDetailComponent implements OnInit {
  @Input('value') navId: number;

  constructor() { }

  ngOnInit() {
  }

}
