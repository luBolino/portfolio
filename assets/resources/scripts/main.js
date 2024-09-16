function menuShow(){
    let menuMobile = document.querySelector('.mobile-menu');
    if(menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
        document.querySelector('.menu-icon').src="https://luBolino.github.io/portifolio/assets/resources/img/svg/menu_white_36dp.svg";
    } else{
        menuMobile.classList.add('open');
        document.querySelector('.menu-icon').src="https://luBolino.github.io/portifolio/assets/resources/img/svg/close.svg";
    }
}

document.getElementById("download-btn").addEventListener("click", function() {
    const link = document.createElement("a");
    link.href = "./"; 
    link.download = "curriculo.pdf"; 
    link.click();
  });
