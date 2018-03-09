import { RouterModule } from '@angular/router';
import { ListDetailComponent } from './list-detail/list-detail.component';
import { ListComponent } from './list.component';

export const ListRoutes=[
    {
        path:'',
        redirectTo:'list',
    },
    {
        path:'list',
        component:ListComponent

    },
    {
        path:'list/detail/:id',
        component:ListDetailComponent

    }
]