import { Component, OnInit, ViewChild } from '@angular/core';

import { Payment } from 'src/app/model/payment';
import { PaymentService } from 'src/app/servies/payment.service';
import { MatTable } from '@angular/material';
import { TablePaymentComponent } from '../table-payment/table-payment.component';

@Component({
  selector: 'app-form-payment',
  templateUrl: './form-payment.component.html',
  styleUrls: ['./form-payment.component.css']
})
export class FormPaymentComponent implements OnInit {

  payments: Payment[];
  totalCost: number = 0;
  @ViewChild(TablePaymentComponent)
  private table: TablePaymentComponent;

  constructor(private paymentService: PaymentService) { }

  ngOnInit() {
    this.getPayments();
  }

  getPayments(): void {
    this.paymentService.getPayments()
      .subscribe(data => {
        this.payments = data
        this.calculationCost();
      });
   
  }

  addPayment(payment: Payment) {
    this.paymentService.addPayment(payment)
      .subscribe(data => {
        this.payments = data
        this.calculationCost();
        this.table.updateTable();
      });
  }


  deletePayment(index: number) {
    this.paymentService.deletePayment(index)
      .subscribe(data => {
        this.payments = data
        this.calculationCost();
      });
  }

  changePaymentItem(index: number[]) {
    this.paymentService.changePaymentItem(index)
      .subscribe(data => {
        this.payments = data
        this.calculationCost();
      });
  }

  calculationCost() {
    this.paymentService.calculationCost()
      .subscribe(data => this.totalCost = data);
  }
}
