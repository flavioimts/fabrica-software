import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Carro {
  id: number;
  modelo: string;
  placa: string;
  ano: number;
  foto: string;
}

@Component({
  selector: 'app-lista-carros',
  imports: [CommonModule],
  templateUrl: './lista-carros.html',
  styleUrl: './lista-carros.scss'
})
export class ListaCarros {
  protected readonly carros = signal<Carro[]>([
    {
      id: 1,
      modelo: 'Toyota Corolla',
      placa: 'ABC-1234',
      ano: 2022,
      foto: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=400&h=300&fit=crop'
    },
    {
      id: 2,
      modelo: 'Honda Civic',
      placa: 'DEF-5678',
      ano: 2023,
      foto: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?w=400&h=300&fit=crop'
    },
    {
      id: 3,
      modelo: 'Volkswagen Gol',
      placa: 'GHI-9012',
      ano: 2021,
      foto: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400&h=300&fit=crop'
    },
    {
      id: 4,
      modelo: 'Chevrolet Onix',
      placa: 'JKL-3456',
      ano: 2023,
      foto: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=400&h=300&fit=crop'
    },
    {
      id: 5,
      modelo: 'Fiat Argo',
      placa: 'MNO-7890',
      ano: 2022,
      foto: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=300&fit=crop'
    },
    {
      id: 6,
      modelo: 'Hyundai HB20',
      placa: 'PQR-1357',
      ano: 2021,
      foto: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=400&h=300&fit=crop'
    },
    {
      id: 7,
      modelo: 'Renault Kwid',
      placa: 'STU-2468',
      ano: 2020,
      foto: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=400&h=300&fit=crop'
    },
    {
      id: 8,
      modelo: 'Jeep Compass',
      placa: 'VWX-1592',
      ano: 2023,
      foto: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=400&h=300&fit=crop'
    },
    {
      id: 9,
      modelo: 'Ford Ka',
      placa: 'YZA-3570',
      ano: 2021,
      foto: 'https://images.unsplash.com/photo-1542362567-b07e54358753?w=400&h=300&fit=crop'
    },
    {
      id: 10,
      modelo: 'Nissan Kicks',
      placa: 'BCD-7531',
      ano: 2022,
      foto: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?w=400&h=300&fit=crop'
    }
  ]);
}
