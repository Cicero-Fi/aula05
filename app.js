const inputPaciente = {
  tempo: document.querySelector("#tempo"),
  velocidadeMedia: document.querySelector("#velocidade"),
  consumoMedio: document.querySelector("#consumo"),
  ValordoAlcool: document.querySelector("#alcool"),
  ValordaGasolina:document.querySelector("#gasolina"),
};
const dados = {
  tempo,
  velocidadeMedia,
  consumoMedia,
  ValordoAlcool,
  ValordaGasolina,
};

const body = document.querySelector("body")
const botao= document.querySelector("button");
const form = document.querySelector("form");

function capturarDados(){
    form.addEventListener("submit",(evento) =>{

        evento.preventDefault()

        dados.tempo =Number(inputPaciente.tempo.value);
        dados.velocidadeMedia = Number(inputPaciente.velocidadeMedia.value);
        dados.consumoMedia =Number(inputPaciente.consumoMedia.value);
        dados.ValordoAlcool= Number(inputPaciente.ValordoAlcool.value);
        dados.ValordaGasolina=Number(inputPaciente.ValordaGasolina.value);
        
        calcularconsumo(dados)

    });
}

function calcularconsumo(valores){

distancia = horas * velocidadeMedia;










}




let horas,consumoMedio,consumoTotal,velocidadeMedia,distancia,precogasolina,precoalcool;

horas =13
velocidadeMedia=110
consumoMedio=14
precoalcool=3.888
precogasolina=5.899
tipodecombustivel= 0 //se for 0=Etanol. Se fot 1=Gasolina


distancia=horas*velocidadeMedia
console.log (`a distancia de viagem sera de ${distancia} Km`)

consumoTotal= distancia/consumoMedio
console.log(`o consumo total de litros sera de ${(consumoTotal).toLocaleString('pt-BR',)}`)

console.log(`o consumo para abastecer com gasolina sera de ${(consumoTotal + precogasolina).toLocaleString('pt-BR',{style:"currency",currency:'BRL'})}`)
console.log(`o consumo para abastecer com alcool sera de ${(consumoTotal + precoalcool).toLocaleString('pt-BR',{style:"currency",currency:'BRL'})}`)

if(tipodecombustivel == 0){
    console.log(`o veiculo foi bastecido com ${Etanol}´)}
      