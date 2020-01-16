import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LoginService {
    url = 'http://localhost:4000/login'
    constructor(private http: HttpClient) { }
    login(username: string, password: string) {
        const body = {
            username: username,
            password: password
        }
        return this.http.post(this.url, body)
    }
}