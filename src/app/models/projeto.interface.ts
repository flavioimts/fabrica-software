export interface Projeto {
  id: number;
  nome: string;
  descricao: string;
  cliente: string;
  dataInicio: string;
  dataPrevisaoTermino: string;
  status: 'Em Andamento' | 'Concluído' | 'Planejamento' | 'Pausado';
  responsavel: string;
  orcamento: number;
  percentualConclusao: number;
}
