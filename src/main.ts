import {bootstrapApplication} from '@angular/platform-browser'
import {provideRouter} from '@angular/router'
import {AppComponent} from './app/app.component'
import {appRoutes} from './app/app.routes'
import {provideState, provideStore} from '@ngrx/store'
import {provideStoreDevtools} from '@ngrx/store-devtools'
import {isDevMode} from '@angular/core'
import {authFeatureKey, authReducer} from './app/auth/store/reducer'
import {provideHttpClient, withInterceptors} from '@angular/common/http'
import {provideEffects} from '@ngrx/effects'
import * as authEffects from './app/auth/store/effects'
import {provideRouterStore, routerReducer} from '@ngrx/router-store'
import { authInterceptor } from './app/shared/services/authInterceptor'
import * as feedEffects from './app/shared/components/feed/store/effects'
import * as popularTagsEffects from './app/shared/components/popularTags/store/effects'
import { feedFeatureKey, feedReducer } from './app/shared/components/feed/store/reducers'
import { popularTagsFeatureKey, popularTagsReducer } from './app/shared/components/popularTags/store/reducers'

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(withInterceptors([authInterceptor])),
    provideRouter(appRoutes),
    provideStore({
      router: routerReducer,
    }),
    provideRouterStore(),
    provideEffects(authEffects, feedEffects, popularTagsEffects),
    provideState(authFeatureKey, authReducer),
    provideState(feedFeatureKey, feedReducer),
    provideState(popularTagsFeatureKey, popularTagsReducer),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true,
      trace: false,
      traceLimit: 75,
    }),
  ],
})
