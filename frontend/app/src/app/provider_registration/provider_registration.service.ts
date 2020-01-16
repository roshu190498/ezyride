import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProviderRegistrationService {
    http: HttpClient;
    url = 'http://localhost:4000/provider_registration';
    constructor(httpClient: HttpClient) {
        this.http = httpClient;
    }
    getServiceProviderRegistration() {
        return this.http.get(this.url);
    }
}