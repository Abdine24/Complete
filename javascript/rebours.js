var countDownDate = new Date("Jan 08, 2024 23:59:59").getTime();

// Mettre à jour le compte à rebours toutes les secondes
var x = setInterval(function() {

  // Obtenir la date et l'heure actuelles
  var now = new Date().getTime();

  // Calculer la différence entre la date de fin et la date actuelle
  var distance = countDownDate - now;

  // Calculer les jours, heures, minutes et secondes restants
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Afficher le résultat dans un élément avec l'id "countdown"
  var jours= document.getElementById("jours");
  var heures= document.getElementById("heures");
  var maMinute = document.getElementById("maMinute");
  var secondes= document.getElementById("secondes");
  var price = document.getElementById("first-price");
  
  jours.innerHTML= days + " J ";
  heures.innerHTML= hours + " H ";
  secondes.innerHTML= seconds+ " s ";
  maMinute.innerHTML= minutes +" m ";
  
  

//   document.getElementById("compte-rebours").innerHTML = days + " jours " + hours + " heures "
//   + minutes + " minutes " + seconds + " secondes ";

  // Si le compte à rebours est terminé, afficher un message
  if (distance < 0) {
    clearInterval(x);
    jours.innerHTML= "<span >0 J</span>";
    heures.innerHTML= "<span>0 H</span>";
    secondes.innerHTML= "<span>0 s</span>";
    maMinute.innerHTML= "<span>0 m</span>";
    price.innerHTML = "10000 FCFA <span>/unlimited</span>";
  }
}, 1000);
