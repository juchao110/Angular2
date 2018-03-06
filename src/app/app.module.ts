import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module'

import {rootRouterConfig} from './app.router';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { ChildComponent } from './list/child.component';
import { SaleCenterComponent } from './sale-center/sale-center.component';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ChildComponent,
    SaleCenterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(rootRouterConfig),
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
