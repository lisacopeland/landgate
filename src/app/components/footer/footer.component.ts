import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  aboutMenu: MenuItem[
  ] = [
      {
        label: 'About',
        items: [
          {
            label: 'Learn more'
          },
          {
            label: 'People',
            routerLink: 'people'
          },
          {
            label: 'Careers'
          }
        ]
      }];

  resourceMenu: MenuItem[
  ] = [
      {
        label: 'Resources',
        items: [
          {
            label: 'Docs'
          },
          {
            label: 'Blog'
          },
        ]
      }];

  contactMenu: MenuItem[
  ] = [
      {
        label: 'Contact',
        items: [
          {
            label: 'Help'
          },
          {
            label: 'Sales'
          },
        ]
      }];

  constructor() { }

  ngOnInit() {
  }

}
