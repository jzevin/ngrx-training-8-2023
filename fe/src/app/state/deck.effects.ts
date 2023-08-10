import { catchError, map, mergeMap, of } from 'rxjs';
import { deckActions } from 'src/app/state/deck.actions';

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';

import { ApiService } from '../services/api.service';

@Injectable()
export class DeckEffects {
  constructor(
    private api: ApiService,
    private actions$: Actions,
    private store: Store
  ) {}

  loadSlides$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(deckActions.slides.load),
      mergeMap(() => {
        return this.api.getSlides().pipe(
          map((data) => deckActions.slides.loadSuccess({ payload: data })),
          catchError((error) =>
            of(deckActions.slides.loadFailure({ payload: error }))
          )
        );
      })
    );
  });
}
