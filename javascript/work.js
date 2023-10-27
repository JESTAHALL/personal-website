var col6 = document.querySelector(".col-6");
var cardImage = document.querySelector(".col-6 .card-img-top");
var cardTitle = document.querySelector(".col-6 .card-title");

function enterCol6() {

  anime.remove(cardImage);
  anime({
    targets: cardImage,
    easing: 'linear',
    translateY: '-65px',
    scaleX: '1.5',
    scaleY: '1.3',
    duration: 200
  });

  anime.remove(cardTitle);
  anime({
    targets: cardTitle,
    translateX: '-55',
    color: [
      {value: '#fff'}
    ],
    easing: 'linear',
    duration: 200,
    complete: function() {
      col6.classList.add('active');
    }
  });

}

function leaveCol6() {

  anime.remove(cardImage);
  anime({
    targets: cardImage,
    translateY: '0',
    scaleX: '1',
    scaleY: '1',
    elasticity: 100
  });

  anime.remove(cardTitle);
  anime({
    targets: cardTitle,
    translateX: '0',
    color: [
      {value: '#000'}
    ],
    elasticity: 100
  });

  col6.classList.remove('active');

}


col6.addEventListener('mouseenter', enterCol6, false);
col6.addEventListener('mouseleave', leaveCol6, false);
