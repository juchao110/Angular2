import { RouterModule } from '@angular/router';
import {ListItemComponent} from './list-item/list-item.component';

export const ListRoutes=[
    {
        path:'',
        redirectTo:'items',
        pathMatch:'full'
    },
    {
        path:'items',
        component:ListItemComponent,
    }
]