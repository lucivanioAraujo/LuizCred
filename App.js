function Calculate() {

    const amount = document.querySelector("#amount").value; // valor liquido
    const rate = document.querySelector("#rate").value; // taxa de juros
    const engine = document.querySelector("#engine").value; // taxa de maquina
    const months = document.querySelector("#months").value; // quantidade de parcelas
    // Calculating interest per month
    const interest = (amount * (rate * 0.01)) / months; // juros mensais
    const machine = (amount * (engine * 0.01)) / months; // valor destinado a maquina
    // Calculating total payment
    const Totalparcelas = ((amount / months) + interest + machine).toFixed(2);
    const TotalGeral = (months * Totalparcelas).toFixed(2);
  
    document.querySelector("#valor")
        .innerHTML = parseFloat(amount).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})

    document.querySelector("#total")
        .innerHTML =parseFloat(Totalparcelas).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

    document.querySelector("#parcelas")
        .innerHTML = months + " vez(es)"

    document.querySelector("#geral")
        .innerHTML = parseFloat(TotalGeral).toLocaleString('pt-br',{style:'currency',currency:'BRL'})

    document.querySelector("#juros")
        .innerHTML = interest.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) +" | "+ (interest * months).toFixed(2)

    document.querySelector("#maquina")
        .innerHTML = machine.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) +" | "+ (machine * months).toFixed(2)
}  


 function imprimir(){

   var conteudo = document.getElementById('resumo').innerHTML,
    tela_impressao = window.open('about:blank');

    tela_impressao.document.write(conteudo);
    tela_impressao.window.print();
    tela_impressao.window.close();
 }