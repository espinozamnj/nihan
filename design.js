//variables globales
var nav = document.getElementsByTagName("nav")[0]
var imgwall = document.getElementsByClassName("wallpaper")[0]
var lista = document.getElementsByTagName("a")
var spanfin = document.getElementById('spanfin');
var index
var listaa = []
for(index = 0; index<lista.length ; index++){
    let t = lista[index]
    if(t.parentNode.className == "cont"){
        listaa.push(t)
    }
}

//estilo bing
imgwall.onclick=function(){
    imgwall.classList.remove("blur")
    document.querySelector("#spanfin").classList.remove("white")
}
document.getElementById("new").onclick=function(){
    imgwall.classList.add("blur")
    document.querySelector("#spanfin").classList.add("white")
}
//carga del wallpaper
imgwall.addEventListener("load",function(){
    document.querySelector("aside").classList.add("dplynone")
})
//ir a principal
function btnPrin(){
    if(!!location.search.indexOf("?=")){
        imgwall.src="https://source.unsplash.com/1280x720/?nature,water,ocean,animals"+"?" + new Date().getTime();
    }
    else{
        home()
    }
}
//abrir apps
function vapps(){
    if (nav.classList.value == "show") {nav.classList.remove("show")}
    else {nav.classList.add("show")}
}
//animacion de carga
function puntosload(){
    if(document.querySelectorAll("[opa=true]").length==0){
        setTimeout(function(){spanfin.children[0].children[6].setAttribute("opa","true")}, 100)
    }
    else if (document.querySelectorAll("[opa=true]").length==1){
        setTimeout(function(){spanfin.children[0].children[7].setAttribute("opa","true")}, 100)
    }
    else if(document.querySelectorAll("[opa=true]").length==2){
        setTimeout(function(){spanfin.children[0].children[8].setAttribute("opa","true")}, 100)
    }
    else {
        document.getElementsByClassName('pt')[0].setAttribute("opa","false")
        document.getElementsByClassName('pt')[1].setAttribute("opa","false")
        document.getElementsByClassName('pt')[2].setAttribute("opa","false")
    }
}
//iconos apps
for (index = 0; index<lista.length; index++) {
    let a = lista[index]
    if (a.getAttribute('data-fav') !== null && a.parentNode.classList.value == "gapps") {    
        let src = a.getAttribute("data-fav")
        a.style.backgroundImage = "url('./fvs/" + src + ".png')"
    }
  }

//proceso de busqueda
function concat(b){
    bus = b
    document.querySelector("#bgcss").innerHTML='body{background-image:url("'+"https://source.unsplash.com/1280x720/?"+bus+'")}'
    document.title = bus + " - Búsqueda de diseños"
    document.getElementById('new').setAttribute("value", bus)
    for(index = 0; index < listaa.length; index++){
        let a = listaa[index]
        if(!!a.getAttribute("data-src-a")){
            a.href = a.getAttribute("data-src-b") + bus + a.getAttribute("data-src-a")
        }
        else {
            a.href = a.getAttribute("data-src-b") + bus
        }
        a.setAttribute("target","_blank")
        let favsrc = a.getAttribute("data-fav")
        let sitename=a.innerText
        a.innerHTML = "<span>" + sitename + "</span>"
        // a.children[0].style.backgroundImage = "url('http://s2.googleusercontent.com/s2/favicons?domain="+siteurl+"')"
        a.children[0].style.backgroundImage = "url('./fvs/" + favsrc + ".png')"
        //chrome://favicon2/?size=24&scale_factor=1x&show_fallback_monogram=&page_url=https://designer.gravit.io/
        //http://s2.googleusercontent.com/s2/favicons?domain=https://designer.gravit.io/
    }

}
var inpse
if (!location.search.indexOf("?=")){
    inpse = setInterval(function(){puntosload()}, 300)
    document.querySelector("aside").classList.add("dplynone")
    bus = location.search.split("?=")[1].split("&")[0]
    concat(bus)
}
//form send
function enter(){
    if(!location.search.indexOf("?=")){
        concat(document.getElementById('new').value)
    }
    else {
        open("?="+document.getElementById('new').value,"_top")
    }
}
window.onload = function(){
    if (!!location.search.indexOf("?=")){}
    else{
        clearInterval(inpse)
        document.querySelectorAll('.pt').forEach(function(a) {
            a.setAttribute("opa","false")
        })
        document.querySelector("body > header").classList.add("busbar")
    }
    setTimeout(function(){document.querySelector("#new").click()}, 1500)
}
window.onresize=revisartitulo