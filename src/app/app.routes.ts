import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'lista/projetos',
    loadComponent: () => import('./components/lista-projetos/lista-projetos.component')
      .then(m => m.ListaProjetosComponent)
  }
];
