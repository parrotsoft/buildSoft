import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule) },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule) },
  { path: 'requisicion', loadChildren: () => import('./pages/requisicion/requisicion.module').then( m => m.RequisicionPageModule) },
  { path: 'entrada', loadChildren: () => import('./pages/entrada/entrada.module').then( m => m.EntradaPageModule) },
  { path: 'salida', loadChildren: () => import('./pages/salida/salida.module').then( m => m.SalidaPageModule) },
  { path: 'existencias', loadChildren: () => import('./pages/existencias/existencias.module').then(m => m.ExistenciasPageModule) },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
