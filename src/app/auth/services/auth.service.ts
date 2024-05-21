import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { RegisterRequestInterface } from "../types/registerRequest.interface";
import { Observable, map } from "rxjs";
import { CurrentUserInterface } from "../types/currentUser.interface";
import { AuthResponseInterface } from "../types/authResponse.interface";

@Injectable({
    providedIn: 'root',
})

export class AuthService {
    constructor(private http: HttpClient) {}

    register(data: RegisterRequestInterface) : Observable<CurrentUserInterface>{
        const url = 'https://api.realworl.io.api/users';
        return this.http
        .post<AuthResponseInterface>(url, data)
        .pipe(map(response => response.user));
    }
}