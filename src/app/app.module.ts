import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { DiasComponent } from './datepicker/dias/dias.component';
import { MesesComponent } from './datepicker/meses/meses.component';
import { AnosComponent } from './datepicker/anos/anos.component';

@NgModule({
  declarations: [
    AppComponent,
    DatepickerComponent,
    DiasComponent,
    MesesComponent,
    AnosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
