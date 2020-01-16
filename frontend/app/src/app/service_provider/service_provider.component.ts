import { ProviderService } from './service_provider.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'service-provider',
    templateUrl: 'service_provider.component.html',
    styleUrls: ['service_provider.component.css']
})

export class ServiceProviderComponent implements OnInit {
    service_provider_details: any[];
    constructor(private providerService: ProviderService) {
        this.loadAllData()
    }
    loadAllData() {
        this.providerService.getServiceProviderDetails()
            .subscribe((response) => {
                if (response['status'] == 'success') {
                    this.service_provider_details = response['data']
                } else {
                    alert['Error Occured!']
                }
            })
    }
    onBlock(id: number) {
        this.providerService.blockServiceProvider(id)
            .subscribe((response) => {
                console.log(response)
                if (response['status'] == 'success') {
                    this.service_provider_details = response['data']
                    this.loadAllData()
                } else {
                    alert['Error Occured!']
                }
            })
    }
    onDelete(id: number) {
        if (confirm('Are you sure to delete?')) {
            this.providerService.deleteServiceProvider(id)
                .subscribe((response) => {
                    if (response['status'] == 'success') {
                        this.service_provider_details = response['data']
                        this.loadAllData()
                    } else {
                        alert['Error Occured!']
                    }
                })
        }
    }
    ngOnInit() { }
}