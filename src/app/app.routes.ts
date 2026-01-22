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
    path: 'lista-carros',
    loadComponent: () => import('./lista-carros/lista-carros').then(m => m.ListaCarros)
  }
];
