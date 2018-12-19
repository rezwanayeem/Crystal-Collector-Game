$(document).ready(function () {
    // all variables
    var numberToGuess = 23;
    var counter = 0;
    var win = 0;
    var loss = 0;
    // fixed up the values for each crystal 
    var crystal1 = [8];
    var crystal2 = [5];
    var crystal3 = [3];
    var crystal4 = [7];

    //Creating for loops to give the value of each crystal 
    for (var i = 0; i < crystal1.length; i++) {
        // Creating an imageCrystal var for every repetition
        var imageCrystal1 = $("<img>");
        // Class for image is choosen for connecting with css
        imageCrystal1.addClass("crystalImage");
        // Each crystal have their own source link of image
        imageCrystal1.attr("src", "http://uploads.webflow.com/5a8cfc09aee91400019461b0/5a8cffecaee91400019463c4_Asset%202%402x.png");
        // Data attribute is given to each crystal which is equal to each crystal"s given value 
        imageCrystal1.attr("data-crystalvalue", crystal1[i]);
        // images of each crystal with its class and attribute are connecting to the page
        $("#crystals").append(imageCrystal1);
    }
    for (var i = 0; i < crystal2.length; i++) {
        // Creating an imageCrystal var for every repetition
        var imageCrystal2 = $("<img>");
        // Class for image is choosen for connecting with css
        imageCrystal2.addClass("crystalImage");
        // Each crystal have their own source link of image
        imageCrystal2.attr("src", "http://uploads.webflow.com/5a8cfc09aee91400019461b0/5a8cffecaee91400019463c5_Asset%201%402x.png");
        // Data attribute is given to each crystal which is equal to each crystal"s given value 
        imageCrystal2.attr("data-crystalvalue", crystal2[i]);
        // images of each crystal with its class and attribute are connecting to the page
        $("#crystals").append(imageCrystal2);
    }
    for (var i = 0; i < crystal3.length; i++) {
        // Creating an imageCrystal var for every repetition
        var imageCrystal3 = $("<img>");
        // Class for image is choosen for connecting with css
        imageCrystal3.addClass("crystalImage");
        // Each crystal have their own source link of image
        imageCrystal3.attr("src", "https://mcginnis92.github.io/crystal-game/assets/images/green.png");
        // Data attribute is given to each crystal which is equal to each crystal"s given value 
        imageCrystal3.attr("data-crystalvalue", crystal3[i]);
        // images of each crystal with its class and attribute are connecting to the page
        $("#crystals").append(imageCrystal3);
    }
    for (var i = 0; i < crystal4.length; i++) {
        // Creating an imageCrystal var for every repetition
        var imageCrystal4 = $("<img>");
        // Class for image is choosen for connecting with css
        imageCrystal4.addClass("crystalImage");
        // Each crystal have their own source link of image
        imageCrystal4.attr("src", "https://philipstubbs13.github.io/week-4-game/assets/images/orange-crystal.png");
        // Data attribute is given to each crystal which is equal to each crystal"s given value 
        imageCrystal4.attr("data-crystalvalue", crystal4[i]);
        // images of each crystal with its class and attribute are connecting to the page
        $("#crystals").append(imageCrystal4);
    }
    // reset all global variables 
    // variables starts working on
    function reset() {
        $("#score").text(counter);
        $("#win").text(wins);
        $("#loss").text(losses);
        crystal1 = [8];
        crystal2 = [5];
        crystal3 = [3];
        crystal4 = [7];
        $("crystal1 crystal2 crystal3 crystal4").text(numberToGuess);
    };

    // click event applies to each crystal
    $(".crystalImage").on("click", function () {
        //  $(this) allowing the player to obtain the crystal value while clicked on each crystal.
        // .attr("data-crystalvalue") allowing  the player to get the given value out there
        var crystalValue = ($(this).attr("data-crystalvalue"));
        crystalValue = parseInt(crystalValue);
        counter += crystalValue;


        //when player counter and target number matches, the player win. 
        //reset the game
        $("#score").text(counter);
        if (counter == numberToGuess) {
            win++
            $("#win").text(win);
            alert("You won!");
            counter = 0;
            reset();

            //when player counter goes beyond the target number, the player lose. 
            //reset the game 
        } else if (counter > numberToGuess) {
            loss++;
            $("#loss").text(loss);
            alert("You lost!");
            counter = 0;
            reset();
        }
    });
});