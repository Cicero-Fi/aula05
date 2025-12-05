const input = {
  combustivel: document.querySelectorAll(".combustivel"),
  consumo_medio: document.querySelector("#consumo"),
  velocidade_media: document.querySelector("#velocidade"),
  preco_combustivel: document.querySelector("#precoCombustivel"),
  horas_viagem: document.querySelector("#horas"),
};

const elemento = {
  form: document.querySelector("form"),
  resultado: document.querySelector("#resultado"),
};

let combustivelSelecionado;

elemento.form.addEventListener("submit", (evento) => {
  evento.preventDefault();
  calcularDistancia(
    input.velocidade_media,
    input.horas_viagem,
    input.consumo_medio.value,
    combustivelSelecionado
  );
});

function calcularDistancia(velocidade, horas, consumo, tipoCombustivel) {
  let velocidadeDigitada = Number(velocidade.value),
    hora = Number(horas.value.slice(0, 2)),
    minuto = Number(horas.value.slice(3));

  let horasTotais = (hora * 60 + minuto) / 60;
  let distancia = velocidadeDigitada * horasTotais;

  calcularConsumo(consumo, distancia, tipoCombustivel);
}

function calcularConsumo(consumoMedio, distanciaPercorrida, tipoCombustivel) {
  let consumoEmLitros = distanciaPercorrida / consumoMedio;
  let valorAPagar;

  if (tipoCombustivel == "etanol") {
    consumoEmLitros += consumoEmLitros * 0.3;
    valorAPagar = consumoEmLitros * input.preco_combustivel.value;
    inserirDados(
      distanciaPercorrida,
      consumoEmLitros,
      tipoCombustivel,
      valorAPagar
    );
  } else if (tipoCombustivel == "diesel") {
    consumoEmLitros = consumoEmLitros * 0.85;
    valorAPagar = consumoEmLitros * input.preco_combustivel.value;
    inserirDados(
      distanciaPercorrida,
      consumoEmLitros,
      tipoCombustivel,
      valorAPagar
    );
  } else {
    valorAPagar = consumoEmLitros * input.preco_combustivel.value;
    inserirDados(
      distanciaPercorrida,
      consumoEmLitros,
      tipoCombustivel,
      valorAPagar
    );
  }
}

input.combustivel.forEach((tipoCombustivel) => {
  tipoCombustivel.addEventListener("change", (evento) => {
    combustivelSelecionado = evento.target.id;
    
    return combustivelSelecionado;
  });
});

function inserirDados(distancia, consumo, tipoCombustivel, valorAPagar) {

  let distanciaFormatada = Number(distancia).toFixed(1).replace('.',',')

  let consumoFormatado = consumo.toLocaleString('pt-BR')

  elemento.resultado.innerText = `Para uma viagem de ${distanciaFormatada} km, 
 você gastará ${consumoFormatado} litros de ${tipoCombustivel}, com valor 
 total de ${valorAPagar.toLocaleString("pt-BR", {
   style: "currency",
   currency: "BRL",
 })}`;

  elemento.resultado.id = "";
}
