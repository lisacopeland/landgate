import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { setCurrentPersonAction } from 'src/app/+store/people.actions';
import { selectAllPeople } from 'src/app/+store/people.reducer';
import { Person } from 'src/app/models/person-model';

@Component({
  selector: 'app-people-component',
  templateUrl: './people-ngrx.component.html',
  styleUrls: ['./people-ngrx.component.scss']
})
export class PeopleNgrxComponent implements OnInit {

  people$ = this.store.select(selectAllPeople);
  selectedPerson: Person = null;
  showEdit = false;
  columns = [
    { field: 'firstName', header: 'First name' },
    { field: 'lastName', header: 'Last name' },
    { field: 'age', header: 'Age' },
    { field: 'jobTitle', header: 'Job title' },
  ];

  constructor(private store: Store, private router: Router) { }

  ngOnInit() {
  }

  onCreate() {
    this.selectedPerson = new Person({
      firstName: 'Tony',
      lastName: 'Stark'
    });
  }

  onRowSelect(event) {
   console.log('row selected ', event);
   console.log('selectedPerson is ', this.selectedPerson);
    this.store.dispatch(setCurrentPersonAction({ id: this.selectedPerson.id }));
    this.router.navigate(['/person']);
   // this.showEdit = true;
  }

  onSidebarHide() {
    this.selectedPerson = null;
  }

}
