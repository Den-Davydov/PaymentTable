import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormPaymentComponent } from './component/form-payment/form-payment.component';
import { TablePaymentComponent } from './component/table-payment/table-payment.component';
import { TotalCostPaymentComponent } from './component/total-cost-payment/total-cost-payment.component';
import { HeaderPaymentComponent } from './component/header-payment/header-payment.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatIconModule} from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    FormPaymentComponent,
    TablePaymentComponent,
    TotalCostPaymentComponent,
    HeaderPaymentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
