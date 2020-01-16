import { PromotionService } from './prmotion.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'prmotion',
    templateUrl: 'promotion.component.html',
    styleUrls: ['promotion.component.css']
})

export class PromotionComponent implements OnInit {
    promotions: any[];
    constructor(promotionService: PromotionService) {
        promotionService.getServicePromotion()
            .subscribe((response) => {
                if (response['status'] == 'success') {
                    this.promotions = response['data']
                } else {
                    alert['Error Occured!']
                }
            })
    }
    ngOnInit() { }
}