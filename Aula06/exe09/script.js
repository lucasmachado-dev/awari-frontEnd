const input = prompt('Digite idades separadas por vírgula:', '14,29,37,42,7,15,22,13,40');
const values = input.split(',');
console.log('Idades', values);

let counter = 0;
for(let i=0; i<values.length; i++) {
    const age = parseInt(values[i]);
    if (age >= 18) {
        counter ++;
    }
}

console.log('Maiores de idade', counter);
