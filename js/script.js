var consulta = window.matchMedia("(max-width: 800px)");
consulta.addListener(mediaQuery);

var $burguerButton = document.getElementById("burguer-button");
var $menu = document.getElementById("menu");
function toogleMenu() {
  $menu.classList.toggle("active");
  $burguerButton.classList.toggle("icon-close");
}

function showMenu() {
  $menu.classList.add("active");
  $burguerButton.classList.add("icon-close");
}

function hideMenu() {
  $menu.classList.remove("active");
  $burguerButton.classList.remove("icon-close");
}

function mediaQuery() {
  if(consulta.matches){
    console.log("se cumplio");
    $burguerButton.addEventListener("touchstart", toogleMenu);

  } else {
    console.log ("no pasa nada");
    $burguerButton.removeEventListener("touchstart", toogleMenu);
  }
}
mediaQuery();

//Lazy loading
var bLazy = new Blazy({
  selector:'img'
});

//Gestos touch
var $body = document.body;
var gestos = new Hammer($body);
gestos.on('swipeleft', hideMenu);
gestos.on('swiperight', showMenu);
