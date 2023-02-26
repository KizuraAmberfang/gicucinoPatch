function changeText2() {
  const coalitionIndexBanner = document.getElementsByClassName('coalitions-index-banner')[2];
  const colXs6 = coalitionIndexBanner.getElementsByClassName('col-xs-6')[2];
  console.log(colXs6);
  const h4 = colXs6.querySelector("h4");
  h4.textContent = "MISTRESS";
  const a = colXs6.querySelector("a");
  a.href = "/users/gicucino";
  const div = a.querySelector("div");
  const h42 = a.querySelector("h4");
  h42.textContent = "Gicucino";
  div.style = "width: 80px; height: 80px; background-image: url(https://cdn.intra.42.fr/users/047c71bc5a58e0fbcf4a678115f1fce1/gicucino.gif)";
}

changeText2();

// Ascolta l'evento di aggiornamento della pagina per cambiare il testo quando necessario.
window.addEventListener('load', changeText2);