import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { FronteggAppModule, FronteggComponent } from '@frontegg/angular';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  @NgModule({
    imports: [
      FronteggAppModule
    ],
    entryComponents: [FronteggComponent],
  })
  class FronteggModule {}

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        BrowserModule,
        RouterTestingModule,
        FronteggModule,
        FronteggAppModule.forRoot({
          contextOptions: {
            baseUrl: 'https://devsuccan.frontegg.com',
          },
        }),
      ],
      declarations: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
