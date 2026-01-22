import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Setor } from '../../models/setor.interface';

@Component({
  selector: 'app-lista-setores',
  imports: [CommonModule],
  templateUrl: './lista-setores.component.html',
  styleUrl: './lista-setores.component.scss'
})
export class ListaSetoresComponent {
  protected readonly setores = signal<Setor[]>([
    {
      id: 1,
      nome: 'Recursos Humanos',
      descricao: 'Gestão de pessoas e recrutamento',
      responsavel: 'Maria Silva',
      numeroFuncionarios: 15
    },
    {
      id: 2,
      nome: 'Tecnologia da Informação',
      descricao: 'Desenvolvimento e suporte de sistemas',
      responsavel: 'João Santos',
      numeroFuncionarios: 25
    },
    {
      id: 3,
      nome: 'Financeiro',
      descricao: 'Controle financeiro e contabilidade',
      responsavel: 'Ana Costa',
      numeroFuncionarios: 12
    },
    {
      id: 4,
      nome: 'Marketing',
      descricao: 'Comunicação e estratégias de mercado',
      responsavel: 'Pedro Oliveira',
      numeroFuncionarios: 18
    },
    {
      id: 5,
      nome: 'Vendas',
      descricao: 'Gestão comercial e relacionamento com clientes',
      responsavel: 'Carla Mendes',
      numeroFuncionarios: 30
    },
    {
      id: 6,
      nome: 'Produção',
      descricao: 'Fabricação e controle de qualidade',
      responsavel: 'Roberto Lima',
      numeroFuncionarios: 45
    },
    {
      id: 7,
      nome: 'Logística',
      descricao: 'Gestão de estoque e distribuição',
      responsavel: 'Fernanda Rocha',
      numeroFuncionarios: 20
    },
    {
      id: 8,
      nome: 'Jurídico',
      descricao: 'Assessoria legal e compliance',
      responsavel: 'Ricardo Alves',
      numeroFuncionarios: 8
    },
    {
      id: 9,
      nome: 'Qualidade',
      descricao: 'Controle e garantia de qualidade',
      responsavel: 'Juliana Martins',
      numeroFuncionarios: 10
    },
    {
      id: 10,
      nome: 'Pesquisa e Desenvolvimento',
      descricao: 'Inovação e desenvolvimento de produtos',
      responsavel: 'Lucas Ferreira',
      numeroFuncionarios: 22
    }
  ]);
}
