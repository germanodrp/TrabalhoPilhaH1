class Pilha{
    
    constructor(){
        this.array1=[];
        
    }
//adicionar
    adicionar(item){
        this.array1.push(item)
    }
//excluir o ultimo inserido
    excluirNumeroDoArray(){
        this.array1.pop();
    }
    tamanhoDoArray(){
        return this.array1.length;
    }

    buscarMaiorNumeroDaPilha(){
        var maior = Math.max.apply(null,this.array1);
        return maior;
    }

    buscarMenosNumeroDaPilha(){
        var menorNumero = Math.min.apply(null,this.array1);
        return menorNumero;
    }

    calcularMediaAritmetrica(){
        var soma = 0;

        for(var i =0; i<this.array1.length; i++){
            soma += parseInt(this.array1[i]); 
        }
        soma = soma /this.array1.length;
        return soma;
    }


}
    const pilha = new Pilha();

pilha.adicionar(10);
pilha.adicionar(5);
pilha.adicionar(10);
pilha.adicionar(10);
pilha.adicionar(20);

console.log(pilha.calcularMediaAritmetrica());


