import { TransactionService } from './transaction.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'transaction',
    templateUrl: 'transaction.component.html',
    styleUrls: ['transaction.component.css']
})

export class TransactionComponent implements OnInit {
    transactions: any[];
    constructor(transactionService: TransactionService) {
        transactionService.getServiceTransaction()
            .subscribe((response) => {
                if (response['status'] == 'success') {
                    this.transactions = response['data']
                } else {
                    alert['Error Occured!']
                }
            })
    }

    ngOnInit() { }
}