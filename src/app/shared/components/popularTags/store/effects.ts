import {inject} from '@angular/core'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {catchError, map, of, switchMap} from 'rxjs'
import { PopularTagService } from '../services/popularTag.service'
import { popularTagsActions } from './actions'
import { PopularTagType } from 'src/app/shared/types/popularTag.type'

export const getPopularTagsEffect = createEffect(
  (actions$ = inject(Actions), popularTagsService = inject(PopularTagService)) => {
    return actions$.pipe(
      ofType(popularTagsActions.getPopularTags),
      switchMap(() => {
        return popularTagsService.getPopularTags().pipe(
          map((popularTags: PopularTagType[]) => {
            return popularTagsActions.getPopularTagsSuccess({popularTags})
          }),
          catchError(() => {
            return of(popularTagsActions.getPopularTagsFailure())
          })
        )
      })
    )
  },
  {functional: true}
)
