export default class Conta {
    private _saldo = 0;

    constructor(s: number){
        this.saldo = s;
    }
    get saldo(){
        const nome = 'Gerente';
        if (!nome) {
            console.log('Cai fora');            
        }
        return this._saldo;
    }
    set saldo(value: number){
        this._saldo = 10000;
    }
}