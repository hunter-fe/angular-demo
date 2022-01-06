import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FronteggAppModule, FronteggComponent } from '@frontegg/angular';


@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,

    /** 1. Import Frontegg Module **/
    FronteggAppModule.forRoot(
      {
        contextOptions: {
          baseUrl: 'https://devsuccan.frontegg.com',
        },
      }
    ),
  ],

  /** 2. Add Frontetgg Component to your entryComponents **/
  entryComponents: [FronteggComponent],

  bootstrap: [AppComponent],
})
export class AppModule { }