import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPermissionsModule } from 'ngx-permissions';
import { RouterModule } from '@angular/router';
import { AppComponent } from './containers/app';
import { NotFoundComponent } from './containers/not-found';

export const COMPONENTS = [
  AppComponent,
  NotFoundComponent
];

@NgModule({
  imports: [
    CommonModule,
    NgxPermissionsModule.forChild(),
    RouterModule
  ],
  declarations: [COMPONENTS],
  exports: [COMPONENTS]
})
export class CoreModule { }
