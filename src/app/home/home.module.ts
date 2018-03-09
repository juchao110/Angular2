import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
// import { TimeComponent } from './../time/time.component';
import {LeftMenuComponent} from '../left-menu/left-menu.component';
import { InfoComponent } from '../info/info.component';
import { SharedModule } from '../shared/shared.module';
import { SharecomponentModule } from './../shared/sharecomponent.module';



import {homeRoutes} from './home.routes';


@NgModule({
    imports:[
        SharedModule,
        SharecomponentModule,
        RouterModule.forChild(homeRoutes)
    ],
    declarations:[
        HomeComponent,
        // TimeComponent,
        LeftMenuComponent,
        InfoComponent,
    ],
    providers:[

    ]
})
export class HomeModule{}