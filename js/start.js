(function () {
    var slideIndex = 1;
    showSlides(slideIndex);

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("slide");
        var dots = document.getElementsByClassName("dot");
        if (n > slides.length) {
            slideIndex = 1
        }
        if (n < 1) {
            slideIndex = slides.length;
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }

    function showSlidesAuto() {
        var slides = document.getElementsByClassName("slide");
        var dots = document.getElementsByClassName("dot");
        for (var i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
            for (var j = 0; j < slides.length; j++) {
                dots[j].className = "dot";
            }
        }
        index++;
        if (index > slides.length) {
            index = 1
        }
        slides[index - 1].style.display = "block";
        dots[index - 1].className += " active";
        setTimeout(showSlidesAuto, 5000);
    }
    var index = 0;
    showSlidesAuto();
    
    var dots = document.getElementsByClassName("dot");
    for(var i = 0; i < dots.length; i++){
        var elem = dots[i];
        elem.onclick = (function(x) {
            return function(){
                currentSlide(x+1);
            }
        })(i)
    }
    
})();