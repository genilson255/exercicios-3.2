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

// type TPagamento {
//   conta: Conta;
//   valor: number;
//   vencimento: Date;
//   tipoPagamento: string; 
//   descricao?: string;
// }

import {IPrestacao} from './interface/IPrestacao';
// import {TPagamento} from './types/TPagamento';
export class Pagamento {
  private _conta: number;
  private _valor: number;
  private _vencimento: Date;
  private _descricao?: string;
  private _tipoPagamento: string;
  private _multa: number;
  private _prestacoes: IPrestacao[];

  constructo(params: TPagamento){    
    this._conta = params.conta;
    this._valor =  params.valor;
    this._vencimento = params.vencimento;
    this._descricao? = params.descricao || '';
    this._tipoPagamento = params.tipoPagamento;
    this._multa = 0.2;
    this._prestacoes = [];
  }
  get valor(){
    return this._valor;
  }
    set valor(v: number){
      this._valor = v;
  }
  get vencimento(){
    return this._vencimento;
  }
  set vencimento(v: Date){
    this._vencimento = v;
  }
  get tipoPagamento(){
    return this._tipoPagamento;
  }
  set tipoPagamento(tp: string){
    this._tipoPagamento: tp;
  }
  get multa(){
    return this._multa;
  }
  get descricao(){
    return this._descricao;
  }
  set descricao(d: string){
    this._descricao = d;
  }
  get prestacao(){
    return this._prestacoes;
  }
  set prestacao(p: IPrestacao[]){
    if(p.length > 10){
      throw new Error(`Parcelamento maior que o permitido`);      
    }
    this._prestacoes = p;
  }
  get conta(): Conta{
    return this._conta;
  }
 
}  
