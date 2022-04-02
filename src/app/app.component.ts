import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { loadPeopleAction } from './+store/people.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'landgate-ui-test';
  subs = [];
  
  constructor(private store: Store, private router: Router) { }

  ngOnInit() {
    // Always redirect back to list on refresh
    this.router.navigate(['']);
    this.store.dispatch(loadPeopleAction({ search: { } }));
  }
}
