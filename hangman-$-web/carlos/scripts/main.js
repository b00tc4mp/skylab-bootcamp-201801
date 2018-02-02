$(document).ready(function() {
  "use strict";

  var hagman;

  $("#play").click(function(e) {
    e.preventDefault();
    $(".section-start").addClass("hidden");
    $(".section-data").removeClass("hidden");
  });

  $("#go").click(function(e) {
    e.preventDefault();

    var word = $("#word").val();
    var attemps = $("#attemps").val();

    $(".section-data").addClass("hidden");
    $(".section-word").removeClass("hidden");
    $("#nattemps").html(attemps);

    hagman = new Hangman(word, attemps);

    // for (var i = 0; i < word.length; i++) {
    //   $("ul").append("<li class=" + i + ">_</li>");
    // }

    $.each(word.split(""), function(index) {
      $("ul").append("<li class=" + index + ">_</li>");
    });
  });

  $("#try").click(function(e) {
    e.preventDefault();

    var letter = $("#tryText").val();
    var res = hagman.try(letter);

    if (res.attemps === 0) {
      $(".section-word").addClass("hidden");
      $(".section-end").removeClass("hidden");
      $(".lose").removeClass("hidden");
    }

    if (res.cadena.indexOf("_") === -1) {
      $(".section-word").addClass("hidden");
      $(".section-end").removeClass("hidden");
      $(".win").removeClass("hidden");
      $(".attemps").html(res.attemps);
      $(".word").html(res.cadena.join(" "));
    } else {
      $("#nattemps").html(res.attemps);

      //   for (var i = 0; i < res.cadena.length; i++) {
      //     $("." + i + "").html(res.cadena[i]);
      //   }

      $.each(res.cadena, function(index, val) {
        $("." + index + "").html(val);
      });

      $("#tryText").val("");
    }
  });

  $("#play-again").click(function(e) {
    e.preventDefault();

    $(".section-end").addClass("hidden");
    $(".section-data").removeClass("hidden");
  });
});
