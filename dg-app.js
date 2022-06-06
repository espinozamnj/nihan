let val = document.getElementById('val') //input id val text item for searching
val.value = unescape(t_b)
let wall = document.getElementById('wall') //element black half opacity with click break seraching
var c_rt = document.getElementById('rsts')//results container

document.getElementById('i-apps').addEventListener('click',function(){
    if(document.body.getAttribute('data-wgd')!='app-on'){
        document.body.setAttribute('data-wgd','app-on')
    }
    else {
        document.body.setAttribute('data-wgd','app-on')
        document.body.setAttribute('data-wgd','app-off')
    }
})
if(t_b == ''){
    document.body.setAttribute('data-bus','false')
}
else {
    document.body.setAttribute('data-bus','true')
    val.addEventListener('dblclick',function(){
        val.value = ''
    })
    document.getElementById('nav').children[0].addEventListener('click',toIndex)
}

val.addEventListener('click',function(){
    document.body.setAttribute('data-val','input-on')
    document.body.setAttribute('data-wgd','app-off')
    document.getElementById('uns').className = 'h'
    document.getElementById('tg-iframe').className = 'h'
})
wall.addEventListener('click',function(){
    document.body.setAttribute('data-val','input-off')
    document.body.setAttribute('data-wgd','app-off')
})
function g_xpand(x){
    let d_p_g = x.parentElement.parentElement
    if (d_p_g.className != 'mn') {
        d_p_g.className = 'mn'
    }
    else {
        d_p_g.className = 'mx'
    }
}
function w(href) {
    let u = href,
        r = /:\/\/(.[^/]+)/
        f = u.match(r)[1]
    return f
}

let was = document.getElementsByClassName('w-apps')[0] //widget for using external apps
for(const gapp in dg_data['apps']){
    let tg = dg_data['apps'][gapp]
    let w_g_d = document.createElement('div')
    let w_g_p = document.createElement('p')
    let w_g_s = document.createElement('span')
    let w_g_i = document.createElement('i')
    let w_g_b = document.createElement('blockquote')
    w_g_d.className = 'mn'
    was.appendChild(w_g_d)
    w_g_d.appendChild(w_g_p)
    w_g_s.innerText = tg['title']
    w_g_i.className = 'expand'
    w_g_i.addEventListener('click', function(){g_xpand(this)})
    w_g_p.appendChild(w_g_s)
    w_g_p.appendChild(w_g_i)
    w_g_d.appendChild(w_g_b)

    for(const gitems in tg['items']){
        ti = tg['items'][gitems], proto = location.protocol + '//'
        w_g_a = document.createElement('a')
        w_g_b.appendChild(w_g_a)
        w_g_a.href = ti[0]
        w_g_a.innerText = ti[1]
        w_g_a.style.backgroundImage = "url('" + proto + "//s2.googleusercontent.com/s2/favicons?domain=" + w(ti[0]) + "')"
        //chrome://favicon2/?size=24&scale_factor=1x&show_fallback_monogram=&page_url=site
        //http://s2.googleusercontent.com/s2/favicons?domain=site
        //https://external-content.duckduckgo.com/ip3/facebook.com.ico
        // for(const dt in ti){console.log(ti[dt])}
    }
}
function g_result_show(element) {
    let e_t_g = element
    var i = 0;
    while( (element = element.previousSibling) != null )
    i++
    for (var ht = 0; ht < e_t_g.parentElement.childElementCount; ht++) {
        if(e_t_g.parentElement.children[ht] !== e_t_g.parentElement.children[i]){
            e_t_g.parentElement.children[ht].removeAttribute('class')
        }
    }
    if(e_t_g.className == 'n') {
        for (var hr = 0; hr < c_rt.childElementCount; hr++) {
            c_rt.children[hr].className = 's'
        }
        e_t_g.removeAttribute('class')
    }
    else {
        e_t_g.className = 'n'
        for (var hr = 0; hr < c_rt.childElementCount; hr++) {
            if (hr != i) {
                c_rt.children[hr].className = 'h'
            }
            else {
                c_rt.children[hr].className = 's'
            }
        }
    }
}

let resultados = document.getElementById('resultados')//container of results
for(const grst in dg_data['searchs']){
    let g_r_g = dg_data['searchs'][grst]
    let g_r_p = document.createElement('p')
    g_r_p.innerText = g_r_g['title']
    g_r_p.addEventListener('click',function(){
        g_result_show(this)
    })
    document.getElementById('t-groups').appendChild(g_r_p)
    let g_r_c = document.createElement('div')
    c_rt.appendChild(g_r_c)
    for(const grsts in g_r_g['items']){
        let t_rst = g_r_g['items'][grsts]
        let g_r_a = document.createElement('a')
        g_r_a.setAttribute('target','_blank')
        g_r_a.innerText = t_rst[t_rst.length-1]
        if(t_b!=""){g_r_a.style.backgroundImage = "url('http://s2.googleusercontent.com/s2/favicons?domain=" + w(t_rst[0]) + "')"}
        if(t_rst.length == 3){
            g_r_a.href = t_rst[0] + t_b + t_rst[1]
        }
        else {
            g_r_a.href = t_rst[0] + t_b
        }
        g_r_c.appendChild(g_r_a)
    }
}

document.getElementById('open-wall').addEventListener('click',function(){
    if(document.getElementById('uns').className == 'h'){
        document.getElementById('tg-iframe').className = 'h'
        document.getElementById('uns').className = ''
    }
    else {
        document.getElementById('uns').className = 'h'
    }
})
document.getElementById('open-translate').addEventListener('click',function(){
    if(document.getElementById('tg-iframe').className == 'h'){
        document.getElementById('tg-iframe').className = ''
        document.getElementById('uns').className = 'h'
    }
    else {
        document.getElementById('tg-iframe').className = 'h'
    }
})
function i_sch() {
    open('?s=' + val.value.trim().toLowerCase(),'_top')    
}
document.getElementsByTagName('form')[0].addEventListener('submit',function(e){
    e.preventDefault()
    i_sch()
})
// let alto = window.innerHeight - document.getElementById('nav').offsetHeight
// window.innerWidth
// document.body.style.backgroundSize = '100% ' + alto + 'px'
val.parentElement.children[1].addEventListener('click',function(){
        i_sch()
    }
)
window.addEventListener('load',function(){
    console.log('Load page')
})