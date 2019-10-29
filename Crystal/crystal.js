$(document).ready(function () {

    var wins = 0;
    var losses = 0;
    var randomNumber = 0;
    var score = 0;

    var crystal1 = 0;
    var crystal2 = 0;
    var crystal3 = 0;
    var crystal4 = 0;

    var randomdiv = $("#randomNumber");
    var winsdiv = $("#wins");
    var lossesdiv = $("#losses");
    var totalscorediv = $("#totalscore");

    function winningNum() {
        randomNumber = Math.floor(Math.random() * 102 + 19);
    }


    function randomCrystalCalc() {
        crystal1 = Math.floor(Math.random() * 12 + 1);
        crystal2 = Math.floor(Math.random() * 12 + 1);
        crystal3 = Math.floor(Math.random() * 12 + 1);
        crystal4 = Math.floor(Math.random() * 12 + 1);

    }

    function startNewGame() {
        winningNum();
        randomCrystalCalc();
        score = 0;
        randomdiv.html(randomNumber);
        totalscorediv.html(score);

    }

    startNewGame();

    $(".crystal").on("click", function () {

        var id = $(this).attr("id");
        var value;
        //startNewGame();
        //console.log(crystal1);
        //console.log(crystal2);
        //console.log(crystal3);
        //console.log(crystal4);
        //console.log(randomNumber);
        if (id === "crystal1") {
            value = crystal1;
        }
        else if (id === "crystal2") {
            value = crystal2;

        }
        else if (id === "crystal3") {
            value = crystal3;
        }
        else {
            value = crystal4;
        }
        score = score + value;
        totalscorediv.html(score);






    });

});