(function() {
    let db = document.body
    function $(query) {
        return document.querySelector(query)
    }

    let val = $('#val')
    val.value = decodeURI(t_b)
    let wall = $('#wall')
    let c_rt = $('#rsts')

    $('#i-apps').addEventListener('click', function() {
        if (db.getAttribute('data-wgd') != 'app-on') {
            db.setAttribute('data-wgd', 'app-on')
        }
        else {
            db.setAttribute('data-wgd', 'app-on')
            db.setAttribute('data-wgd', 'app-off')
        }
    })
    if (t_b == '') {
        db.setAttribute('data-bus', 'false')
    }
    else {
        db.setAttribute('data-bus', 'true')
        val.addEventListener('dblclick', function() {
            val.value = ''
        })
        $('#nav').children[0].addEventListener('click', toIndex)
    }

    val.addEventListener('click', function() {
        db.setAttribute('data-val', 'input-on')
        db.setAttribute('data-wgd', 'app-off')
        $('#uns').className = 'h'
        $('#tg-iframe').className = 'h'
    })
    wall.addEventListener('click', function() {
        db.setAttribute('data-val', 'input-off')
        db.setAttribute('data-wgd', 'app-off')
    })
    function g_xpand(x) {
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
    function cssBackDom(src) {
        return `url('${location.protocol}//s2.googleusercontent.com/s2/favicons?domain=${w(src)}')`
    }

    let was = $('.w-apps')
    for (const gapp in dg_data['apps']) {
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
        w_g_i.addEventListener('click', function() {g_xpand(this)})
        w_g_p.appendChild(w_g_s)
        w_g_p.appendChild(w_g_i)
        w_g_d.appendChild(w_g_b)

        for(const gitems in tg['items']) {
            ti = tg['items'][gitems]
            let w_g_a = document.createElement('a')
            w_g_b.appendChild(w_g_a)
            w_g_a.href = ti[0]
            w_g_a.innerText = ti[1]
            w_g_a.style.backgroundImage = cssBackDom(ti[0])
            // for(const dt in ti) {console.log(ti[dt])}
        }
    }
    function g_result_show(element) {
        let e_t_g = element
        var i = 0
        while( (element = element.previousSibling)  !=  null )
        i++
        for (var ht = 0; ht < e_t_g.parentElement.childElementCount; ht++) {
            if (e_t_g.parentElement.children[ht] != e_t_g.parentElement.children[i]) {
                e_t_g.parentElement.children[ht].removeAttribute('class')
            }
        }
        if (e_t_g.className == 'n') {
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

    for (const grst in dg_data['searchs']) {
        let g_r_g = dg_data['searchs'][grst]
        let g_r_p = document.createElement('p')
        g_r_p.innerText = g_r_g['title']
        g_r_p.addEventListener('click', function() {
            g_result_show(this)
        })
        $('#t-groups').appendChild(g_r_p)
        let g_r_c = document.createElement('div')
        c_rt.appendChild(g_r_c)
        for (const grsts in g_r_g['items']) {
            let t_rst = g_r_g['items'][grsts]
            let g_r_a = document.createElement('a')
            g_r_a.setAttribute('target', '_blank')
            g_r_a.innerText = t_rst[0]
            if (t_b != "") {
                g_r_a.style.backgroundImage = cssBackDom(t_rst[1])
            }
            g_r_a.href = t_rst[1].replace('{Q}',  t_b)
            g_r_c.appendChild(g_r_a)
        }
    }
    $('#open-wall').addEventListener('click', function() {
        if ($('#uns').className == 'h') {
            $('#uns').className = ''
        }
        else {
            $('#uns').className = 'h'
        }
    })
    function i_sch() {
        open('?s=' + val.value.trim().toLowerCase(), '_parent')    
    }
    $('form').addEventListener('submit', function(e) {
        e.preventDefault()
        i_sch()
    })
    // let alto = window.innerHeight - $('#nav').offsetHeight
    // window.innerWidth
    // db.style.backgroundSize = '100% ' + alto + 'px'
    val.parentElement.children[1].addEventListener('click', function() {
            i_sch()
        }
    )
    $('#uns').className = 'h'
})()