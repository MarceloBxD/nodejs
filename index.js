const os = require("os");

// Mostrando introdução

console.log("=== Quantidade de Memória ===");

// Visualizando quantos megas livres e total possuem no sistema

console.log(
  "\nMemória livre: " + Math.floor(os.freemem() / 1024 / 1024) + " MB"
);
console.log(
  "Memória total: " + Math.floor(os.totalmem() / 1024 / 1024) + " MB"
);

// Mostrando o percentual de memória disponível

console.log(
  "\nPercentual de memória livre: " +
    Math.floor((os.freemem() / os.totalmem()) * 100) +
    "%"
);
