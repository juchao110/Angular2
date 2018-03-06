import { HomeComponent } from './home.component';
import { TimeComponent } from '../time/time.component';
import { RouterModule } from '@angular/router';
import { InfoComponent } from '../info/info.component'


export const homeRoutes=[
    {
        path:'',
        component:HomeComponent,
        children:[
            {
                path:'',
                loadChildren:'../list/list.module#ListModule'
            },
            {
                path:'info',
                component:InfoComponent
            }
        ]
    }
]