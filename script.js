
function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imgx')
    var title = document.getElementById('title')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas`
    if(hora >=0 && hora < 12){
        img.src = '../Aula12ex/imagens/manha.jpg'
        document.body.style.background = 'rgb(218, 215, 194)'
        msg.style.color = 'rgb(218, 215, 194)'
        
    }
    else if(hora >=12 && hora <=18){
        img.src = '../Aula12ex/imagens/tarde.jpg'
        document.body.style.background = 'rgb(198, 141, 108)'
        msg.style.color = 'rgb(198, 141, 108)'
        
        
    }
    else{
        img.src = '../Aula12ex/imagens/noite.jpg'
        document.body.style.background = 'rgb(25, 50, 83)'
        msg.style.color = 'rgb(25, 50, 83)'
    }
}
