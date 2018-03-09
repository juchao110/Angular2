/**
 * 共享组件模块
 */
import { NgModule, ModuleWithProviders } from '@angular/core';
import { TimeComponent } from '../time/time.component';
import { ListComponent } from '../list/list.component';
import { ListItemComponent } from '../list/list-item/list-item.component';

import { SharedModule } from './shared.module';

@NgModule({
    imports:[
        SharedModule
    ],
    declarations:[
        TimeComponent,
        ListComponent,
        ListItemComponent
    ],
    exports:[
        TimeComponent,
        ListComponent,
        ListItemComponent
    ]
})

export class SharecomponentModule{}