
const value = window.prompt('Digite um número inteiro:', '10');

const pares = [];
const impares = [];

for(let i=1; i<=value; i++) {
    if (i % 2 === 0) {
        pares.push(i);
    } else {
      impares.push(i);
    }
}

console.log('Números pares:', pares);
console.log('Números ímpares:', impares);
