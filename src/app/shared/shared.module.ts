/*
    共享模块，里面包含了整个项目公用的一些基础组件和模块
 */
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';



@NgModule({
    imports:[ 
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    declarations:[
        
    ],
    exports:[
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ]
})

export class SharedModule {
    
}