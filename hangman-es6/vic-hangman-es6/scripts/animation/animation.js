var animationPredatorAndAlien;

(function () {
    var $alien = $('.alien');
    var $predator = $('.predator');
    var i = 0;

    animationPredatorAndAlien = {
        failLetterAnimation: function () {
            i++
            if (i < 10) {
                $alien.animate({
                    right: "+=9.5%"
                }, "slow")
            } else {
                $predator.attr("src", "./img/muertePredator.gif");
                endGameLost()
            }
        },
        instaKillPredator: function () {
            $alien.animate({
                right: "90%"
            }, "fast")
            $predator.attr("src", "./img/muertePredator.gif");
            $("#headerPredator").attr("src", "./img/alienDance.gif");
        }
    }
})()