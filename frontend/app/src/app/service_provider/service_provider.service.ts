import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class ProviderService {
    http: HttpClient;
    url = 'http://localhost:4000/';
    constructor(httpClient: HttpClient) {
        this.http = httpClient;
    }
    getServiceProviderDetails() {
        return this.http.get(this.url+'service_provider_details-active-user');
    }
    blockServiceProvider(id: number) {
        const body = {
            status: "Blocked"
        }
        return this.http.put(this.url + 'block-service-provider/' + id, body);
    }
    deleteServiceProvider(id: number) {
        return this.http.delete(this.url + 'delete-service-provider/' + id);
    }
    
}