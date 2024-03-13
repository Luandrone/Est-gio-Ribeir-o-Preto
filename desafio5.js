function inverterString(string){
    let stringInvertida = '';

    for( let i = string.length - 1; i >= 0; i--){
        stringInvertida += string[i];
    }

    return stringInvertida;
}

let stringOriginal = 'cebola';
let stringInvertida = inverterString(stringOriginal);

console.log("String normal:", stringOriginal);
console.log("String invertida:", stringInvertida);