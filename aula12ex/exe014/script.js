function carregar () {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()

msg.innerHTML = `Agora são ${hora} horas`

if (hora >= 0 && hora < 11) {
    img.src= 'manha2.png'
    document.body.style.background= '#A6D41C'
    
    
} else if(hora >= 12 && hora < 20) {
    img.src= 'tarde2.png'
    document.body.style.background= '#766843'
    

    
} else {
    img.src= 'noite2.png'
    document.body.style.background= '#132D38'
}
}

