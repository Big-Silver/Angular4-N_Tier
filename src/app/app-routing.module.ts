import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ReportComponent } from './components/page/report/report.component';

const appRoutes: Routes = [
  {
    path: 'reports',
    component:  ReportComponent,
  },
  {
    path: '',
    redirectTo: 'reports',
    pathMatch: 'full'
  },
];

@NgModule({
  exports: [
    RouterModule,
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(
        appRoutes,
       {
         useHash: true
       })
  ],
  providers: [
  ],
  schemas: [ NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppRoutingModule { }
