let nextBtn = document.querySelector('.next-btn');
let prevBtn = document.querySelector('.prev-btn');
let slides = document.querySelectorAll('.slide');
let numberOfSlides = slides.length; 
let slideNumber = 0;

//slides nexBtn

nextBtn.addEventListener('click', function(){
    slides.forEach((slide) => {
        slide.classList.remove('active')
    });

    slideNumber++;
    if(slideNumber >  (numberOfSlides - 1)){
        slideNumber = 0
    };

    slides[slideNumber].classList.add('active')
})

//slides preBtn
prevBtn.addEventListener('click', function(){
    slides.forEach((slide) => {
        slide.classList.remove('active')
    });

    slideNumber--;
    if(slideNumber < 0){
        slideNumber = numberOfSlides - 1;
    };

    slides[slideNumber].classList.add('active')
})