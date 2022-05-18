import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomersComponent } from './components/customers/customers.component';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {ConfirmationService} from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import { PopUpDialogComponent } from './components/pop-up-dialog/pop-up-dialog.component';
import {InputTextModule} from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import {DialogModule} from 'primeng/dialog';

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    PopUpDialogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    DynamicDialogModule,
    AppRoutingModule,
    ButtonModule,
    TableModule,
    BrowserAnimationsModule,
    InputTextModule,
    FormsModule,
    DialogModule],
  exports: [
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  providers: [ConfirmationService,PopUpDialogComponent]
,
  
  bootstrap: [AppComponent]
})
export class AppModule { }
