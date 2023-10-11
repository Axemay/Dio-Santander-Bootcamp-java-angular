"use strict";
function printaObjeto(pessoa) {
    console.log(pessoa);
}
printaObjeto({
    name: "Bruce Wayne",
    vulgo: "batman"
});
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
