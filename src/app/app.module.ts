import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {LOCALE_ID } from '@angular/core';
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';

import { capitalizadoPipe } from './pipes/capitalizado.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { ContrasenaPipe } from './pipes/contrasena.pipe';
import { TemplateComponent } from './components/template/template.component';
import { DataComponent } from './components/data/data.component';
registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent,
    capitalizadoPipe,
    DomseguroPipe,
    ContrasenaPipe,
    TemplateComponent,
    DataComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
      { provide:LOCALE_ID,useValue: "es" }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
