//PRIMEIRO DESAFIO////////////////////////////////////////////////////////////////////////////////////////////////////////

let INDICE = 13;
let SOMA = 0;
let K = 0;

while (K < INDICE) {
    K = K + 1;
    SOMA = SOMA + K;
}

console.log(SOMA); // Saída: 91

// SEGUNDO DESAFIO/////////////////////////////////////////////////////////////////////////////////////////////////////////////

function fibonacciSequence(n) {
  let fibSequence = [0, 1];

  for (let i = 2; i <= n; i++) {
      fibSequence[i] = fibSequence[i - 1] + fibSequence[i - 2];
  }

  return fibSequence;
}

function verificaSePertence(numero) {
  let sequence = fibonacciSequence(numero);
  if (sequence.includes(numero)) {
      return `${numero} pertence à sequência de Fibonacci.`;
  } else {
      return `${numero} não pertence à sequência de Fibonacci.`;
  }
}

const numeroInformado = 21;
console.log(verificaSePertence(numeroInformado));  // Saída: 21 pertence à sequência de Fibonacci.

// TERCEIRO DESAFIO ////////////////////////////////////////////////////////////////////////////////////////////////////////////

// a) 1, 3, 5, 7, ___
// Aqui, parece que estamos adicionando 2 ao número anterior para obter o próximo número. Portanto, o próximo número seria 7 + 2 = 9.
// Resposta: 9

// b) 2, 4, 8, 16, 32, 64, ____
// Cada número é obtido multiplicando o número anterior por 2. Assim, o próximo número seria 64 * 2 = 128.
// Resposta: 128

// c) 0, 1, 4, 9, 16, 25, 36, ____
// Esses parecem ser os quadrados dos números naturais, começando de 0. Portanto, o próximo número seria 6^2 = 36.
// Resposta: 49

// d) 4, 16, 36, 64, ____
// Esses parecem ser os quadrados dos números ímpares, começando de 3. Portanto, o próximo número seria 8^2 = 64.
// Resposta: 100

// e) 1, 1, 2, 3, 5, 8, ____
// Essa é a sequência de Fibonacci, onde cada número é a soma dos dois anteriores. Portanto, o próximo número seria 8 + 5 = 13.
// Resposta: 13

// f) 2, 10, 12, 16, 17, 18, 19, ____
// Aqui parece que há uma alternância entre adição/subtração de números. Analisando os números, vemos que os números pares estão aumentando em 2, enquanto os números ímpares estão aumentando em 1. Portanto, o próximo número ímpar seria 19 + 1 = 20.
// Resposta: 20

// QUARTO DESAFIO////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Na primeira visita à sala das lâmpadas, ligue um interruptor e aguarde alguns minutos. Em seguida, desligue o interruptor.

// Se a lâmpada permanecer acesa, isso significa que o interruptor que você ligou controla essa lâmpada.
// Se a lâmpada estiver apagada, mas estiver quente ao toque, isso significa que o interruptor que você ligou controlava essa lâmpada, mas você desligou antes de a lâmpada esfriar. Portanto, a lâmpada é controlada pelo segundo interruptor.
// Se a lâmpada estiver apagada e fria, isso significa que o interruptor que você ligou não controla essa lâmpada, então a lâmpada é controlada pelo terceiro interruptor.
// Na segunda visita à sala das lâmpadas, não ligue nenhum interruptor.

// Se a lâmpada estiver acesa, isso significa que o terceiro interruptor controla essa lâmpada.
// Se a lâmpada estiver apagada e fria, isso significa que o interruptor que você ligou na primeira visita controla essa lâmpada.
// Se a lâmpada estiver apagada, mas estiver quente ao toque, isso significa que o interruptor que você ligou na primeira visita controlava essa lâmpada, mas você desligou antes de a lâmpada esfriar. Portanto, a lâmpada é controlada pelo segundo interruptor.

// QUINTO DESAFIO/////////////////////////////////////////////////////////////////////////////////////////////////////////

function inverterString(str) {
  let invertedString = '';
  for (let i = str.length - 1; i >= 0; i--) {
      invertedString += str[i];
  }
  return invertedString;
}

const stringOriginal = 'Hello, world!';
const stringInvertida = inverterString(stringOriginal);
console.log(stringInvertida); // Saída: '!dlrow ,olleH'
