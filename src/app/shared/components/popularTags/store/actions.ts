import {createActionGroup, emptyProps, props} from '@ngrx/store'
import { PopularTagType } from 'src/app/shared/types/popularTag.type'

export const popularTagsActions = createActionGroup({
  source: 'popular tags',
  events: {
    'Get popular tags': emptyProps(),
    'Get popular tags success': props<{popularTags: PopularTagType[]}>(),
    'Get popular tags failure': emptyProps,
  },
})
