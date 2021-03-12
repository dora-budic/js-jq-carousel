$(document).ready(function () {
  clickRight();
  clickLeft();
  slider();
  circleClick();
});

// Scorro tra le immagini verso destra (click arrow a destra)
function clickRight() {
  // Prendo arrow right
  var next = $('.slider-wrapper > .next .fa-angle-right');

  // Click on arrow right
  next.click(function () {
    slideRight();
  });
}

// Scorro tra le immagini verso sinistra (click arrow a sinistra)
function clickLeft() {
  // Prendo arrow left
  var previous = $('.slider-wrapper > .prev .fa-angle-left');

  // Click on arrow left
  previous.click(function () {
    slideLeft();
  });
}

// Scorro tra le immagini verso sinistra e verso destra usando la tastiera
function slider() {
  $(document).keydown(function(e) {
    if (e.which == 39) {
      slideRight();
    }

    if (e.which == 37) {
      slideLeft();
    }
  });
}



// FUNZIONI per lo scorrimento
function slideRight() {
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
}

function slideLeft() {
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
}

// Cambio immmagine al click sul pallino
function circleClick() {
  // Prendo le immagini
  var images = $('.slider-wrapper > .images img');

  // Genero i pallini
  for (var j = 0; j < 4; j++) {
    $('.nav').append("<i class='fas fa-circle'>" + "</i>");
  }

  $('.nav i:first-child').addClass('active first');
  $('.nav i:last-child').addClass('last');

  // Prendo i pallini
  var circles = $('.slider-wrapper > .nav i.fa-circle');

  circles.click(function() {
    circles.removeClass('active');
    images.removeClass('active');
    $(this).addClass('active');
    for (var i = 0; i < 4; i++) {
      if (circles[i] == this) {
        var image = images[i];
        $(image).addClass('active');
      }
    }
  });
}
