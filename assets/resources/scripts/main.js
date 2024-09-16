function menuShow(){
    let menuMobile = document.querySelector('.mobile-menu');
    if(menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
        document.querySelector('.menu-icon').src="/assets/resources/img/svg/menu_white_36dp.svg"
    } else{
        menuMobile.classList.add('open');
        document.querySelector('.menu-icon').src="/assets/resources/img/svg/close.svg";
    }
}

document.getElementById("download-btn").addEventListener("click", function() {
    const link = document.createElement("a");
    link.href = "/assets/resources/downloads";  // Caminho para o seu arquivo
    link.download = "curriculo.pdf";  // Nome do arquivo baixado
    link.click();
  });