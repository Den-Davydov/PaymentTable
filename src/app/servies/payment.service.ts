import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Payment } from '../model/payment';
import { PAYMENTS } from 'src/app/model/somePayments';
import { Item } from '../model/item';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  payments: Payment[];

  constructor() { }

  getPayments(): Observable<Payment[]> {
    this.payments = PAYMENTS;
    return of(this.payments);
  }

  addPayment(payment: Payment): Observable<Payment[]> {
    this.payments.push(payment);
    return of(this.payments);
  }

  calculationCost(): Observable<number> {
    let totalCost = 0;
    this.payments.forEach(value => {
      let k = 0;
      value.items.forEach(element => {
        if (element.checked) { k++ }
      });
      totalCost += k * value.cost;
    })
    return of(totalCost);
  }

  deletePayment(index: number): Observable<Payment[]> {
    this.payments.splice(index, 1);
    return of(this.payments);
  }

  changePaymentItem(index: number[]): Observable<Payment[]> {
    this.payments[index[0]].items[index[1]].checked = !this.payments[index[0]].items[index[1]].checked;
    return of(this.payments);
  }

  createNewPayment(title: string, cost: number): Payment {
    let newItems: Item[] = [];
    for (var i = 0; i < 12; i++) {
      newItems.push({ checked: false, id: i })
    }

    let newPayment: Payment = {
      title: title,
      cost: cost,
      items: newItems
    }
    return newPayment;
  }

}
