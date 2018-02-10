const $alien = $('.alien');
const $predator = $('.predator');
let i = 0;

const animationPredatorAndAlien = {
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