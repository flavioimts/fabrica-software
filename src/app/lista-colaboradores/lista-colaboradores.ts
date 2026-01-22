import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Colaborador {
  id: number;
  nome: string;
  cargo: string;
  departamento: string;
  foto: string;
  email: string;
}

@Component({
  selector: 'app-lista-colaboradores',
  imports: [CommonModule],
  templateUrl: './lista-colaboradores.html',
  styleUrl: './lista-colaboradores.scss'
})
export class ListaColaboradores {
  protected readonly colaboradores = signal<Colaborador[]>([
    {
      id: 1,
      nome: 'André Souza',
      cargo: 'Desenvolvedor Full Stack',
      departamento: 'Tecnologia',
      foto: 'https://i.pravatar.cc/150?img=14',
      email: 'andre.souza@empresa.com'
    },
    {
      id: 2,
      nome: 'Beatriz Costa',
      cargo: 'UX Designer',
      departamento: 'Design',
      foto: 'https://i.pravatar.cc/150?img=45',
      email: 'beatriz.costa@empresa.com'
    },
    {
      id: 3,
      nome: 'Carlos Pereira',
      cargo: 'Gerente de Projetos',
      departamento: 'Gestão',
      foto: 'https://i.pravatar.cc/150?img=15',
      email: 'carlos.pereira@empresa.com'
    },
    {
      id: 4,
      nome: 'Diana Martins',
      cargo: 'Analista de Dados',
      departamento: 'Business Intelligence',
      foto: 'https://i.pravatar.cc/150?img=32',
      email: 'diana.martins@empresa.com'
    },
    {
      id: 5,
      nome: 'Eduardo Silva',
      cargo: 'DevOps Engineer',
      departamento: 'Infraestrutura',
      foto: 'https://i.pravatar.cc/150?img=51',
      email: 'eduardo.silva@empresa.com'
    },
    {
      id: 6,
      nome: 'Fernanda Oliveira',
      cargo: 'Product Owner',
      departamento: 'Produto',
      foto: 'https://i.pravatar.cc/150?img=27',
      email: 'fernanda.oliveira@empresa.com'
    },
    {
      id: 7,
      nome: 'Gabriel Rocha',
      cargo: 'Desenvolvedor Mobile',
      departamento: 'Tecnologia',
      foto: 'https://i.pravatar.cc/150?img=68',
      email: 'gabriel.rocha@empresa.com'
    },
    {
      id: 8,
      nome: 'Helena Santos',
      cargo: 'Scrum Master',
      departamento: 'Gestão',
      foto: 'https://i.pravatar.cc/150?img=48',
      email: 'helena.santos@empresa.com'
    },
    {
      id: 9,
      nome: 'Igor Lima',
      cargo: 'Arquiteto de Software',
      departamento: 'Tecnologia',
      foto: 'https://i.pravatar.cc/150?img=60',
      email: 'igor.lima@empresa.com'
    },
    {
      id: 10,
      nome: 'Julia Alves',
      cargo: 'QA Engineer',
      departamento: 'Qualidade',
      foto: 'https://i.pravatar.cc/150?img=38',
      email: 'julia.alves@empresa.com'
    }
  ]);
}
