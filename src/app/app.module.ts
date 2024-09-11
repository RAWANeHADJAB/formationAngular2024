import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GenericTableComponent } from "./generic-table/generic-table.component";
import { ConfirmPopupComponent } from "./confirm-popup/confirm-popup.component";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GenericTableComponent,
    ConfirmPopupComponent
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
