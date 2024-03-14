function validabusca () {
    if(document.querySelector('#q').value =='') { 
        document.querySelector('#form-busca').style.background = "red";
        alert('Nao podia ter deixado em branco a busca!')
       
        return false;

    }
}
document.querySelector('#form-busca').onsubmit = validabusca;

var banners= ["img/nike.png", "img/adidas.png"];
var bannerAtual = 0;



function trocaBanner() {
    bannerAtual = (bannerAtual + 1) % 2;
    document.querySelector('.destaque img').src = banners[bannerAtual];

}

var timer = setInterval(trocaBanner, 900);
var controle = document.querySelector('.pause').onclick = function(){
clearInterval(timer)

document.querySelector('.play').onclick = function() {
    timer = setInterval(trocaBanner, 900);

controle.onclick = function() {
    if (controle.className == 'pause') {
        clearInterval(timer);
        controle.className = 'play';
    } else {
        timer = setInterval(trocaBanner, 900);
        controle.className = 'pause';
    }

    return false;
};
}
}
