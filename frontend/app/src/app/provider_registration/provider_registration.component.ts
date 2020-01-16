import { Component, OnInit } from '@angular/core';
import { ProviderRegistrationService } from './provider_registration.service';

@Component({
    selector: 'provider-registration',
    templateUrl: 'provider_registration.component.html',
    styleUrls: ['provider_registration.component.css']
})

export class ProviderRegistrationComponent implements OnInit {
    serviceReg: any[];
    constructor(serviceProviderRegService: ProviderRegistrationService) {
        serviceProviderRegService.getServiceProviderRegistration()
            .subscribe((response) => {
                if (response['status'] == 'success') {
                    this.serviceReg = response['data']
                } else {
                    alert['Error Occured!']
                }
            })
    }

    ngOnInit() { }
}