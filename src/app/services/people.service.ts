import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Person } from '../models/person-model';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor() { }

  private peopleList: Person[] = [
    { id: '1', firstName: 'John', lastName: 'Doe', age: 21, jobTitle: 'Wanna be Signer' },
    { id: '2', firstName: 'Jane', lastName: 'Doe', age: 22, jobTitle: 'Signer' },
    { id: '3', firstName: 'Bob', lastName: 'Barker', age: 80, jobTitle: 'TV Host' },
    { id: '4', firstName: 'John', lastName: 'Doe', age: 21, jobTitle: 'Wanna be Signer' },
  ];


  getPeople(): Observable<Person[]> {
    return of(this.peopleList.slice());
  }

  postPerson(person: Person): Observable<Person> {
    if (person.id) {
      return of(null);
    } else {
      const newId = uuid();
      const newPerson = new Person({ ...person});
      newPerson.id = newId;
      this.peopleList.push(newPerson);
      return of(newPerson);
    }
  }

  putPerson(person: Person): Observable<Person> {
    const idx = this.peopleList.findIndex(x => x.id === person.id);
    if (idx === -1) {
      // error
      return of(null);
    } else {
      this.peopleList.splice(idx, 0, person)
      return of(person);
    }
  }

  deletePerson(id: string): Observable<boolean> {
    const idx = this.peopleList.findIndex(x => x.id === id);
    if (idx === -1) {
      return of(false);
    } else {
      this.peopleList.splice(idx, 1);
      return of(true);
    }
  }

}
