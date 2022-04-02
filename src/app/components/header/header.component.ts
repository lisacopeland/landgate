import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menuItems: MenuItem[
  ] = [
      {
        label: 'Home',
        routerLink: 'home'
      },
      {
        label: 'People',
        routerLink: 'people'
      },
      {
        label: 'About',
        command: () => { this.onCallAbout() }
      },
      {
        label: 'Blog',
      },
      {
        label: 'Contact',
      },
    ];

  constructor() { }

  ngOnInit() {
  }

  onCallAbout() {

  }

}
