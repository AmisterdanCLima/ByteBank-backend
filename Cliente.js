export class Cliente{

    // O construtor serve para que possamos chamar essa Classe direto no Index, sem precisar criar um objeto para cada cliente.
    constructor(nome,cpf,rg){
        this._nome = nome;
        this._cpf = cpf;
        this._rg = rg;
    }

    // Get serve para q possamos chamar o nome da propriedade no Index sem precisar diretamente crar uma variável
    get nome(){
        return this._nome
    }

    get cpf(){
        return this._cpf
    }

    get rg(){
        return this._rg
    }
}