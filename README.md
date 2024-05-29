# Sistema de Compra de Ingressos

Este repositório contém o código de um sistema simples de compra de ingressos, desenvolvido em JavaScript. A aplicação permite aos usuários selecionar o tipo de ingresso desejado, especificar a quantidade e realizar a compra, atualizando a quantidade disponível de ingressos conforme necessário.

## Estrutura do Código

A função principal `comprar()` é responsável por gerenciar o processo de compra de ingressos. Dependendo do tipo de ingresso selecionado pelo usuário, uma função específica é chamada para processar a compra.

### Funções

- `comprar()`: Função principal que coordena a compra do ingresso com base no tipo selecionado.
- `comprarPista(quant)`: Processa a compra de ingressos do tipo pista.
- `comprarSuperior(quant)`: Processa a compra de ingressos do tipo cadeira superior.
- `comprarInferior(quant)`: Processa a compra de ingressos do tipo cadeira inferior.

### Detalhes da Implementação

1. **Seleção do Tipo de Ingresso e Quantidade:**
    ```javascript
    let tipo = document.getElementById('tipo-ingresso');
    let quant = parseInt(document.getElementById('qtd').value);
    ```

2. **Verificação e Chamada da Função Apropriada:**
    ```javascript
    if(tipo.value == 'pista') {
        comprarPista(quant);
    } else if (tipo.value == 'superior') {
        comprarSuperior(quant);
    } else {
        comprarInferior(quant);
    }
    ```

3. **Funções Específicas para Cada Tipo de Ingresso:**

    - **Pista:**
        ```javascript
        function comprarPista(quant) {
            let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
            if(quant > qtdPista) {
                alert('Quantidade indisponível para tipo pista.');
            } else {
                qtdPista = qtdPista - quant;
                document.getElementById('qtd-pista').textContent = qtdPista;
                alert('Compra realizada com sucesso!');
            }
        }
        ```

    - **Cadeira Superior:**
        ```javascript
        function comprarSuperior(quant) {
            let quantSuperior = parseInt(document.getElementById('qtd-superior').textContent);
            if(quant > quantSuperior) {
                alert('Quantidade indisponível para tipo cadeira superior.');
            } else {
                quantSuperior = quantSuperior - quant;
                document.getElementById('qtd-superior').textContent = quantSuperior;
                alert('Compra realizada com sucesso!');
            }
        }
        ```

    - **Cadeira Inferior:**
        ```javascript
        function comprarInferior(quant) {
            let quantInferior = parseInt(document.getElementById('qtd-inferior').textContent);
            if(quant > quantInferior) {
                alert('Quantidade indisponível para o tipo cadeira inferior.');
            } else {
                quantInferior = quantInferior - quant;
                document.getElementById('qtd-inferior').textContent = quantInferior;
                alert('Compra realizada com sucesso!');
            }
        }
        ```

## Como Utilizar

1. **Selecione o Tipo de Ingresso:** No elemento dropdown com o ID `tipo-ingresso`.
2. **Insira a Quantidade:** No campo de input com o ID `qtd`.
3. **Clique no Botão de Comprar:** A função `comprar()` será chamada, processando a compra conforme a disponibilidade dos ingressos.

## Contribuições

Sinta-se à vontade para contribuir com melhorias ou correções. Faça um fork do projeto, crie uma branch para sua feature ou correção, e abra um pull request detalhando as mudanças.

## Licença

Este projeto é distribuído sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

---

Esperamos que este sistema seja útil para você! Deixe suas dúvidas ou sugestões.

Att,

Claudia Rocha
