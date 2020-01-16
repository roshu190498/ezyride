import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PromotionService {
    http: HttpClient;
    url = 'http://localhost:4000/promotion';
    constructor(httpClient: HttpClient) {
        this.http = httpClient;
    }
    getServicePromotion() {
        return this.http.get(this.url);
    }
}