import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TransactionService {
    http: HttpClient;
    url = 'http://localhost:4000/transaction';
    constructor(httpClient: HttpClient) {
        this.http = httpClient;
    }
    getServiceTransaction() {
        return this.http.get(this.url);
    }
}