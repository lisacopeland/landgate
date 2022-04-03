import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { selectCurrentPerson } from 'src/app/+store/people.reducer';
import { Person } from 'src/app/models/Person-model';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.scss']
})
export class PersonDetailComponent implements OnInit {

  person$: Observable<Person> = this.store.pipe(
    select(selectCurrentPerson),
    filter((person) => !!person)
  );
  editing = false;

  constructor(private store: Store, private router: Router) { }

  ngOnInit(): void {
  }

  onEdit() {
    this.editing = true;
  }

  onSidebarHide($event) {
    this.editing = false;
    if ($event.action !== 'cancel') {
      this.router.navigate(['/people']);
    }
  }


}
