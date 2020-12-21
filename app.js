function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert("Verifique os seus dados")
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ""
        //Adicionar um elemento na Pagina atraves do js
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        //É o mesmo que ir no html e fazer img src =""....

        if(fsex[0].checked){
            genero = "Homem"
            if (idade >= 0 && idade < 12){
                //res.innerHTML = "Criança"
                img.setAttribute('src', 'menino.jpg')
            }else if (idade < 21){
                //res.innerHTML = "Jovem"
                img.setAttribute('src', 'rapaz.jpg')
            }else{
                //res.innerHTML = "Adulto"
                img.setAttribute('src', 'velho.jpg')
            }
        }else{
            genero = "Mulher"
            if (idade >= 0 && idade < 12){
                //res.innerHTML = "Criança"
                img.setAttribute('src', 'menina.jpg')
            }else if (idade < 21){
                //res.innerHTML = "Jovem"
                img.setAttribute('src', 'rapariga.jpg')
            }else{
                //res.innerHTML = "Adulto"
                img.setAttribute('src', 'velha.jpg')
            }
        }
        res.style.textAlight = "Center"
        res.innerHTML = ` Foi detatado(a) um(a) ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}