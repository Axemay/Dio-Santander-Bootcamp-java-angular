// Primeiro exemplo
type Hero={
    name: string,
    vulgo: string;
};

function printaObjeto(pessoa: Hero){
    console.log(pessoa)
}

printaObjeto({
    name: "Bruce Wayne",
    vulgo: "batman"
});


// Tipos primitivos: boolean, number, string
let ligado: boolean = true;
let numero: number = 10;
let numeroDecimal: number = 19.99;
let nome: string = "Maria";


//null - só aceita nulo
let nulo: null = null;

// undefined - só aceita undefined
let indefinido: undefined = undefined;

//Tipos abrangentes: any, void
// any -> aceita qualquer tipo 
// void -> não teem retorno


//objeto - sem previsibilidade
let produto: object = {
    name: "Capa",
    cidade: "sp",
    estoque: true,
    preco: 30.50,
};


// objeto tipado com previsibilidade
type ProdutoLoja = {
    nome: string;
    preco: number;
    estoque: boolean;
};

let meuProduto: ProdutoLoja = {
    nome: "Playstation 5",
    preco: 4000.00,
    estoque: false,
};


// arrays

let compras: string[] = ["Pão", "Queijo", "Presunto", "Leite"];
let feira: Array<string> = ["Abacate", "Laranja", "Alface", "Batata"];

// array de multitipos
let infos: (string | number)[] = ["Banana", 10, "Laranja", 5]


// Tuplas - vetores de mais de um tipo com lugar certo para cada coisa
let boleto:[string, number, number] = ["Conta Água", 67.50, 32165487813];


// métodos de arrays são os mesmos do javascript

// Data
let aniversario: Date = new Date("2022-12-01 05:00");
console.log(aniversario.toString());


// Função
// a função recebe dois parâmetros do tipo number e retorna um tipo number
function addNumber(x: number, y: number): number{
    return x + y;
};

//Para que uma variável receba o retorno da função, ela precisa ser do mesmo tipo do retorno
let soma: number = addNumber(4, 7);

// função com mais de um tipo. O retorno pode ser definido como any, mas não é recomendado
function callToPhone(phone: number | string): number | string{
    return phone;
}

//Funções assíncronas 
//Funções assíncronas retornam promises
async function getDatabase(id: number): Promise<string>{
    return "João";
}


//interfaces (type x interface)
// type para tipar objeto e interface para classe

//Quando declarado como readonly, o valor não pode ser alterado (funciona em interface ou type)
type robot = {
    readonly id: number;
    name: string;
};

const bot: robot = {
    id: 1,
    name: "Megaman"
}

interface robot2{
    id: number | string;
    name: string;
    sayHello(): string;
}

const bot2: robot2 = {
    id: 1,
    name: "Megaman",
    sayHello: function (): string {
        throw new Error("Function not implemented.");
    }
}

//Classe utilizando a interface
class Pessoa implements robot2{
    id: number | string;
    name: string;

    constructor(id: string | number, name: string){
        this.id = id;
        this.name = name;
    }
    sayHello(): string {
        return "Hello, " + this.name;
    }
}

const p = new Pessoa(1, "Maria");
console.log(p.sayHello());