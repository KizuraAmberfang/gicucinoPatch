const fieldSelector = 'input[name="username"]';

function changeText() {
  const coalitionMessage = document.getElementById('coalition-message');
  const content = coalitionMessage.getElementsByClassName("content")[0];
  var coalitionSpan = content.querySelector("span");
  console.log(coalitionSpan.innerHTML);
  const txt = coalitionSpan.innerHTML;
  const updatedTxt = txt.replace('master', 'mistress');
  coalitionSpan.innerHTML = updatedTxt;
  var temp = coalitionSpan.querySelector("b");
  var name = temp.querySelector("a");
  if (name) {
    name.textContent = 'gicucino';
	name.href = '/users/gicucino';
  }
  var frase = content.querySelector("p");
  frase.textContent = "“No, vabbeh, amo.”";
  var img = coalitionMessage.getElementsByClassName("user-image")[0];
  img.style = "background-image: url(https://cdn.intra.42.fr/users/047c71bc5a58e0fbcf4a678115f1fce1/gicucino.gif)";
  
  var title = document.getElementsByClassName("title-surline")[1];
  title.textContent = "MISTRESS";
  const globalData = document.querySelectorAll("#coalition-global-data");
  name = globalData[1].querySelector("a");
  if (name) {
    name.textContent = 'gicucino';
	name.href = '/users/gicucino';
  }
  img = globalData[1].getElementsByClassName("user-image")[0];
  img.style = "background-image: url(https://cdn.intra.42.fr/users/047c71bc5a58e0fbcf4a678115f1fce1/gicucino.gif)"; 
  }

changeText();

// Ascolta l'evento di aggiornamento della pagina per cambiare il testo quando necessario.
window.addEventListener('load', changeText);
