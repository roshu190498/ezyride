import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ConsumerService {

    http: HttpClient;
    url = 'http://localhost:4000/';
    constructor(httpClient: HttpClient) {
        this.http = httpClient;
    }
    getServiceConsumerDetails() {
        return this.http.get(this.url + 'service_consumer_details-active-user');
    }
    blockServiceConsumer(id: number) {
        const body = {
            status: "Blocked"
        }
        return this.http.put(this.url + 'block-service-consumer/' + id, body);
    }
    deleteServiceConsumer(id: number) {
        return this.http.delete(this.url + 'delete-service-consumer/' + id);
    }

}