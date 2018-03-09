import { HomeComponent } from './home.component';
import { TimeComponent } from '../time/time.component';
import { RouterModule } from '@angular/router';
import { InfoComponent } from '../info/info.component';
import { ListItemComponent } from '../list/list-item/list-item.component';


export const homeRoutes=[
    {
        path:'',
        component:HomeComponent,
        children:[
            {
                path:'',
                redirectTo:'items',
            },
            {
                path:'items',
                component:ListItemComponent
            },
            {
                path:'info',
                component:InfoComponent
            }
        ]
    }
]