"use strict";

$(document).ready(function () {
    var game;

    // al pulsar play se muestra la segunda pantalla
    $("#play").click(function (e) {
        e.preventDefault();

        $(".section-start").addClass("hidden");
        $(".section-data").removeClass("hidden");
    });

    // al introducir la palabra y el número de intentos y pulsar GO comienza el juego
    $("#go").click(function (e) {
        e.preventDefault();

        var word = $("#word").val();
        var attemps = $("#attemps").val();

        $("#nattemps").text(attemps);

        game = new Hangman(word, attemps);

        $(".section-data").addClass("hidden");
        $(".section-word").removeClass("hidden");
    });

    $("#try").click(function (e) {
        e.preventDefault();
        var tryThis = $("#tryText").val();

        //console.log(tryThis);

        var res = game.try(tryThis);

        console.log(res);

        // TODO update attempts
        // TODO update board

        $("#n_attemps").append(res.attemps);
    });


});