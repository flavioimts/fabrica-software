import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Projeto } from '../../models/projeto.interface';

@Component({
  selector: 'app-lista-projetos',
  imports: [CommonModule],
  templateUrl: './lista-projetos.component.html',
  styleUrl: './lista-projetos.component.scss'
})
export class ListaProjetosComponent {
  protected readonly projetos = signal<Projeto[]>([
    {
      id: 1,
      nome: 'Sistema de Gestão Empresarial',
      descricao: 'Desenvolvimento de sistema ERP completo para gestão empresarial',
      cliente: 'Tech Solutions Ltda',
      dataInicio: '2025-01-15',
      dataPrevisaoTermino: '2025-07-30',
      status: 'Em Andamento',
      responsavel: 'Ana Silva',
      orcamento: 250000.00,
      percentualConclusao: 45
    },
    {
      id: 2,
      nome: 'Aplicativo Mobile de Vendas',
      descricao: 'App mobile para vendedores externos com sincronização offline',
      cliente: 'Comercial Brasil SA',
      dataInicio: '2025-02-01',
      dataPrevisaoTermino: '2025-05-20',
      status: 'Em Andamento',
      responsavel: 'Carlos Mendes',
      orcamento: 120000.00,
      percentualConclusao: 30
    },
    {
      id: 3,
      nome: 'Portal de E-commerce',
      descricao: 'Plataforma completa de vendas online com integração de pagamentos',
      cliente: 'Loja Virtual ABC',
      dataInicio: '2024-10-01',
      dataPrevisaoTermino: '2025-01-31',
      status: 'Concluído',
      responsavel: 'Mariana Costa',
      orcamento: 180000.00,
      percentualConclusao: 100
    },
    {
      id: 4,
      nome: 'Sistema de RH e Folha de Pagamento',
      descricao: 'Sistema integrado para gestão de recursos humanos e folha',
      cliente: 'Indústrias XYZ',
      dataInicio: '2025-03-01',
      dataPrevisaoTermino: '2025-09-15',
      status: 'Planejamento',
      responsavel: 'Roberto Lima',
      orcamento: 300000.00,
      percentualConclusao: 10
    },
    {
      id: 5,
      nome: 'Dashboard Analítico BI',
      descricao: 'Dashboard de Business Intelligence com análises em tempo real',
      cliente: 'Consultoria Estratégica',
      dataInicio: '2025-01-20',
      dataPrevisaoTermino: '2025-04-30',
      status: 'Em Andamento',
      responsavel: 'Juliana Santos',
      orcamento: 95000.00,
      percentualConclusao: 60
    },
    {
      id: 6,
      nome: 'Sistema de Logística',
      descricao: 'Sistema para controle de frota e rastreamento de entregas',
      cliente: 'TransLog Transportes',
      dataInicio: '2024-11-15',
      dataPrevisaoTermino: '2025-02-28',
      status: 'Pausado',
      responsavel: 'Pedro Oliveira',
      orcamento: 150000.00,
      percentualConclusao: 25
    },
    {
      id: 7,
      nome: 'Plataforma de Ensino Online',
      descricao: 'Plataforma EAD com videoaulas e acompanhamento de progresso',
      cliente: 'Instituto de Educação',
      dataInicio: '2024-09-01',
      dataPrevisaoTermino: '2024-12-31',
      status: 'Concluído',
      responsavel: 'Fernanda Alves',
      orcamento: 200000.00,
      percentualConclusao: 100
    },
    {
      id: 8,
      nome: 'Sistema de Controle de Estoque',
      descricao: 'Sistema WMS para gestão de armazéns e controle de estoque',
      cliente: 'Atacadista Nacional',
      dataInicio: '2025-02-15',
      dataPrevisaoTermino: '2025-06-30',
      status: 'Em Andamento',
      responsavel: 'Lucas Ferreira',
      orcamento: 175000.00,
      percentualConclusao: 35
    },
    {
      id: 9,
      nome: 'API de Integração Bancária',
      descricao: 'API REST para integração com serviços bancários e pagamentos',
      cliente: 'Fintech Innovations',
      dataInicio: '2025-03-10',
      dataPrevisaoTermino: '2025-08-20',
      status: 'Planejamento',
      responsavel: 'Beatriz Rocha',
      orcamento: 220000.00,
      percentualConclusao: 5
    },
    {
      id: 10,
      nome: 'Sistema de CRM',
      descricao: 'Customer Relationship Management para gestão de clientes e vendas',
      cliente: 'Vendas Pro Ltda',
      dataInicio: '2025-01-05',
      dataPrevisaoTermino: '2025-05-15',
      status: 'Em Andamento',
      responsavel: 'Ricardo Martins',
      orcamento: 135000.00,
      percentualConclusao: 50
    }
  ]);
}
