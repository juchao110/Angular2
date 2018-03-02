import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TimeComponent } from './../time/time.component';

import {homeRoutes} from './home.routes';


@NgModule({
    imports:[
        RouterModule.forChild(homeRoutes)
    ],
    declarations:[
        TimeComponent,
    ],
    providers:[

    ]
})
export class HomeModule{}