
// Variaveis de bottoes
let botao1 = document.querySelector("#botao1")
let botao2 = document.querySelector("#botao2")
let botao3 = document.querySelector("#botao3")
let botao4 = document.querySelector("#botao4")
let botao5 = document.querySelector("#botao5")
let botao6 = document.querySelector("#botao6")
let botao7 = document.querySelector("#botao7")
let botao8 = document.querySelector("#botao8")
let botao9 = document.querySelector("#botao9")
let botao10 = document.querySelector("#botao10")



function exercicio1(){
    let ex11input = document.querySelector("#ex11input")
    let ex11resultado = document.querySelector("#ex11resultado")

    let resulta1p = (Number(ex11input.value) * 1) / 100
    let resulta2p = (Number(ex11input.value) * 2) / 100
    let resulta5p = (Number(ex11input.value) * 5) / 100
    let resulta10p = (Number(ex11input.value) * 10) / 100

    ex11resultado.innerHTML = `
Contação 1%: ${resulta1p} + ${ex11input.value} = ${(Number(resulta1p) + Number(ex11input.value))}<br>
Contação 2%: ${resulta2p} + ${ex11input.value} = ${(Number(resulta2p) + Number(ex11input.value))}<br>
Contação 5%: ${resulta5p} + ${ex11input.value} = ${(Number(resulta5p) + Number(ex11input.value))}<br>
Contação 10%: ${resulta10p} + ${ex11input.value} = ${(Number(resulta10p) + Number(ex11input.value))}`


}

function exercicio2(){
    let ex21input = document.querySelector("#ex21input")
    let ex21resultado = document.querySelector("#ex21resultado")

    let ovo = 2 
    let queijo = 50
    
    let tovo = Number(ex21input.value) * ovo
    let tqueijo = Number(ex21input.value) * queijo

    ex21resultado.innerHTML = `
Serão Necessario os seguintes ingredientes para fazer a comida:<br><br>

${tovo} Ovos <br>
${tqueijo} Gramas de queijo

    `

}

function exercicio3(){
    let ex31input = document.querySelector("#ex31input")
    let ex32input = document.querySelector("#ex32input")
    let ex31resultado = document.querySelector("#ex31resultado")

    let soma = Number(ex31input.value) + Number(ex32input.value)
    let multiplicacao = Number(ex31input.value) * Number(ex32input.value)
    let subtracao = Number(ex31input.value) - Number(ex32input.value)
    let divisao = Number(ex31input.value) / Number(ex32input.value)

    ex31resultado.innerHTML = `
Soma dos Numeros: ${soma}<br>
Multiplicação dos numeros: ${multiplicacao}<br>
Subtracao dos numeros: ${subtracao}<br>
Divisão dos Numeros: ${divisao}<br>
    `

}
function exercicio4(){
    let ex41input = document.querySelector("#ex41input")
    let ex42input = document.querySelector("#ex42input")
    let ex43input = document.querySelector("#ex43input")
    let ex44input = document.querySelector("#ex44input")
    let ex45input = document.querySelector("#ex45input")
    let ex41resultado = document.querySelector("#ex41resultado")

    let somaPedacos = 4 * 12
    let somaRefrigerantes = Number(ex45input.value) * 7

    ex41resultado.innerHTML = `
Você escolheu os seguintes sabores:<br>
${ex41input.value.toUpperCase()}<br>
${ex42input.value.toUpperCase()}<br>
${ex43input.value.toUpperCase()}<br>
${ex44input.value.toUpperCase()}<br>
<br>
${ex45input.value} UN de refrigerantes<br>
<br>
Total a Ser pago é: ${somaPedacos + somaRefrigerantes}

    `


}

function exercicio5(){
    let ex51nome = document.querySelector("#ex51nome").value.toUpperCase()
    let ex51idade = Number(document.querySelector("#ex51idade").value)
    let ex52nome = document.querySelector("#ex52nome").value.toUpperCase()
    let ex52idade = Number(document.querySelector("#ex52idade").value)
    let ex53nome = document.querySelector("#ex53nome").value.toUpperCase()
    let ex53idade = Number(document.querySelector("#ex53idade").value)

    let ex51resultado = document.querySelector("#ex51resultado")

    if(ex51idade > ex52idade && ex51idade > ex53idade){
        if(ex52idade > ex53idade){
            ex51resultado.innerHTML = `${ex51nome} (${ex51idade} anos) é o 1° mais velho que ${ex52nome} (${ex52idade} anos) e ${ex53nome} (${ex53idade} anos) <br> ${ex52nome} (${ex52idade} anos) é 2° mais velho(a) que ${ex53nome} (${ex53idade} anos) <br> ${ex53nome} (${ex53idade} anos) é o 3° mais velho(a)`
 
        }else{
            ex51resultado.innerHTML = `${ex51nome} (${ex51idade} anos) é o 1° mais velho que ${ex52nome} (${ex52idade} anos) e ${ex53nome} (${ex53idade} anos) <br> ${ex53nome} (${ex53idade} anos) é 2° mais velho(a) que ${ex52nome} (${ex52idade} anos)<br> ${ex52nome} (${ex52idade} anos) é o 3° mais velho(a)`
        }
    }else if(ex52idade > ex51idade && ex52idade > ex53idade){
        if(ex51idade > ex53idade){
            ex51resultado.innerHTML = `${ex52nome} (${ex52idade} anos) é o 1° mais velho que ${ex51nome} (${ex51idade} anos) e ${ex53nome} (${ex53idade } anos) <br> ${ex51nome} (${ex51idade} anos) é 2° mais velho(a) que ${ex53nome} (${ex53idade} anos) <br> ${ex53nome} (${ex53idade} anos) é o 3° mais velho(a)`
        }else{
            ex51resultado.innerHTML = `${ex52nome} (${ex52idade} anos) é o 1° mais velho que ${ex51nome} (${ex51idade} anos) e ${ex53nome} (${ex53idade} anos) <br> ${ex53nome} (${ex53idade} anos) é 2° mais velho(a) que ${ex51nome} (${ex51idade} anos) <br> ${ex51nome} (${ex51idade} anos) é o 3° mais velho(a)`
        }

    }else if(ex53idade > ex51idade && ex53idade > ex52idade){
        if(ex52idade > ex51idade){
            ex51resultado.innerHTML = `${ex53nome} (${ex53idade} anos) é 1° mais velho que ${ex51nome} (${ex51idade} anos) e ${ex52nome} (${ex52idade} anos) <br> ${ex52nome} (${ex52idade} anos) é 2° mais velho(a) que ${ex51nome} (${ex51idade} anos) <br> ${ex51nome} (${ex51idade} anos) é o 3° mais velho(a)`
        }else{
            ex51resultado.innerHTML = `${ex53nome} (${ex53idade} anos) é 1° mais velho que ${ex51nome} (${ex51idade} anos) e ${ex52nome} (${ex52idade} anos) <br> ${ex51nome}(${ex51idade} anos) é 2° mais velho(a) que ${ex52nome} (${ex52idade} anos) <br> ${ex52nome} (${ex52idade} anos) é o 3° mais velho(a)`
        }
    }

}

