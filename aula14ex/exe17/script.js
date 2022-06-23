function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if(num.value.length == 0) {
        alert('Por favor, digite o número')
    } else {
        let n = Number(num.value)
        let c = 0
        tab.innerHTML = ''
        while(c < 11) {
            let item = document.createElement('Option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}