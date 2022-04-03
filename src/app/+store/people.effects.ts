import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap } from "rxjs/operators";

import { PeopleService } from "../services/people.service";

import { createPersonAction, deletePersonAction, loadPeopleAction, setPeopleAction, 
         personCreatedAction, personDeletedAction, personUpdatedAction, updatePersonAction } from "./people.actions";

@Injectable()
export class PeopleEffects {
    concurrentRequests = 5;

    constructor(
        public service: PeopleService,
        public actions$: Actions
    ) { }

    loadPeople$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadPeopleAction),
            mergeMap((action) => {
                return this.service.getPeople().pipe(
                    map((response) => {
                        return setPeopleAction({ payload: response });
                    })
                );
            }, this.concurrentRequests)
        )
    );

    createPerson$ = createEffect(() =>
        this.actions$.pipe(
            ofType(createPersonAction),
            mergeMap((action) => {
                return this.service.postPerson(action.payload).pipe(
                    map((response) => {
                        return personCreatedAction({ payload: { person: response }});
                    })
                );
            }, this.concurrentRequests)
        )
    );
    updatePerson$ = createEffect(() =>
        this.actions$.pipe(
            ofType(updatePersonAction),
            mergeMap((action) => {
                return this.service.putPerson(action.changes).pipe(
                    map((response) => {
                        return personUpdatedAction({ payload: { changes: response } });
                    })
                );
            }, this.concurrentRequests)
        )
    );
    deletePerson$ = createEffect(() =>
        this.actions$.pipe(
            ofType(deletePersonAction),
            mergeMap((action) => {
                return this.service.deletePerson(action.id).pipe(
                    map((response) => {
                        return personDeletedAction({ payload: { id: action.id } });
                    })
                );
            }, this.concurrentRequests)
        )
    );                 
}
