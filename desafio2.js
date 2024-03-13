function verificarNumero(numero){
    let anterior = 0;
    let atual = 1;

    while (atual <= numero) {
        if(atual === numero) {
            return true;
        }

        let proximo = anterior + atual;
        anterior = atual;
        atual = proximo;
    }

    return false;
}

let numero = 42;
if (verificarNumero(numero)){
    console.log(numero + " Este número pertence a sequência Fibonacci.");

}else {
    console.log(numero + " Este número não pertence a sequência de Fibonacci");
}