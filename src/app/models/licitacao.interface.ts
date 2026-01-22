export interface Licitacao {
  id: number;
  numero: string;
  objeto: string;
  modalidade: string;
  status: string;
  dataAbertura: string;
  valorEstimado: number;
  orgaoResponsavel: string;
  dataPublicacao: string;
  prazoEntrega: string;
  contatoResponsavel: string;
  observacoes: string;
}
