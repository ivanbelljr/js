var agora = new Date ()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas.`)
if (hora <=6) {
    console.log('Bom madrugada')
} else if (hora <=12) {
    console.log('Bom dia')
} else if (hora<= 18){
    console.log('boa tarde')
} else {
    console.log('boa noite')
}