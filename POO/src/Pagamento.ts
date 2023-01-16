// Deve ser possivel realizar um pagamento com uma conta
// Deve poder pagar com pix, cartao e boleto, sem a possibilidade de parcelamento maior que 10x
// Em caso de pagamento atrasado deve adicionar o valor de 2% de multa sobre o pagamento
// O pagamento tem: {
  // - conta
  // - valor
  // - vencimento
  // - tipo de pagamento
  // - multa
  // - prestacoes: cada uma possui valor e vencimento
//}

import {IPrestacao} from './interface/IPrestacao';
// import {TPagamento} from './types/TPagamento';
export class Pagamento {
  private _conta: number;
  private _valor: number;
  private _vencimento: Date;
  private _descricao?: string;
  private _tipoPagamento: string;
  private _multa: number;
  private _prestacao: IPrestacao[];

  constructo(conta: Conta,
    valor: number,
    vencimento: Date,
    descricao?: string,
    tipoPagamento: string
  ){
    
    this._conta = conta;
    this._valor =  valor;
    this._vencimento = vencimento;
    this._descricao? = descricao || '';
    this._tipoPagamento = tipoPagamento;
    this._multa = 0.2;
    this._prestacao = [];
  }
}