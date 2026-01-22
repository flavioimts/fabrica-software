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
  },
  {
    path: 'lista-carros',
    loadComponent: () => import('./components/lista-carros/lista-carros.component').then(m => m.ListaCarrosComponent)
  },
  {
    path: 'lista-colaboradores',
    loadComponent: () => import('./lista-colaboradores/lista-colaboradores').then(m => m.ListaColaboradores)
  }
];
