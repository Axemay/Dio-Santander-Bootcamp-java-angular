"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function printaObjeto(pessoa) {
    console.log(pessoa);
}
printaObjeto({
    name: "Bruce Wayne",
    vulgo: "batman"
});
// Tipos primitivos: boolean, number, string
let ligado = true;
let numero = 10;
let numeroDecimal = 19.99;
let nome = "Maria";
//null - só aceita nulo
let nulo = null;
// undefined - só aceita undefined
let indefinido = undefined;
//Tipos abrangentes: any, void
// any -> aceita qualquer tipo 
// void -> não teem retorno
//objeto - sem previsibilidade
let produto = {
    name: "Capa",
    cidade: "sp",
    estoque: true,
    preco: 30.50,
};
let meuProduto = {
    nome: "Playstation 5",
    preco: 4000.00,
    estoque: false,
};
// arrays
let compras = ["Pão", "Queijo", "Presunto", "Leite"];
let feira = ["Abacate", "Laranja", "Alface", "Batata"];
// array de multitipos
let infos = ["Banana", 10, "Laranja", 5];
// Tuplas - vetores de mais de um tipo com lugar certo para cada coisa
let boleto = ["Conta Água", 67.50, 32165487813];
// métodos de arrays são os mesmos do javascript
// Data
let aniversario = new Date("2022-12-01 05:00");
console.log(aniversario.toString());
// Função
// a função recebe dois parâmetros do tipo number e retorna um tipo number
function addNumber(x, y) {
    return x + y;
}
;
//Para que uma variável receba o retorno da função, ela precisa ser do mesmo tipo do retorno
let soma = addNumber(4, 7);
// função com mais de um tipo. O retorno pode ser definido como any, mas não é recomendado
function callToPhone(phone) {
    return phone;
}
//Funções assíncronas 
//Funções assíncronas retornam promises
function getDatabase(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return "João";
    });
}
const bot = {
    id: 1,
    name: "Megaman"
};
const bot2 = {
    id: 1,
    name: "Megaman",
    sayHello: function () {
        throw new Error("Function not implemented.");
    }
};
//Classe utilizando a interface
class Pessoa {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    sayHello() {
        return "Hello, " + this.name;
    }
}
const p = new Pessoa(1, "Maria");
console.log(p.sayHello());
