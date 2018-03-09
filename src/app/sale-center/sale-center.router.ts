import { RouterModule } from '@angular/router';
import { SaleCenterComponent } from './sale-center.component';
import { ListComponent } from '../list/list.component';

export const SaleCenterRoutes=[
    {
        path:'',
        component:SaleCenterComponent,
        children:[
            {
                path:'',
                loadChildren:'../list/list.module#ListModule',
            },
            // {
            //     path:'list',
            //     component:ListComponent
            // }
        ]
    }
]