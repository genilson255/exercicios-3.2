export default class Conta {
    private _saldo = 0;

    constructor(tot: number){
        this._saldo = tot;
    }

    get saldo(){
        return this._saldo; 
    }

    //set saldo(saldo: number){
    //    this._saldo = saldo;
    //}

    public debito(valor: number): void {
        this._saldo -= valor;
    }
}