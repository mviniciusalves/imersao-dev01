var nome = "Marcos" // palavras sempre em aspas

var notaPrimeiroBimestre = 9.45
var notaSegundoBimestre = 3.123
var notaTerceiroBimestre = 7.12
var notaQuartoBimestre = 8.45

var mediaFinal = (notaPrimeiroBimestre + notaSegundoBimestre + notaTerceiroBimestre + notaQuartoBimestre) / 4

var notaFixada = mediaFinal.toFixed(2) // fixar casas decimais

console.log("A média foi: " + notaFixada)