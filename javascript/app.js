const accordion = document.getElementsByClassName("content-container");

for (i= 0; i < accordion.length; i++){
    console.log(accordion[i]);
    accordion[i].addEventListener("click", function(){
        this.classList.toggle("active");
    })
};

// let spanCarous = document.querySelector(".carousel-control-prev-icon");
// console.log(spanCarous);