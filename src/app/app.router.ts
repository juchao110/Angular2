import { Routes } from "@angular/router";
import { ListComponent } from './list/list.component';
import { HomeComponent } from './home/home.component';

export const rootRouterConfig:Routes=[
    {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
    },
    // {
    //     path:'list',
    //     loadChildren:'./list/list.module#ListModule'
    // },
    {
        path:'home',
        loadChildren:'./home/home.module#HomeModule'
    }
]
