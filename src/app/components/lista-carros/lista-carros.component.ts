import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Carro } from '../../models/carro.interface';

@Component({
  selector: 'app-lista-carros',
  imports: [CommonModule],
  templateUrl: './lista-carros.component.html',
  styleUrl: './lista-carros.component.scss'
})
export class ListaCarrosComponent {
  protected readonly carros = signal<Carro[]>([
    {
      id: 1,
      foto: 'https://images.unsplash.com/photo-1542362567-b07e54358753?w=400&h=300&fit=crop',
      placa: 'ABC-1234',
      ano: 2022
    },
    {
      id: 2,
      foto: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=300&fit=crop',
      placa: 'DEF-5678',
      ano: 2021
    },
    {
      id: 3,
      foto: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=400&h=300&fit=crop',
      placa: 'GHI-9012',
      ano: 2023
    },
    {
      id: 4,
      foto: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400&h=300&fit=crop',
      placa: 'JKL-3456',
      ano: 2020
    },
    {
      id: 5,
      foto: 'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=400&h=300&fit=crop',
      placa: 'MNO-7890',
      ano: 2024
    },
    {
      id: 6,
      foto: 'https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=400&h=300&fit=crop',
      placa: 'PQR-2345',
      ano: 2022
    },
    {
      id: 7,
      foto: 'https://images.unsplash.com/photo-1566473965997-3de9c817e938?w=400&h=300&fit=crop',
      placa: 'STU-6789',
      ano: 2021
    },
    {
      id: 8,
      foto: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=400&h=300&fit=crop',
      placa: 'VWX-0123',
      ano: 2023
    },
    {
      id: 9,
      foto: 'https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=400&h=300&fit=crop',
      placa: 'YZA-4567',
      ano: 2020
    },
    {
      id: 10,
      foto: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=400&h=300&fit=crop',
      placa: 'BCD-8901',
      ano: 2024
    }
  ]);
}
