import { ConsumerService } from './service_consumer.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'service-consumer',
    templateUrl: 'service_consumer.component.html',
    styleUrls: ['service_consumer.component.css']

})

export class ServiceConsumerComponent implements OnInit {
    service_consumer_details: any[];
    constructor(private consumerService: ConsumerService) {
        this.loadAllData()
    }
    loadAllData() {
        this.consumerService.getServiceConsumerDetails()
            .subscribe((response) => {
                if (response['status'] == 'success') {
                    this.service_consumer_details = response['data']
                } else {
                    alert['Error Occured!']
                }
            })
    }
    onBlock(id: number) {
        if (confirm('Do you want to block ?')) {
            this.consumerService.blockServiceConsumer(id)
                .subscribe((response) => {
                    if (response['status'] == 'success') {
                        this.service_consumer_details = response['data']
                        this.loadAllData()
                    } else {
                        alert['Error Occured!']
                    }
                })
        }
    }
    onDelete(id: number) {
        if (confirm('Are you sure to delete?')) {
            this.consumerService.deleteServiceConsumer(id)
                .subscribe((response) => {
                    if (response['status'] == 'success') {
                        this.service_consumer_details = response['data']
                        this.loadAllData()
                    } else {
                        alert['Error Occured!']
                    }
                })
        }
    }
    ngOnInit() { }
}