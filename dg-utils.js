(function() {
    let randomURL = ''
    if (t_b == '' || t_b.split('%20').length > 1) {
        randomURL = 'https://source.unsplash.com/0x' + dg_data['h_doc'] + '/?nature,ocean,animals,wallpaper,photography'
    }
    else {
        randomURL = 'https://source.unsplash.com/0x' + dg_data['h_doc'] + '/?' + t_b
    }
    // randomURL = 'https://source.unsplash.com/0x' + dg_data['size_wall_dft'] + '/daily'
    fetch(randomURL).then(function(response) {
        // console.log(response)
        let imgSrc = response.url.substring(0, response.url.indexOf('?'))
        document.body.style.backgroundImage = 'url(' + imgSrc + '?h=' + dg_data['h_doc'] + ')'

        let newImg = new Image
        newImg.onload = function() {
            document.body.setAttribute('data-load', 'true')
            setTimeout(function() {
                for (let siz in dg_data['sizes']) {
                    let si = dg_data['sizes'][siz]
                    let l_a_s = document.createElement('a')
                    l_a_s.innerText = 'Resolución ' + si[0]
                    l_a_s.setAttribute('target', '_blank')
                    if (typeof si[1] != 'string') {
                        let wdt = si[1] * newImg.width / newImg.height
                        wdt = Math.round(wdt)
                        l_a_s.setAttribute('data-size', wdt + ' x ' + si[1])
                        l_a_s.href = imgSrc + '?h=' + si[1]
                    }
                    else {
                        l_a_s.setAttribute('data-size', si[1])
                        l_a_s.href = imgSrc
                    }
                    document.getElementById('uns').appendChild(l_a_s)
                }
            }, 500)
        }
        newImg.src = imgSrc + '?h=200' 
        response.text().then(function() {})
    })
})()