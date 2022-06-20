function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
    }   var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = "Homen"
            if (idade >0 && idade <10) {
                img.setAttribute('src', 'bebem.png')
            } else if(idade <21) {
                img.setAttribute('src', 'moco.png')
            } else if(idade <50) {
                img.setAttribute('src', 'adulto.png')
            }else {
                img.setAttribute('src', 'veio.png')
            }

        } else {
            genero = "Mulher"
            if (idade >0 && idade <10) {
                img.setAttribute('src', 'bebef.png')
            } else if(idade <21) {
                img.setAttribute('src', 'moca.png')
            } else if(idade <50) {
                img.setAttribute('src', 'adulta.png')
            }else {
                img.setAttribute('src', 'veia.png')
            }
            
        }
        res.innerHTML= `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
        
    
}