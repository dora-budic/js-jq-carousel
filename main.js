$(document).ready(function () {
  slideRight();
  slideLeft();
  slider();
});

// Scorro tra le immagini verso destra (arrow a destra)
function slideRight() {
  // Prendo arrow right
  var next = $('.slider-wrapper > .next .fa-angle-right');

  // Click on arrow next
  next.click(function () {
    // Prendo l'imagine visibile
    var image = $('.slider-wrapper > .images img.active');
    // Prendo la prima immagine
    var firstImage = $('.slider-wrapper > .images img.first');
    // Prendo il pallino blue
    var circle = $('.slider-wrapper > .nav i.active');
    // Prendo il primo pallino
    var firstCircle = $('.slider-wrapper > .nav i.first');

    // Faccio scomparire l'immagine selezionata e aparire la seguente,
    // cambio il colore del pallino
    if (image.hasClass('last')) {
      image.removeClass('active');
      firstImage.addClass('active');
      circle.removeClass('active');
      firstCircle.addClass('active');
    } else {
      image.removeClass('active');
      image.next('img').addClass('active');
      circle.removeClass('active');
      circle.next('i').addClass('active');
    }

  });
}

// Scorro tra le immagini verso sinistra (arrow a sinistra)
function slideLeft() {
  // Prendo arrow left
  var previous = $('.slider-wrapper > .prev .fa-angle-left');

  // Click on arrow previous
  previous.click(function () {
    // Prendo l'imagine visibile
    var image = $('.slider-wrapper > .images img.active');
    // Prendo l'ultima immagine
    var lastImage = $('.slider-wrapper > .images img.last');
    // Prendo il pallino blue
    var circle = $('.slider-wrapper > .nav i.active');
    // Prendo l'ultimo pallino
    var lastCircle = $('.slider-wrapper > .nav i.last');

    // Faccio scomparire l'immagine selezionata e aparire la precedente,
    // cambio il colore del pallino
    if (image.hasClass('first')) {
      image.removeClass('active');
      lastImage.addClass('active');
      circle.removeClass('active');
      lastCircle.addClass('active');
    } else {
      image.removeClass('active');
      image.prev('img').addClass('active');
      circle.removeClass('active');
      circle.prev('i').addClass('active');
    }

  });
}

// Scorro tra le immagini verso sinistra e verso destra usando la tastiera
function slider() {
  $(document).keydown(function(e) {
    if (e.which == 37) {
      var image = $('.slider-wrapper > .images img.active');
      var lastImage = $('.slider-wrapper > .images img.last');
      var circle = $('.slider-wrapper > .nav i.active');
      var lastCircle = $('.slider-wrapper > .nav i.last');

      if (image.hasClass('first')) {
        image.removeClass('active');
        lastImage.addClass('active');
        circle.removeClass('active');
        lastCircle.addClass('active');
      } else {
        image.removeClass('active');
        image.prev('img').addClass('active');
        circle.removeClass('active');
        circle.prev('i').addClass('active');
      }

    }

    if (e.which == 39) {
      var image = $('.slider-wrapper > .images img.active');
      var firstImage = $('.slider-wrapper > .images img.first');
      var circle = $('.slider-wrapper > .nav i.active');
      var firstCircle = $('.slider-wrapper > .nav i.first');

      if (image.hasClass('last')) {
        image.removeClass('active');
        firstImage.addClass('active');
        circle.removeClass('active');
        firstCircle.addClass('active');
      } else {
        image.removeClass('active');
        image.next('img').addClass('active');
        circle.removeClass('active');
        circle.next('i').addClass('active');
      }

    }
  });
}
