import { TimeComponent } from '../time/time.component';
import { RouterModule } from '@angular/router';


export const homeRoutes=[
    {
        path:'',
        redirectTo:'time',
        // component:TimeComponent,
    },
    {
        path:'time',
        component:TimeComponent,
    }
]