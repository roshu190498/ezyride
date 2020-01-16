import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ComplaintService {
    http: HttpClient;
    url = 'http://localhost:4000/complaint_box';
    constructor(httpClient: HttpClient) {
        this.http = httpClient;
    }
    getServiceComplaintBox() {
        return this.http.get(this.url);
    }
}