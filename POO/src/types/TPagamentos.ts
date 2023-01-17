import { Conta } from '../conta';
type TPagamento {
  conta: Conta;
  valor: number;
  vencimento: Date;
  tipoPagamento: string; 
  descricao?: string;
}
export default TPagamento