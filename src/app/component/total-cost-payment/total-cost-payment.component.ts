import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-total-cost-payment',
  templateUrl: './total-cost-payment.component.html',
  styleUrls: ['./total-cost-payment.component.css']
})
export class TotalCostPaymentComponent implements OnInit {
  @Input() totalCost:number;
  constructor() { }

  ngOnInit() {
  }

}