function exercicio6(){
    let ex61input = Number(document.querySelector("#ex61input").value)
    let ex61resultado = document.querySelector("#ex61resultado")

    if(ex61input >= 6){
        ex61resultado.innerHTML = `Aluno Aprovado`

    }else if(ex61input >= 4 && ex61input < 6){
        ex61resultado.innerHTML = `Aluno precisa fazer a prova Substutiva`

    }else{
        ex61resultado.innerHTML = `Aluno Reprovado`
    }




}

function exercicio7(){
    let ex71input = Number(document.querySelector("#ex71input").value)
    let ex72input = Number(document.querySelector("#ex72input").value)

    let ex71resultado = document.querySelector("#ex71resultado")

    if(ex71input >= ex72input ){
        if(ex71input > ex72input){
            ex71resultado.innerHTML = `${ex71input} é maior que ${ex72input}`
        }else{
            ex71resultado.innerHTML = `${ex71input} é igual a ${ex72input}`
        }
    }else{
        ex71resultado.innerHTML = `${ex71input} é menor que ${ex72input}`
    }

    
}

function exercicio8(){
    let ex81input = Number(document.querySelector("#ex81input").value)
    let ex81resultado = document.querySelector("#ex81resultado")

    let resutado = ex81input % 2

    if(resutado === 0){
        ex81resultado.innerHTML = `${ex81input} é um Numero Par`
    }else{
        ex81resultado.innerHTML = `${ex81input} é um Numero Impar`
    }


}

function exercicio9(){
    let ex91input = Number(document.querySelector("#ex91input").value)
    let ex92input = Number(document.querySelector("#ex92input").value)

    let ex91resultado = document.querySelector("#ex91resultado")

    if((ex92input % ex91input) === 0){
        ex91resultado.innerHTML = `O professor terá ${(ex92input / ex91input)} Alunos por turma. Sendo ${ex91input} Turmas no total.`
    }else{
        let sobra = ex92input % ex91input
        ex91resultado.innerHTML = `O professor terá ${((ex92input - sobra) / ex91input)} Alunos por turma. Sendo ${ex91input} Turmas no total.<br> Lembrando que sobrara ${sobra} Alunos sem turma!`
    }
}

function exercicio10(){
    let ex101input = Number(document.querySelector("#ex101input").value) // VALOR
    let ex102input = Number(document.querySelector("#ex102input").value) // VALOR DA META
    let ex103input = Number(document.querySelector("#ex103input").value) // VALOR META MINIMA
    let ex101resultado= document.querySelector("#ex101resultado")

    let porcentagem =  parseInt((ex101input * 100) / ex102input)
    let porcentagemMin =  parseInt((ex101input * 100) / ex103input)

    if(ex101input >= ex102input){
        ex101resultado.innerHTML = `${ex101input} Atingiu o valor da Meta`
    }else if(ex101input >= ex103input && ex101input < ex102input){
        ex101resultado.innerHTML = `${ex101input} Atingiu o valor da Meta Minima`
    }else if(ex101input < ex103input){

        ex101resultado.innerHTML = `Você não atingiu nenhuma meta!`
    }
    
    ex101resultado.innerHTML += `<br><br> Você atingiu ${porcentagem}% da Meta.`

    if(porcentagemMin > 100){
        ex101resultado.innerHTML += `<br><br> Você Ultrapasso a meta minima com ${porcentagemMin}%`
    }else{
        ex101resultado.innerHTML += `<br><br> Você atingiu ${porcentagemMin}% da Meta Minima.`
    }

}


botao1.onclick = function() { exercicio1() }
botao2.onclick = function() { exercicio2() }
botao3.onclick = function() { exercicio3() }
botao4.onclick = function() { exercicio4() }
botao5.onclick = function() { exercicio5() }
botao6.onclick = function() { exercicio6() }
botao7.onclick = function() { exercicio7() }
botao8.onclick = function() { exercicio8() }
botao9.onclick = function() { exercicio9() }
botao10.onclick = function() { exercicio10() }