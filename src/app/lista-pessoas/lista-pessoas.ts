import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Pessoa {
  id: number;
  nome: string;
  idade: number;
  foto: string;
}

@Component({
  selector: 'app-lista-pessoas',
  imports: [CommonModule],
  templateUrl: './lista-pessoas.html',
  styleUrl: './lista-pessoas.scss'
})
export class ListaPessoas {
  protected readonly pessoas = signal<Pessoa[]>([
    {
      id: 1,
      nome: 'João Silva',
      idade: 28,
      foto: 'https://i.pravatar.cc/150?img=1'
    },
    {
      id: 2,
      nome: 'Maria Santos',
      idade: 35,
      foto: 'https://i.pravatar.cc/150?img=5'
    },
    {
      id: 3,
      nome: 'Pedro Oliveira',
      idade: 42,
      foto: 'https://i.pravatar.cc/150?img=12'
    },
    {
      id: 4,
      nome: 'Ana Costa',
      idade: 31,
      foto: 'https://i.pravatar.cc/150?img=9'
    },
    {
      id: 5,
      nome: 'Carlos Ferreira',
      idade: 29,
      foto: 'https://i.pravatar.cc/150?img=13'
    },
    {
      id: 6,
      nome: 'Juliana Almeida',
      idade: 26,
      foto: 'https://i.pravatar.cc/150?img=20'
    },
    {
      id: 7,
      nome: 'Roberto Souza',
      idade: 38,
      foto: 'https://i.pravatar.cc/150?img=33'
    },
    {
      id: 8,
      nome: 'Fernanda Lima',
      idade: 24,
      foto: 'https://i.pravatar.cc/150?img=25'
    },
    {
      id: 9,
      nome: 'Lucas Rocha',
      idade: 33,
      foto: 'https://i.pravatar.cc/150?img=52'
    },
    {
      id: 10,
      nome: 'Patricia Mendes',
      idade: 30,
      foto: 'https://i.pravatar.cc/150?img=47'
    }
  ]);
}
