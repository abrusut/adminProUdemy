import { NgModule } from '@angular/core';

//Rutas
import { PAGES_ROUTING } from './pages.routes';

//Modulos
import { SharedModule } from '../shared/shared.modulo';

//Componentes
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';

@NgModule({
    declarations:[
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component
    ],
    exports:[ 
        DashboardComponent,
        ProgressComponent,
        Graficas1Component
    ],
    imports:[
        SharedModule,
        PAGES_ROUTING
    ]
})
export class PageModule { }