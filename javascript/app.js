const accordion = document.getElementsByClassName("content-container");

for (i= 0; i < accordion.length; i++){
    // console.log(accordion[i]);
    accordion[i].addEventListener("click", function(){
        this.classList.toggle("active");
    })
};

var comments = document.getElementById('comment');
var moreComment = document.getElementById('more-comment');
var quotes = [
    "La formation est très complète et couvre tous les aspects de l'infographie.",
    "Les professeurs sont très compétents et disponibles pour répondre aux questions.",
    "Les travaux pratiques sont très intéressants et permettent de mettre en pratique les connaissances acquises.",
    "Les locaux sont modernes et bien équipés pour les besoins de la formation.",
    "Les stages en entreprise sont très utiles pour acquérir de l'expérience professionnelle.",
    "La formation permet d'acquérir des compétences très recherchées sur le marché du travail.",
    "Les projets de groupe permettent de travailler en équipe et de développer des compétences sociales.",
    "Les supports de cours sont très bien conçus et permettent de suivre les cours facilement.",
    "Les cours sont très variés et permettent de découvrir de nombreux aspects de l'infographie.",
    "Les évaluations sont justes et permettent de mesurer les progrès réalisés au fil de la formation.",
    "Le contenu de la formation est très intéressant et pertinent pour le marché du travail.",
    "Les horaires de cours sont flexibles et permettent de concilier facilement la formation avec d'autres activités.",
    "Les professeurs sont très à l'écoute des besoins des étudiants et s'adaptent à leur rythme d'apprentissage.",
    "La formation est très bien organisée et permet de suivre facilement les différents modules.",
    "Les outils et logiciels utilisés pendant la formation sont très pertinents pour le marché du travail."
  ];
  

moreComment.addEventListener("click", () => {
  var random = Math.floor(Math.random() * quotes.length);
  comments.innerHTML = "“"+ quotes[random]+ "”";
});




// Définir la date de fin
var countDownDate = new Date("Dec 31, 2023 23:59:59").getTime();

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
  
  jours.innerHTML= days + " J ";
  heures.innerHTML= hours + " H ";
  secondes.innerHTML= seconds+ " s ";
  maMinute.innerHTML= minutes +" m ";
  
  

//   document.getElementById("compte-rebours").innerHTML = days + " jours " + hours + " heures "
//   + minutes + " minutes " + seconds + " secondes ";

  // Si le compte à rebours est terminé, afficher un message
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRÉ";
  }
}, 1000);
