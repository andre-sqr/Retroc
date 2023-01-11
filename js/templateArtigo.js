let slideIndex = 1;
showSlides(slideIndex)

function plusSlides(n){
    showSlides(slideIndex += n);
}

function showSlides(ind){
    let slides = document.getElementsByClassName("slides");
    if(ind > slides.length){
        slideIndex = 1;
    }
    if(ind < 1){
        slideIndex = slides.length;
    }
    for(let i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}