import {CommonModule} from '@angular/common'
import {Component, Input, OnInit} from '@angular/core'
import {RouterLink} from '@angular/router'
import {Store} from '@ngrx/store'
import {combineLatest} from 'rxjs'
import {feedActions} from './store/actions'
import {selectError, selectFeedData, selectIsLoading} from './store/reducers'

@Component({
  selector: 'mc-feed',
  templateUrl: './feed.component.html',
  standalone: true,
  imports: [CommonModule, RouterLink],
})
export class FeedComponent implements OnInit {
  @Input() apiUrl: string = ''

  data$ = combineLatest({
    isLoading: this.store.select(selectIsLoading),
    error: this.store.select(selectError),
    feed: this.store.select(selectFeedData),
  })

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(feedActions.getFeed({url: this.apiUrl}))
  }
}
