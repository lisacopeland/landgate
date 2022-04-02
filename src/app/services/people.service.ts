import { Injectable } from '@angular/core';
import {delay} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {Person} from '../models/person-model';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor() { }

  private peopleList: Person[] = [
    { id: '1', firstName: 'John', lastName: 'Doe', age: 21, jobTitle: 'Wanna be Signer'},
    { id: '2', firstName: 'Jane', lastName: 'Doe', age: 22, jobTitle: 'Signer'},
    { id: '3', firstName: 'Bob', lastName: 'Barker', age: 80, jobTitle: 'TV Host'},
    { id: '4', firstName: 'John', lastName: 'Doe', age: 21, jobTitle: 'Wanna be Signer'},
  ];


  getPeople(): Observable<Person[]> {
    // TODO: Finish this implementation using the data from mockPeopleList
    // of(true).pipe(delay(100))
    return of(this.peopleList.slice());
  }

  postPerson(person: Person): Observable<boolean> {
    const idx = this.peopleList.findIndex(x => x.id === person.id);
    if (idx !== -1) {
      // error
      return of(false);
    } else {
      person.id = uuid();
      this.peopleList.push(person);
      return of(true);
    }
  }

  putPerson(person: Person): Observable<boolean> {
    const idx = this.peopleList.findIndex(x => x.id === person.id);
    if (idx === -1) {
      // error
      return of(false);
    } else {
      this.peopleList.splice(idx, 0, person)
      return of(true);
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
