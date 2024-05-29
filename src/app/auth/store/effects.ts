import {inject} from '@angular/core'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {AuthService} from '../services/auth.service'
import {authActions} from './actions'
import {catchError, map, of, switchMap} from 'rxjs'
import {CurrentUserInterface} from '../../shared/types/currentUser.interface'
import { HttpErrorResponse } from '@angular/common/http'

export const registerEffect = createEffect(
  (actions$ = inject(Actions), authService = inject(AuthService)) => {
    return actions$.pipe(
      ofType(authActions.register),
      switchMap(({request}) => {
        return authService.register(request).pipe(
          map((currentUser: CurrentUserInterface) => {
            return authActions.registerSuccess({currentUser})
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(authActions.registerFailure({
                errors: errorResponse.error.errors
            }))
          })
        )
      })
    )
  },
  {functional: true}
)
