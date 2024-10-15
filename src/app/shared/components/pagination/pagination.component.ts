import {Component, Input, OnInit} from '@angular/core'
import { UtilsService } from '../../services/utils.service'
import { CommonModule } from '@angular/common'
import { RouterLink } from '@angular/router'

@Component({
  selector: 'mc-pagination',
  templateUrl: './pagination.component.html',
  standalone: true,
  imports: [CommonModule, RouterLink]
})
export class PaginationComponent implements OnInit {
  @Input() total: number = 0
  @Input() limit: number = 20
  @Input() currentPage: number = 1
  @Input() url: string = ''

  pagesCount: number = 1
  pages: number[] = []

  constructor(private utilsService: UtilsService) {}

  ngOnInit(): void {
    this.pagesCount = Math.ceil(this.total/ this.limit)
    console.log('pagesCount' , this.pagesCount)
    this.pages = this.pagesCount > 0 ? this.utilsService.range(1, this.pagesCount) : []
    
  }


}
