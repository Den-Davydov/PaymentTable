import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { ErrorStateMatcher } from '@angular/material';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup } from '@angular/forms';
import { PaymentService } from 'src/app/servies/payment.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-header-payment',
  templateUrl: './header-payment.component.html',
  styleUrls: ['./header-payment.component.css']
})
export class HeaderPaymentComponent implements OnInit {

  constructor(private paymentService: PaymentService) { }

  ngOnInit() {
  }
  @Output() addPayment = new EventEmitter();

  matcher = new MyErrorStateMatcher();



  titleFormControl = new FormControl('', [
    Validators.required]);

  costFormControl = new FormControl('',
    Validators.compose([
      Validators.required,
      Validators.min(0),
      Validators.pattern('^([1-9][0-9]*)$')]
    ));

  paymentForm = new FormGroup({
    titleFormControl: this.titleFormControl,
    costFormControl: this.costFormControl
  })



  onSubmit() {
    let title = this.titleFormControl.value;
    let cost = this.costFormControl.value;
    this.titleFormControl.setValue('');
    this.costFormControl.setValue('');

    this.addPayment.emit(
      this.paymentService.createNewPayment(title, cost)
    );
  }


}
