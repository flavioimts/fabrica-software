import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Produto } from '../../models/produto.interface';

@Component({
  selector: 'app-lista-produtos',
  imports: [CommonModule],
  templateUrl: './lista-produtos.component.html',
  styleUrl: './lista-produtos.component.scss'
})
export class ListaProdutosComponent {
  protected readonly produtos = signal<Produto[]>([
    {
      id: 1,
      titulo: 'Notebook Dell Inspiron',
      preco: 3499.99,
      foto: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&h=300&fit=crop'
    },
    {
      id: 2,
      titulo: 'Mouse Logitech MX Master',
      preco: 499.99,
      foto: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=300&fit=crop'
    },
    {
      id: 3,
      titulo: 'Teclado Mecânico Keychron',
      preco: 899.99,
      foto: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=300&fit=crop'
    },
    {
      id: 4,
      titulo: 'Monitor LG UltraWide 29"',
      preco: 1899.99,
      foto: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=300&fit=crop'
    },
    {
      id: 5,
      titulo: 'Webcam Logitech C920',
      preco: 599.99,
      foto: 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=400&h=300&fit=crop'
    },
    {
      id: 6,
      titulo: 'Headset HyperX Cloud',
      preco: 399.99,
      foto: 'https://images.unsplash.com/photo-1577174881658-0f30157732c4?w=400&h=300&fit=crop'
    },
    {
      id: 7,
      titulo: 'SSD Samsung 1TB',
      preco: 699.99,
      foto: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=400&h=300&fit=crop'
    },
    {
      id: 8,
      titulo: 'Mousepad Gamer RGB',
      preco: 149.99,
      foto: 'https://images.unsplash.com/photo-1625948515291-69613efd103f?w=400&h=300&fit=crop'
    },
    {
      id: 9,
      titulo: 'Hub USB-C 7 em 1',
      preco: 299.99,
      foto: 'https://images.unsplash.com/photo-1625948515291-69613efd1037?w=400&h=300&fit=crop'
    },
    {
      id: 10,
      titulo: 'Cadeira Gamer DXRacer',
      preco: 2199.99,
      foto: 'https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=400&h=300&fit=crop'
    }
  ]);
}
