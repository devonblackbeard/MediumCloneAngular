import {HttpClient} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {map, Observable} from 'rxjs'
import {environment} from 'src/environments/environment.development'
import {ArticleInterface} from '../types/article.interface'
import {ArticleResponseInterface} from '../types/articleResponse.interface'

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  constructor(private http: HttpClient) {}

  getArticle(slug: string): Observable<ArticleInterface> {
    const fullUrl = `${environment.apiUrl}/articles/${slug}`
    return this.http
      .get<ArticleResponseInterface>(fullUrl)
      .pipe(map((response) => response.article))
  }
}
