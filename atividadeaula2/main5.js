// converter temperatura
var temperatura = 10
var tipoTemperatura = "F"
var temperaturaConvertida = 0

if(tipoTemperatura == "C"){
    console.log("Você escolheu Celsius")
      temperaturaConvertida = ((temperatura * 1.8) +32)
        console.log("O valor convertido é" + temperaturaConvertida)
}
    else
      {
        console.log("Você escolheu Fahrenheit")
         temperaturaConvertida = ((temperatura -32) * (9 / 5))
         console.log("O valor convertido é" + temperaturaConvertida)
      }


