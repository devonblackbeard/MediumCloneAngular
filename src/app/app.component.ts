import {Component, OnInit} from '@angular/core'
import {RouterOutlet} from '@angular/router'
import { TopBarComponent } from './shared/components/backendErrorMessages/topBar/topBar.component'
import { authActions } from './auth/store/actions'
import { Store } from '@ngrx/store'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [RouterOutlet, TopBarComponent],
})
export class AppComponent implements OnInit {
    constructor(private store: Store) {}

    ngOnInit(): void {
        this.store.dispatch(authActions.getCurrentUser())
    }
}
