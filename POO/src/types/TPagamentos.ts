import { Conta } from '../conta';
type TPagamento {
  conta: Conta;
  valor: number;
  vencimento: Date;
  tipoPagamento?: string; 
}
export default TPagamento