// importando funções pagina funcao-auxiliares.js

const funcoes = require("./funcao-auxiliares");

console.log(funcoes);
console.log(funcoes.gets());
//-------------- ou

const { gets, print } = require("./funcao-auxiliares");
print(gets());
