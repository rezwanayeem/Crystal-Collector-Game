$(document).ready(function () {
  var numberToGuess = 23;
  var counter = 0;
  var win = 0;
  var loss = 0;
  var crystal1 = [8];
  var crystal2 = [5];
  var crystal3 = [3];
  var crystal4 = [7];



  for (var i = 0; i < crystal1.length; i++) {
    var imageCrystal1 = $('<img>');
    imageCrystal1.addClass('crystalImage');
    imageCrystal1.attr("src", "http://uploads.webflow.com/5a8cfc09aee91400019461b0/5a8cffecaee91400019463c4_Asset%202%402x.png");
    imageCrystal1.attr("data-crystalvalue", crystal1[i]);
    $('#crystals').append(imageCrystal1);
  }
  for (var i = 0; i < crystal2.length; i++) {
    var imageCrystal2 = $('<img>');
    imageCrystal2.addClass('crystalImage');
    imageCrystal2.attr("src", "http://uploads.webflow.com/5a8cfc09aee91400019461b0/5a8cffecaee91400019463c5_Asset%201%402x.png");
    imageCrystal2.attr("data-crystalvalue", crystal2[i]);


    $('#crystals').append(imageCrystal2);
  }
  for (var i = 0; i < crystal3.length; i++) {
    var imageCrystal3 = $('<img>');
    imageCrystal3.addClass('crystalImage');
    imageCrystal3.attr("src", "https://mcginnis92.github.io/crystal-game/assets/images/green.png");
    imageCrystal3.attr("data-crystalvalue", crystal3[i]);

    $('#crystals').append(imageCrystal3);
  }
  for (var i = 0; i < crystal4.length; i++) {
    var imageCrystal4 = $('<img>');
    imageCrystal4.addClass('crystalImage');
    imageCrystal4.attr("src", "https://philipstubbs13.github.io/week-4-game/assets/images/orange-crystal.png");
    imageCrystal4.attr("data-crystalvalue", crystal4[i]);
    $('#crystals').append(imageCrystal4);
  }


  function play() {
    $('#score').text(counter);
    $('#win').text(wins);
    $('#loss').text(losses);
    crystal1 = [8];
    crystal2 = [5];
    crystal3 = [3];
    crystal4 = [7];
    $('crystal1 crystal2 crystal3 crystal4').text(numberToGuess);
  };

  $('.crystalImage').on('click', function () {
    counter = counter + parseInt($(this).data('crystalvalue'));

    $('#score').text(counter);
    if (counter == numberToGuess) {
      win++
      $('#win').text(win);
      alert('You won!');
      win = 0;
      loss = 0;
      counter = 0;

    } else if (counter > numberToGuess) {
      loss++;
      $('#loss').text(loss);
      alert('You lost!');
      win = 0;
      loss = 0;
      counter = 0;

    }
  });
});
