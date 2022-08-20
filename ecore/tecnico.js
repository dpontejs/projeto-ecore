/*
    Não é necessário interface gráfica, no entanto deve haver uma forma de entrada de dados e verificação das saídas correspondentes, 
    que não envolva inserção manual de dados no código fonte.

    A funcionalidade do programa é o armazenamento de dados cadastrais de pessoas. 
    Devem constar os seguintes dados no cadastro: Nome e idade.
    
    Deve ser possível cadastrar / adicionar uma nova pessoa.
    
    Deve ser possível exibir uma lista de pessoas cadastradas, ordenada por idade (menor para maior) e nome (alfabética crescente).
    
    Deve ser possível categorizar as pessoas cadastradas por idade, de acordo com os critérios: 
    0 a 12 anos => Criança, 12 até 19 anos => Adolescente, 20 até 65 => Adulto, 65 ou mais => Idoso.
*/

const lista = [];

class Dados {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.dados = {
            nome: this.nome,
            idade: this.idade
        };
        lista.push(this.dados);
    }

    static ordenarNome() {
        let listaNome = Array.from(lista);
        listaNome.sort((a, b) => {
            return a.nome === b.nome ? 0 : a.nome > b.nome ? 1 : -1;
        });
        return listaNome;
    }

    static ordenarIdade() {
        let listaIdade = Array.from(lista);
        listaIdade.sort((a, b) => {
            return a.idade - b.idade;
        });
        return listaIdade;
    }

    static criancas() {
        let criancas = [];
        lista.forEach((x) => {
            if (x.idade < 12 ) {
                criancas.push(x.nome);
            }
        })
        return criancas;
    }

    static adolescentes() {
        let adolescentes = [];
        lista.forEach((x) => {
            if (x.idade > 12 && x.idade <= 19) {
                adolescentes.push(x.nome);
            }
        })
        return adolescentes;
    }

    static adultos() {
        let adultos = [];
        lista.forEach((x) => {
            if (x.idade >= 20 && x.idade < 65) {
                adultos.push(x.nome);
            }
        })
        return adultos;
    }

    static idosos() {
        let idosos = [];
        lista.forEach((x) => {
            if (x.idade >= 65 ) {
                idosos.push(x.nome);
            }
        })
        return idosos;
    }
};


module.exports = Dados; 
