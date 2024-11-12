import {Component} from '@angular/core'
import {BannerComponent} from 'src/app/shared/components/banner/banner.component'
import { ErrorMessageComponent } from 'src/app/shared/components/errorMessage/errorMessage.component'
import {FeedComponent} from 'src/app/shared/components/feed/feed.component'
import { PopularTagsComponent } from "../../shared/components/popularTags/popularTags.component";

@Component({
  selector: 'mc-global-feed',
  templateUrl: './globalFeed.component.html',
  standalone: true,
  imports: [FeedComponent, BannerComponent, ErrorMessageComponent, PopularTagsComponent],
})
export class GlobalFeedComponent {
  apiUrl = '/articles'
}
