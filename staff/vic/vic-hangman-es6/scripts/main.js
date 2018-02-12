let gameHangmanPredator
let $formInGame
let $inputInGame = document.getElementById('inputInGame')
let $noAnimateMainTemplate = document.getElementsByClassName('noAnimation')[0];

$noAnimateMainTemplate.innerHTML = generateInitTemplate()

let $formInitGame = document.getElementsByClassName('initGame')[0]
if ($formInitGame.attachEvent) {
    $formInitGame.attachEvent("submit", whenExecInitSubmit);
} else {
    $formInitGame.addEventListener("submit", whenExecInitSubmit);
}

function whenExecInitSubmit(e) {
    if (e.preventDefault) e.preventDefault();
    let valueInputInitGame = document.getElementById('inputInitWordGame').value

    gameHangmanPredator = new HangPredator(valueInputInitGame)
    $noAnimateMainTemplate.innerHTML = generateInGameTemplate(gameHangmanPredator.attemps, gameHangmanPredator.print())

    $formInGame = document.getElementsByClassName('inGame')[0]
    if ($formInGame.attachEvent) {
        $formInGame.attachEvent("submit", whenExecInGameSubmit);
    } else {
        $formInGame.addEventListener("submit", whenExecInGameSubmit);
    }
}

function whenExecInGameSubmit(e) {
    if (e.preventDefault) e.preventDefault();
    let inputInGame = document.getElementById('inputInGame').value
    document.getElementById('inputInGame').value = ''
    return logicClient(gameHangmanPredator.try(inputInGame))
}

function logicClient(statusGame) {
    let $statusGameTitle = document.getElementById('myStatusTitleWord')
    console.log(statusGame)

    if (statusGame.status === 'error') return console.error("Some error... you didn't input any character or input a number")

    if (statusGame.attemps === 0 && statusGame.status === false) {
        animationPredatorAndAlien.instaKillPredator()
        return $noAnimateMainTemplate.innerHTML = generateEndTemplate(statusGame.status)

    } else if (statusGame.word.split("").every(el => statusGame.correctLetters.includes(el))) {
        return $noAnimateMainTemplate.innerHTML = generateEndTemplate(statusGame.status)

    } else if (statusGame.status === true) {
        return $statusGameTitle.innerHTML = statusGame.attemps + ")" + statusGame.print + " 😁"

    } else if (statusGame.status === false) {
        animationPredatorAndAlien.failLetterAnimation();
        return $statusGameTitle.innerHTML = statusGame.attemps + ")" + statusGame.print + " 😔"
    }
    return console.error("This case didn't expected")
}

function replay() {
    return location.reload();
}