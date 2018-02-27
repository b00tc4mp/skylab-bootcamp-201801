var game
var $noAnimation = $(".noAnimation");
var $endGame = $(".endGame");
var $endGameTitle = $("#endGameTitle");
var $inGame = $(".inGame");
var $inputInGame = $("#inputInGame")
var $myStatusTitleWord = $("#myStatusTitleWord")

// tipos de acciones
function endGameLost() {
    $noAnimation.children().addClass("hidden")
    $endGame.removeClass("hidden")
    $endGameTitle.text("Alien ate predator... He die... but Alien is so happy! 😁")
    instaKillPredator()
}

function endGameWin() {
    $noAnimation.children().addClass("hidden")
    $endGame.removeClass("hidden")
    $endGameTitle.text("You Win!!! Alien never will kill us.")
}

function startGame(word) {
    game = new HangmanPredator(word, 10, endGameWin, endGameLost);
    
    $noAnimation.children().addClass("hidden")
    $inGame.removeClass("hidden")

    $myStatusTitleWord.text(game.print())
}

// Forms actions in Game
$(".initGame").submit(function (e) {
    e.preventDefault();
    var wordGame = $("#initWorldGame").val()
    startGame(wordGame)
})

$inGame.submit(function (e) {
    e.preventDefault();
    var tryIt = $inputInGame.val()
    $myStatusTitleWord.text(game.try(tryIt))
    $inputInGame.val("")
})

$("#replayButton").on("click", function(){
    location.reload(true);
});


var $alien = $('.alien');
var $predator = $('.predator');
var i = 0;

function failLiterActioningAnimation() {
    i ++
    if (i < 10) {
        $alien.animate({right: "+=9.5%"}, "slow" )
    } else {
        $predator.attr("src", "./images/muertePredator.gif");

        endGameLost();
    }

}

function instaKillPredator (){
    $alien.animate({right: "90%"}, "fast" )
    $predator.attr("src", "./images/muertePredator.gif");
    $("#headerPredator").attr("src", "./images/alienDance.gif");
}


$alien.on("click", function(){
    endGameLost()
})
