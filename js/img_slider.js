function showDivs(n) {/* Effet slider section Webagency*/
      var i;
      var x = document.getElementsByClassName("mySlides");
      if (n > x.length) {slideIndex = 1}
      if (n < 1) {slideIndex = x.length}
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
      }
      x[slideIndex-1].style.display = "block";  
    }

    var slideIndex = 1; /* Effet de transition slider*/
    showDivs(slideIndex);

    function plusDivs(n) { /* Effet de transition slider*/
      showDivs(slideIndex += n);
    }