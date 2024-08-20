import {routerNavigationAction} from '@ngrx/router-store'
import {createFeature, createReducer, on} from '@ngrx/store'
import {feedActions} from './actions'
import { FeedStateInterface } from '../types/feedState.interface'

const initialState: FeedStateInterface = {
  isLoading: false,
  error: null,
  data: null,
}

const feedFeature = createFeature({
  name: 'feed',
  reducer: createReducer(
    initialState,
    on(feedActions.getFeed, (state) => ({...state, isLoading: true})),
    on(feedActions.getFeedSuccess, (state, action) => ({
      ...state,
      isLoading: false,
      data: action.feed,
    })),
    on(feedActions.getFeedFailure, (state) => ({...state, isLoading: false})),
    on(routerNavigationAction, () => initialState)
  ),
})

export const {
  name: feedFeatureKey,
  reducer: feedReducer,
  selectIsLoading,
  selectError,
  selectData: selectFeedData,
} = feedFeature
