import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'lista/investidores',
    loadComponent: () => import('./components/lista-investidores/lista-investidores.component')
      .then(m => m.ListaInvestidoresComponent)
  }
];
