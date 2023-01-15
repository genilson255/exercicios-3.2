// Obs! Toda classe deve ter/possuir um constructor
class Conta {
    private _saldo: number;
    constructor(totSaldo: number){
        this._saldo = totSaldo;
    }
    // Metodo get para acessar o atributo private
    //Pegando os valores/lendo
    get saldo(){
    return this._saldo
    }
    // Atribuição de valores update
    set saldo (s: number){
        this._saldo = s;
    }
}

export default Conta;