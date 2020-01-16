import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RegisterAdminService {
    http: HttpClient;
    url = 'http://localhost:4000/register-admin';
    constructor(httpClient: HttpClient) {
        this.http = httpClient
    }
    insertProduct(username: string, password: string, email: string) {
        const body = {
            username: username,
            password: password,
            email: email,
        }
        return this.http.post(this.url, body)
    }
}