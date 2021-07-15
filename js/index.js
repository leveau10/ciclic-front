const nome = document.querySelector('.nome');
const nomeP = nome.value;
const mensalidade = document.querySelector('.mensalidade');
const mensal = mensalidade.value;

const anos = document.querySelector('.select');
const abaResultado = document.querySelector('.resultado-final');




const submit = document.querySelector('.submit-button');
submit.addEventListener("click", (event) => {
    event.preventDefault();
    simular();
});


function simular() { //método GET com os valores recebidos
    var valorMensalidade = mensalidade.value

    const juros = 0.00517;
    const meses = (anos.value * 12);

    const url = `https://api.mathjs.org/v4/?expr=${valorMensalidade}*(((1%2B${juros})%5E${meses}-1)%2F${juros})`
    console.log(`https://api.mathjs.org/v4/?expr=${valorMensalidade}*(((1%2B${juros})%5E${meses}-1)%2F${juros})`)

    const options = {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        }
    }

    fetch(url, options).then(
        response => response.json()   
    ).then(
        result => { 
            resultadoFinal(result, valorMensalidade, meses);
        }
        
    )

}

function resultadoFinal(res, mensalidade, anos){
    abaResultado.innerHTML = "Olá, juntando R$" +mensalidade+ " todo mês, você terá R$" +res.toFixed(2)+" em " +anos/12+ " ano(s)";
}




