import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'lista/licitacoes',
    loadComponent: () => import('./components/lista-licitacoes/lista-licitacoes.component').then(m => m.ListaLicitacoesComponent)
  }
];
