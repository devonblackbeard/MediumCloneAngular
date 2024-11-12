import {Component, Input} from '@angular/core'
import {PopularTagType} from '../../types/popularTag.type'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'mc-tag-list',
  templateUrl: './tagList.component.html',
  standalone: true,
  imports: [CommonModule],
})
export class TagListComponent {
  @Input() tags: PopularTagType[] = []
}
