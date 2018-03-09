import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { SharecomponentModule } from './shared/sharecomponent.module';

import {rootRouterConfig} from './app.router';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(rootRouterConfig),
    SharedModule,
    SharecomponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
