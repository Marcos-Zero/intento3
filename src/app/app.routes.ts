import { Routes } from '@angular/router';
import { AppInicioComponent } from './componente/app-inicio/app-inicio.component';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'configuracion',
    loadComponent: () => import('./pagina/configuracion/configuracion.page').then( m => m.ConfiguracionPage)
  },
    
  { path: 'app-app-inicio', 
    component: AppInicioComponent
  }
];
