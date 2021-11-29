function start() {
    menuResponsive();
    hoverProblems();
}


function menuResponsive() {
    let menu = document.querySelector('.menu')
    let body = document.querySelector('.nav');
    let resposive = document.querySelector('.menu-resposive')
     addEventListener('click' , e => {
        const el = e.target;
        if (el.classList.contains('burger') || el.classList.contains('menu-resposive')){
            menu.classList.toggle('nav-active');
        }
        else {
            menu.classList.remove('nav-active')
        }
        if (el.classList.contains('burger') || el.classList.contains('menu-resposive')) {
            resposive.classList.toggle('toggle');
        }
        else {
            resposive.classList.remove('toggle')
        }
        

    });
    
        
}

function hoverProblems(){
    let icsRisk = document.querySelector('.risk');
    let icsCost = document.querySelector('.cost');
    let icsTransp = document.querySelector('.transparency');
    let icsTrust = document.querySelector('.trust');
    let icsPaper = document.querySelector('.paper');
    let icsEmail = document.querySelector('.email');
    let iconSelectd = document.querySelector('.ics_risk');
    let iconSelectCost = document.querySelector('.ics_cost');
    let iconSelectTransp = document.querySelector('.ics_transp');
    let iconSelectTrust = document.querySelector('.ics_trust');
    let iconSelectPaper = document.querySelector('.ics_paper');
    let iconsSelectEmail = document.querySelector('.ics_email');
    let sets = 0;
    addEventListener('click' , e => {
        const el = e.target ;
        
                if (el.classList.contains('ics_risk') && sets === 0 ){
                    icsRisk.classList.toggle('trusts');
                    iconSelectd.setAttribute('src' , 'img/minus.png')
                    sets ++;
                    console.log(sets)
                }else {
                if (el.classList.contains('ics_risk' || sets >= 1)) {
                    console.log('estou aqui')
                    icsRisk.classList.remove('trusts');
                    iconSelectd.setAttribute('src' , 'img/plus.png')
                    console.log(sets)
                    sets = 0;
                }
            }
                if (el.classList.contains('ics_cost') && sets === 0 ){
                    icsCost.classList.toggle('trusts');
                    iconSelectCost.setAttribute('src' , 'img/minus.png')
                    sets ++;
                }else {
                if (el.classList.contains('ics_cost' || sets >= 1)) {
                    icsCost.classList.remove('trusts');
                    iconSelectCost.setAttribute('src' , 'img/plus.png')
                    console.log(sets)
                    sets = 0;
                }
            }

                if (el.classList.contains('ics_transp') && sets === 0 ){
                    icsTransp.classList.toggle('trusts');
                    iconSelectTransp.setAttribute('src' , 'img/minus.png')
                    console.log(sets)
                    sets ++;
                }else {
                    if (el.classList.contains('ics_transp' || sets >= 1)) {
                        icsTransp.classList.remove('trusts');
                        iconSelectTransp.setAttribute('src' , 'img/plus.png')
                        sets = 0;
                    }
                }
        
                if (el.classList.contains('ics_trust') && sets === 0 ){
                    icsTrust.classList.toggle('trusts');
                    iconSelectTrust.setAttribute('src' , 'img/minus.png')
                    sets ++;
                }else {
                    if (el.classList.contains('ics_trust' || sets >= 1)) {
                        icsTrust.classList.remove('trusts');
                        iconSelectTrust.setAttribute('src' , 'img/plus.png')
                        sets = 0;
                    }
                }
        
                if (el.classList.contains('ics_paper') && sets === 0 ){
                    icsPaper.classList.toggle('trusts');
                    iconSelectPaper.setAttribute('src' , 'img/minus.png')
                    sets ++;
                }else {
                    if (el.classList.contains('ics_paper' || sets >= 1)) {
                        icsPaper.classList.remove('trusts');
                        iconSelectPaper.setAttribute('src' , 'img/plus.png')
                        sets = 0;
                    }
                }
       
                if (el.classList.contains('ics_email') && sets === 0 ){
                    icsEmail.classList.toggle('trusts');
                    iconsSelectEmail.setAttribute('src' , 'img/minus.png')
                    sets ++;
                }else {
                    if (el.classList.contains('ics_email' || sets >= 1)) {
                        icsEmail.classList.remove('trusts');
                        iconsSelectEmail.setAttribute('src' , 'img/plus.png')
                        sets = 0;
                    }
                }

                
          
    })
}

start();