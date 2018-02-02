function generateInGameTemplate(attemps, print) {
    let inGameTemplate = `
    <form class='inGame'>
        <h1 id="myStatusTitleWord">${attemps}) ${print}</h1>
        <input id="inputInGame" type="text">
        <button type="submit">Try...</button>
    </form>
    `
    return inGameTemplate;
}