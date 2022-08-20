const Dados = require("./tecnico.js");

new Dados('jose', 10);
new Dados('diego', 45);
new Dados('fernando', 20);
new Dados('artur', 70);
new Dados('zelia', 2);
new Dados('marcos', 15)

console.log(Dados.ordenarNome());
console.log(Dados.ordenarIdade());
console.log(Dados.criancas());
console.log(Dados.adolescentes());
console.log(Dados.adultos());
console.log(Dados.idosos());
