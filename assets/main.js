function menuResponsive() {
    let menu = document.querySelector('.menu')
    let resposive = document.querySelector('.menu-resposive')
    let select = addEventListener('click' , e => {
        const el = e.target;
        if (el.classList.contains('burger') || el.classList.contains('menu-resposive')){
            alert('estou aqui');
            menu.classList.add('nav-active');
            
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

menuResponsive();