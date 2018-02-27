import { Routes } from "@angular/router";
import { ListComponent } from './list/list.component';
import { HomeComponent } from './home/home.component';

export const rootRouterConfig:Routes=[
    {
        path:'',
        redirectTo:'/',
        pathMatch:'full'
    },
    {
        path:'list/:id',
        component:ListComponent
    },
    {
        path:'home/:id',
        component:HomeComponent
    }
]
