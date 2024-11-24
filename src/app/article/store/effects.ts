import {inject} from '@angular/core'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {catchError, map, of, switchMap} from 'rxjs'
import {articleActions} from './actions'
import {ArticleService} from 'src/app/shared/services/article.service'
import { ArticleInterface } from 'src/app/shared/types/article.interface'

export const getArticleEffect = createEffect(
  (actions$ = inject(Actions), articleService = inject(ArticleService)) => {
    return actions$.pipe(
      ofType(articleActions.getArticle),
      switchMap(({url}) => {
        return articleService.getArticle(url).pipe(
          map((article: ArticleInterface) => {
            return articleActions.getArticleSuccess({article})
          }),
          catchError(() => {
            return of(articleActions.getArticleFailure())
          })
        )
      })
    )
  },
  {functional: true}
)
