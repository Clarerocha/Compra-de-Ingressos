function comprar() {

    let tipo = document.getElementById('tipo-ingresso');//tipo de ingresso?
    let quant = parseInt(document.getElementById('qtd').value);//Qtde?

    if(tipo.value == 'pista') {

        comprarPista(quant);

    }else if (tipo.value == 'superior') {
        comprarSuperior(quant);


    }else {
        comprarInferior(quant);

    }

    function comprarPista(quant) { 
        let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
        if(quant > qtdPista) {

            alert('Quantidade indisponível para tipo pista.');

       } else {

            qtdPista = qtdPista - quant;//Repeti o qtdPista, pois ele já representa o getElement..., acima.
            document.getElementById('qtd-pista').textContent = qtdPista;// text content pois o número é um texto e não um valor digitado.
            alert('Compra realizada com sucesso!');
       }
    }

    function comprarSuperior(quant) {
        let quantSuperior = parseInt(document.getElementById('qtd-superior').textContent);
        if(quant > quantSuperior) {

            alert('Quantidade indisponível para tipo cadeira superior.');

        }else {

            quantSuperior = quantSuperior - quant;
            document.getElementById('qtd-superior').textContent = quantSuperior;
            alert('Compra realizada com sucesso!');
        }
    }

    function comprarInferior(quant) {
        let quantInferior = document.getElementById('qtd-inferior').textContent;
        if(quant > quantInferior) {

            alert('Quantidade indisponível para o tipo cadeira inferior.');

        }else {

            document.getElementById('qtd-inferior').textContent = quantInferior - quant;
            alert('Compra realizada com sucesso!');
        }


}


}



