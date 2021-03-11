$(document).ready(function () {
  slideRight();
});

// Scorro tra le immagini verso destra (arrow a destra)
function slideRight() {
  // Prendo arrow right
  var next = $('.slider-wrapper > .next .fa-angle-right');

  // Click on arrow next
  next.click(function () {
    // Prendo l'imagine visibile
    var image = $('.slider-wrapper > .images img.active');
    // Prendo il primo immagine
    var firstImage = $('.slider-wrapper > .images img.first');
    // Prendo il pallino blue
    var circle = $('.slider-wrapper > .nav i.active');
    // Prendo il primo pallino
    var firstCircle = $('.slider-wrapper > .nav i.first');

    // Faccio scomparire l'immagine selezionata e aparire la seguente,
    // cambio il colore al pallino
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
