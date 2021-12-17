let menu = document.querySelector('#menu-bars');
let header = document.querySelector('header');

/*Cambio de la imagen de la hamburguesa, cuando se hace click sobre ella*/
menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

/*Ocultavmos el nav y el header en el Responsive Design*/
window.onscroll = () =>{
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}


/*Cursores de ratón*/
let cursor1 = document.querySelector('.cursor-1');
let cursor2 = document.querySelector('.cursor-2');

window.onmousemove = (e) =>{
    cursor1.style.top = e.pageY + 'px';
    cursor1.style.left = e.pageX + 'px';
    cursor2.style.top = e.pageY + 'px';
    cursor2.style.left = e.pageX + 'px';
}

/*Cambio de la forma del cursor al pasar sobre un item del nav*/
document.querySelectorAll('a').forEach(links =>{

    links.onmouseenter = () =>{
        cursor1.classList.add('active');
        cursor2.classList.add('active');
    }

    links.onmouseleave = () =>{
        cursor1.classList.remove('active');
        cursor2.classList.remove('active');
    }

});