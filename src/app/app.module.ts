import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GenericTableComponent } from "./generic-table/generic-table.component";
import { ConfirmPopupComponent } from "./confirm-popup/confirm-popup.component";
import {GenericFormComponent} from"./generic-form/generic-form.component"

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    GenericTableComponent,
    ConfirmPopupComponent,
    GenericFormComponent
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
