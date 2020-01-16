import { ComplaintService } from './complaint.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'complaint',
    templateUrl: 'complaint.component.html',
    styleUrls: ['complaint.component.css']
})

export class ComplaintComponent implements OnInit {
    complaints: any[];
    constructor(complaintService: ComplaintService) {
        complaintService.getServiceComplaintBox()
            .subscribe((response) => {
                if (response['status'] == 'success') {
                    this.complaints = response['data']
                } else {
                    alert['Error Occured!']
                }
            })
    }

    ngOnInit() { }
}