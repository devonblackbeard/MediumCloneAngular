import {Component} from '@angular/core'
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { register } from '../../store/actions';
import { RegisterRequestInterface } from '../../types/registerRequest.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'mc-register',
  templateUrl: './register.component.html',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink]
})
export class RegisterComponent {
    form = this.fb.nonNullable.group({
        username: ['', Validators.required],
        email: '',
        password: ''
    })

    constructor(private fb: FormBuilder, private store: Store ) {
    }

    onSubmit() {
        console.log('form', this.form.getRawValue)
        const request: RegisterRequestInterface = {
            user: this.form.getRawValue(),
        }
        this.store.dispatch(register({request}))
    }
}
