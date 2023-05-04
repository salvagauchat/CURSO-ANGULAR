import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { ProductsModule } from './products/products.module';

//configuracion del locale de la app
import localeEsAR from '@angular/common/locales/es-AR'
import localeFrCa from '@angular/common/locales/fr-CA'

import { registerLocaleData } from "@angular/common";

registerLocaleData(localeEsAR);
registerLocaleData(localeFrCa);


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    ProductsModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue:'es-AR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
