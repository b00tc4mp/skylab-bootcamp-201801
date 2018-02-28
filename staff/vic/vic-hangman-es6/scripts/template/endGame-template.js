function generateEndTemplate(status) {
    return `
    <section class='endGame'>
        <h1 id="endGameTitle">${(status? "<b>You win!</b>... but alien is so sad... 😿" : "Alien ate you... you are dead, but alien is so happy 👌👍")}</h1>
        <button id= 'replayButton' type="submit" onclick='replay()'>Replay</button>
    </section>
    `
;
}