function generateInGameTemplate(attemps, print) {
    return `
    <form class='inGame'>
        <h1 id="myStatusTitleWord">${attemps}) ${print}</h1>
        <input id="inputInGame" type="text">
        <button type="submit">Try...</button>
    </form>
    `
}