import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'lista-pessoas',
    loadComponent: () => import('./lista-pessoas/lista-pessoas').then(m => m.ListaPessoas)
  }
];
