import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { Payment } from 'src/app/model/payment';
import { Item } from 'src/app/model/item';
import { MatTable } from '@angular/material';

@Component({
  selector: 'app-table-payment',
  templateUrl: './table-payment.component.html',
  styleUrls: ['./table-payment.component.css']
})
export class TablePaymentComponent implements OnInit {
  @Input() payments: Payment[];
  @Output() deletePayment = new EventEmitter();
  @Output() changePaymentItem = new EventEmitter();
  

  @ViewChild(MatTable) table: MatTable<any>;

  displayedColumns: string[] = ['Наименование платежа',
    'Стоимость',
    'Янв',
    "Фев",
    "Мар",
    "Апр",
    "Май",
    "Июн",
    "Июл",
    "Авг",
    "Сен",
    "Окт",
    "Ноя",
    "Дек",
    "Удалить"];
  constructor() { }

  ngOnInit() {
  }
  delete(payment: Payment) {
    this.deletePayment.emit(this.payments.indexOf(payment));
    this.updateTable();
  }

  change(item: Item, payment: Payment) {
    let index = this.payments.indexOf(payment);
    let index1 = this.payments[index].items.indexOf(item);
    this.changePaymentItem.emit([index, index1]);
    this.updateTable();
  }

  updateTable(){
    this.table.renderRows();
  }

  

}
