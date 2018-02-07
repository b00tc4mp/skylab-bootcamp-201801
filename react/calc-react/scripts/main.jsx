'use strict';

let a, b, res;

function calculate(e) {
    e.preventDefault()

    res = a + b

    console.log('calculate', res)

    render()
}

function keepA(e) {
    a = parseFloat(e.target.value)

    console.log(a)
}

function keepB(e) {
    b = parseFloat(e.target.value)

    console.log(b)
}

function render() {
    ReactDOM.render(
        <main>
            <section>
                <form onSubmit={calculate}>
                    <input type="text" onChange={keepA}/>
                    +
                    <input type="text" onChange={keepB}/>
                    <button type="submit">=</button>
                    <input type="text" disabled value={ res } />
                </form>
            </section>
        </main>,
        document.getElementById('root'))
}

render()