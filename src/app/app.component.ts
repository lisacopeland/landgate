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

  constructor(private store: Store, private router: Router) { }

  ngOnInit() {
    // redirect back to home on refresh
    this.router.navigate(['']);
    this.store.dispatch(loadPeopleAction({ search: { } }));
  }
}
