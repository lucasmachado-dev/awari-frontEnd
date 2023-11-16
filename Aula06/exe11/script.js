const input = prompt('Digite um número inteiro:', '7');

let result = '';
for(let i=1; i<=input; i++) {
    for(let j=1; j<=i; j++) {
        result += '*';
    }
    result += '\n';
}
console.log(result);
