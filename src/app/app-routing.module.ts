import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ParqueaderoComponent } from './parqueadero/parqueadero.component';
import { IngresarComponent } from './ingresar/ingresar.component';

const routes: Routes = [
  { path: '', redirectTo: '/parqueadero', pathMatch: 'full' },
  { path: 'ingresar', component: IngresarComponent },
  { path: 'parqueadero', component: ParqueaderoComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
