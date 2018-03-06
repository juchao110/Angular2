import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ListItemComponent } from './list-item/list-item.component';

import { ListRoutes } from './list.routes';

@NgModule({
    imports:[
        RouterModule.forChild(ListRoutes)
    ],
    declarations:[
        ListItemComponent
    ],
    providers:[

    ]
})
export class ListModule{}

