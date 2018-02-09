'use strict';

const helloWorld = 'Hello, World!'

function salutation() {
    return helloWorld
}

function salute() {
    alert(helloWorld)
}

ReactDOM.render(
    <main>
        <section>
            {/* <h1>{ helloWorld }</h1> */}
            {salutation()}
            <hr />
            <button className="round-red-button" onClick={salute}>salute</button>
        </section>
    </main>,
    document.getElementById('root'))