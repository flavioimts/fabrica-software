import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'lista-produtos',
    loadComponent: () => import('./components/lista-produtos/lista-produtos.component').then(m => m.ListaProdutosComponent)
  },
  {
    path: 'lista-pessoas',
    loadComponent: () => import('./lista-pessoas/lista-pessoas').then(m => m.ListaPessoas)
  },
  {
    path: 'lista-setores',
    loadComponent: () => import('./components/lista-setores/lista-setores.component').then(m => m.ListaSetoresComponent)
  }
];
