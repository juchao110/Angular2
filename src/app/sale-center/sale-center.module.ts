import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SaleCenterRoutes } from './sale-center.router';
import { SaleCenterComponent } from './sale-center.component';
import { ListComponent } from '../list/list.component';
import { SharedModule } from '../shared/shared.module';
import { SharecomponentModule } from '../shared/sharecomponent.module';


@NgModule({
    imports:[
        // SharedModule,
        SharecomponentModule,
        RouterModule.forChild(SaleCenterRoutes)
    ],
    declarations:[
        SaleCenterComponent,
        // ListComponent
    ],
    providers:[

    ]
})

export class SaleCenterModule{}