import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastrModule } from 'ngx-toastr';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCollapseModule, NgbDropdownModule } from "@ng-bootstrap/ng-bootstrap";


import { HttpConfigInterceptor } from './interceptor/httpconfig.interceptor';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


const modules = [
  CommonModule,
  BrowserModule,
  BrowserAnimationsModule,
  AppRoutingModule,
  FormsModule,
  ReactiveFormsModule,
  NgxPaginationModule,
  NgxSpinnerModule,
  HttpClientModule,
  ToastrModule.forRoot({
    timeOut: 1000,
    positionClass: 'toast-top-right'
  }),
  // DashboardsModule,
  NgbCollapseModule,
  NgbDropdownModule,
  NgbModule,
]

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    ...modules
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpConfigInterceptor,
    multi: true
  },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
