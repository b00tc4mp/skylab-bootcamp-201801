function EndGame (props) {
    return (
        <section class='endGame'>
            <h1 id="endGameTitle">
            {props.valueGameState ?  //Win?
                `Hey! you won! 🎉😁 the word was --> ${ props.valueWord }. You are the best... I guess 🤨, ¿you want try it again?`
                : // else...
                `very close... but you lose💥 the correct word is -->  ${ props.valueWord }. ¿You want try it again?`}
                </h1>
            <button id= 'replayButton' type="submit" onClick={props.onReplay}>Replay</button>
        </section>
    )
}