function calculadora () {
        const operacao = Number.isInteger(prompt('Escolha uma operação:\n 1 = soma (+)\n 2 = subtração (-)\n 3 = multiplicação (*)\n 4 = divisãoReal (/)\n 5 = divisãoInteira (%)\n 6 = potenciação (**)'));
    
    if (!operacao || operacao >= 7) {
        alert('Erro - operação inválida');
        calculadora();

    } else {}
    
    let n1 = Number(prompt('Insira o primeiro valor:'));
    let n2 = Number(prompt('Insira um segundo valor:'));
    let resultado;

    if (!n1 || !n2) {
        alert('Erro - Parâmetros inválidos!')
        calculadora();
    } else {}

    function soma() {
        resultado = n1 + n2;
        alert(`${n1}+${n2}=${resultado}`)
        novaOperacao();
    }
        function subtração() {
        resultado = n1 - n2;
        alert(`${n1}-${n2}=${resultado}`)
        novaOperacao();
    }
    function multiplicação() {
        resultado = n1 * n2;
        alert(`${n1}*${n2}=${resultado}`)
        novaOperacao();
    }
    function divisãoInteira() {
        resultado = n1 % n2;
        alert(`O resto da divisão entre ${n1} e ${n2} é igual a: ${resultado}`)
        novaOperacao();
    }
    function divisãoReal() {
        resultado = n1 / n2;
        alert(`${n1}/${n2}=${resultado}`)
        novaOperacao();
    }
    function potenciação() {
        resultado = n1 ** n2;
        alert(`${n1} elevado a ${n2} é igual a ${resultado}`)
        novaOperacao();
    }

    function novaOperacao() {
        let opcao = prompt('Deseja fazer outra operação?\n 1 - Sim\n 2 - Não');
        if (opcao == 1) {
            calculadora();
        }   else if (opcao ==2) {
                alert('Até mais!')
        }   else {
                alert('Digite uma opção válida!')
                novaOperacao();
        }
        
    }

    if (operacao == 1) {
        soma();
    } else if (operacao == 2) {
        subtração();
    } else if (operacao == 3) {
        multiplicação();
    } else if (operacao == 4) {
        divisãoReal();
    } else if (operacao == 5) {
        divisãoInteira();
    } else if (operacao == 6) {
        potenciação();
    }
    

}

calculadora();