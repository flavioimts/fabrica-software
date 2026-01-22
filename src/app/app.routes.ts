import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'lista/licitacoes',
    loadComponent: () => import('./components/lista-licitacoes/lista-licitacoes.component').then(m => m.ListaLicitacoesComponent)
  },
  {
    path: 'lista/investidores',
    loadComponent: () => import('./components/lista-investidores/lista-investidores.component')
      .then(m => m.ListaInvestidoresComponent)
  },
  {
    path: 'lista/projetos',
    loadComponent: () => import('./components/lista-projetos/lista-projetos.component')
      .then(m => m.ListaProjetosComponent)
  }
];
