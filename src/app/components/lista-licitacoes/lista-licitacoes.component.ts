import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Licitacao } from '../../models/licitacao.interface';

@Component({
  selector: 'app-lista-licitacoes',
  imports: [CommonModule],
  templateUrl: './lista-licitacoes.component.html',
  styleUrl: './lista-licitacoes.component.scss'
})
export class ListaLicitacoesComponent {
  protected readonly licitacoes = signal<Licitacao[]>([
    {
      id: 1,
      numero: '001/2026',
      objeto: 'Aquisição de equipamentos de informática',
      modalidade: 'Pregão Eletrônico',
      status: 'Em andamento',
      dataAbertura: '15/02/2026',
      valorEstimado: 150000.00,
      orgaoResponsavel: 'Secretaria de Tecnologia',
      dataPublicacao: '05/01/2026',
      prazoEntrega: '30 dias após assinatura do contrato',
      contatoResponsavel: 'João Silva - (11) 98765-4321',
      observacoes: 'Especificações técnicas detalhadas no edital'
    },
    {
      id: 2,
      numero: '002/2026',
      objeto: 'Contratação de serviços de limpeza',
      modalidade: 'Concorrência',
      status: 'Publicado',
      dataAbertura: '20/02/2026',
      valorEstimado: 320000.00,
      orgaoResponsavel: 'Secretaria de Administração',
      dataPublicacao: '10/01/2026',
      prazoEntrega: 'Início imediato após contratação',
      contatoResponsavel: 'Maria Santos - (11) 97654-3210',
      observacoes: 'Contrato por 12 meses com possibilidade de renovação'
    },
    {
      id: 3,
      numero: '003/2026',
      objeto: 'Reforma de prédio público',
      modalidade: 'Tomada de Preços',
      status: 'Em análise',
      dataAbertura: '25/02/2026',
      valorEstimado: 580000.00,
      orgaoResponsavel: 'Secretaria de Obras',
      dataPublicacao: '12/01/2026',
      prazoEntrega: '90 dias corridos',
      contatoResponsavel: 'Pedro Oliveira - (11) 96543-2109',
      observacoes: 'Projeto arquitetônico disponível para consulta'
    },
    {
      id: 4,
      numero: '004/2026',
      objeto: 'Fornecimento de material de escritório',
      modalidade: 'Pregão Presencial',
      status: 'Encerrado',
      dataAbertura: '10/01/2026',
      valorEstimado: 45000.00,
      orgaoResponsavel: 'Secretaria de Suprimentos',
      dataPublicacao: '28/12/2025',
      prazoEntrega: 'Entrega parcelada mensal',
      contatoResponsavel: 'Ana Costa - (11) 95432-1098',
      observacoes: 'Processo concluído com sucesso'
    },
    {
      id: 5,
      numero: '005/2026',
      objeto: 'Aquisição de veículos oficiais',
      modalidade: 'Concorrência',
      status: 'Em andamento',
      dataAbertura: '28/02/2026',
      valorEstimado: 850000.00,
      orgaoResponsavel: 'Secretaria de Transporte',
      dataPublicacao: '15/01/2026',
      prazoEntrega: '60 dias após empenho',
      contatoResponsavel: 'Carlos Mendes - (11) 94321-0987',
      observacoes: 'Especificações técnicas mínimas obrigatórias'
    },
    {
      id: 6,
      numero: '006/2026',
      objeto: 'Serviços de manutenção predial',
      modalidade: 'Pregão Eletrônico',
      status: 'Publicado',
      dataAbertura: '05/03/2026',
      valorEstimado: 180000.00,
      orgaoResponsavel: 'Secretaria de Infraestrutura',
      dataPublicacao: '18/01/2026',
      prazoEntrega: 'Conforme demanda durante 12 meses',
      contatoResponsavel: 'Fernanda Lima - (11) 93210-9876',
      observacoes: 'Regime de empreitada por preço unitário'
    },
    {
      id: 7,
      numero: '007/2026',
      objeto: 'Licenças de software',
      modalidade: 'Dispensa de Licitação',
      status: 'Em análise',
      dataAbertura: '08/03/2026',
      valorEstimado: 95000.00,
      orgaoResponsavel: 'Secretaria de Tecnologia',
      dataPublicacao: '20/01/2026',
      prazoEntrega: 'Ativação imediata',
      contatoResponsavel: 'Roberto Alves - (11) 92109-8765',
      observacoes: 'Fornecedor exclusivo registrado'
    },
    {
      id: 8,
      numero: '008/2026',
      objeto: 'Contratação de vigilância armada',
      modalidade: 'Concorrência',
      status: 'Publicado',
      dataAbertura: '12/03/2026',
      valorEstimado: 420000.00,
      orgaoResponsavel: 'Secretaria de Segurança',
      dataPublicacao: '22/01/2026',
      prazoEntrega: 'Início em até 15 dias após assinatura',
      contatoResponsavel: 'Juliana Rocha - (11) 91098-7654',
      observacoes: 'Exigência de certificações específicas'
    },
    {
      id: 9,
      numero: '009/2026',
      objeto: 'Aquisição de mobiliário escolar',
      modalidade: 'Pregão Eletrônico',
      status: 'Em andamento',
      dataAbertura: '15/03/2026',
      valorEstimado: 280000.00,
      orgaoResponsavel: 'Secretaria de Educação',
      dataPublicacao: '25/01/2026',
      prazoEntrega: '45 dias corridos',
      contatoResponsavel: 'Lucas Martins - (11) 90987-6543',
      observacoes: 'Amostras devem ser apresentadas na fase de habilitação'
    },
    {
      id: 10,
      numero: '010/2026',
      objeto: 'Serviços de consultoria em gestão',
      modalidade: 'Tomada de Preços',
      status: 'Publicado',
      dataAbertura: '20/03/2026',
      valorEstimado: 125000.00,
      orgaoResponsavel: 'Gabinete do Prefeito',
      dataPublicacao: '28/01/2026',
      prazoEntrega: '6 meses de prestação de serviços',
      contatoResponsavel: 'Patricia Ferreira - (11) 89876-5432',
      observacoes: 'Exigência de equipe técnica qualificada'
    }
  ]);

  protected readonly expandedRows = signal<Set<number>>(new Set());

  protected toggleRow(id: number): void {
    const currentExpanded = new Set(this.expandedRows());
    if (currentExpanded.has(id)) {
      currentExpanded.delete(id);
    } else {
      currentExpanded.add(id);
    }
    this.expandedRows.set(currentExpanded);
  }

  protected isRowExpanded(id: number): boolean {
    return this.expandedRows().has(id);
  }

  protected formatCurrency(value: number): string {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  }
}
