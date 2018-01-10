/**
 * Created by abrusutt on 17/10/2017.
 */
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccountSettingComponent } from './account-setting/account-setting.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';

const PAGES_ROUTES: Routes = [
  { 
    path: '', 
    component: PagesComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent, data: { titulo:'Dashboard', description:'Dashboard de la APP' } },
      { path: 'progress', component: ProgressComponent, data: { titulo:'ProgressBars' , description:'ProgressBars de la APP' } },
      { path: 'graficas1', component: Graficas1Component, data: { titulo:'Graficas' , description:'Graficas de la APP' } },
      { path: 'account-settings', component: AccountSettingComponent, data: { titulo:'Ajustes de Tema' , description:'Ajustes de Tema de la APP' }  },
      { path: 'promesas', component: PromesasComponent, data: { titulo:'Promesas' , description:'Promesas de la APP' }  },
      { path: 'rxjs', component: RxjsComponent, data: { titulo:'Rxjs Observables' , description:'Rxjs Observables de la APP' }  },
      
      { path: '', redirectTo: '/dashboard', pathMatch: 'full'}
    ]
  }  
];

export const PAGES_ROUTING: ModuleWithProviders = RouterModule.forChild(PAGES_ROUTES);

