import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import {rootRouterConfig} from './app.router';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { ChildComponent } from './list/child.component';
// import { HomeComponent } from './home/home.component';
// import { TimeComponent } from './time/time.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ChildComponent,
    // HomeComponent,
    // TimeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(rootRouterConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
