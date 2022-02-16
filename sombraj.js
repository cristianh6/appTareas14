function noParesDeContarImparesHasta(numero){
    for(let i = 0; i <= numero; i++){
        if(i % 2 !== 0){
            return i;
        }
    }
}
noParesDeContarImparesHasta(10)