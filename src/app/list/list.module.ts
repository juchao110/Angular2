import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ListDetailComponent } from './list-detail/list-detail.component';
import { ListComponent } from './list.component';
import { SharedModule } from '../shared/shared.module';
import { SharecomponentModule } from './../shared/sharecomponent.module';
import { ListService } from './service/list.service';



import { ListRoutes } from './list.routes';

@NgModule({
    imports:[
        // SharedModule,
        SharecomponentModule,
        RouterModule.forChild(ListRoutes)
    ],
    declarations:[
        ListDetailComponent,
        // ListComponent
    ],
    providers:[
        ListService
    ]
})
export class ListModule{}

