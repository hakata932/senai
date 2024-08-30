let menu_celular_icone = document.querySelector('.menu-celular');
menu_celular_icone.addEventListener('click', abrirMenu);
function abrirMenu(){
    let menuPrincipal
    menuPrincipal = document.querySelector('.menu');
    menuPrincipal.classList.toggle('adicionarClasseClicar')
}