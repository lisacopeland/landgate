import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { createPersonAction, deletePersonAction, updatePersonAction } from 'src/app/+store/people.actions';
import { Person } from 'src/app/models/person-model';

@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.scss']
})
export class PersonEditComponent implements OnInit {
  @Input() person: Person = null;
  @Output() action = new EventEmitter<any>();

  form: FormGroup;

  constructor(private fb: FormBuilder, private store: Store) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      firstName: [this.person.firstName, Validators.required],
      lastName: [this.person.lastName, Validators.required],
      age: [this.person.age, Validators.required],
      jobTitle: [this.person.jobTitle, Validators.required],      
    })
  }

  onSubmit() {
    const newPerson = new Person({
      ...this.person,
      ...this.form.value
    });
    if (this.person.id) {
      this.store.dispatch(
        updatePersonAction({ id: this.person.id, changes: newPerson })
      );
      this.action.emit({ action: 'save' });
    } else {
      this.store.dispatch(
        createPersonAction({ payload: newPerson })
      );
      this.action.emit({ action: 'save' });
    }
  }

  onDelete() {
    // TODO: Throw up confirmation modal
    this.store.dispatch(deletePersonAction({ id: this.person.id }));
    this.action.emit({ action: 'delete'});
  }

  onCancel() {
    this.action.emit({ action: 'cancel' });
  }

}
