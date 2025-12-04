const input = {
 combustivel:document.querySelectorAll('.combustivel'),
 consumo_medio:document.querySelector('#consumo'),
 velocidade_medio:document.querySelector('#velocidade'),
 preco_combustivel:document.querySelector('#precocombustivel'),
 horas_viagem:document.querySelector("#horas")
}

const elemento ={
 form:document.querySelector('form'),
 resultado:document.querySelector("#resultado")
}

let  combustivelSelecionado

elemento.form.addEventListener('submit',(evento)=>{
 evento.preventDefault()
 calcularDistancia(input.velocidade_medio,input.horas_viagem,input.consumo_medio.value,combustivelSelecionado);

 
});

function calcularDistancia(velocidade,horas,consumo,tipoCombustivel){
    
console.log(tipoCombustivel)

 let velocidadeDigitada = Number(velocidade.value),
 hora = Number(horas.value.slice(0,2)),
 minuto = Number(horas.value.slice(3)),
 horasTotais = ((hora * 60) + minuto) /60;

 let distancia= (velocidadeDigitada * horasTotais);
 

if(tipoCombustivel == 'etanol') {
     calcularconsumo(consumo,distancia)
 distancia = distancia.toFixed(1)
 distancia = distancia.replace('.',',')
    distancia = distancia - (distancia * 0.3)
    console.log(distancia)
} else if(tipoCombustivel == 'diesel'){
    distancia = distancia = (distancia *0.15)
     calcularconsumo(consumo,distancia)
 distancia = distancia.toFixed(1)
 distancia = distancia.replace('.',',')
 console.log(distancia)

}else{calcularconsumo(consumo,distancia)
 distancia = distancia.toFixed(1)
 distancia = distancia.replace('.',',')
 console.log(distancia)
}

}

function calcularconsumo(consumoMedio,distanciaPercorida){

 let consumoEmLitros =distanciaPercorida /consumoMedio

 console.log(consumoEmLitros + '  Litros')
}

//codigo para trablhar com listas (arraay) de tipos de comnustivel

 input.combustivel.forEach((tipoCombustivel)=>{
    
    tipoCombustivel.addEventListener('change',(evento)=>{
    combustivelSelecionado = evento.target.id;
    console.log(combustivelSelecionado)
    return combustivelSelecionado
        
    });
    
});