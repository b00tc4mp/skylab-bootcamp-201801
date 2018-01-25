/**
 * Text tool
 * 
 * @version 1.0.0a
 */

function text(_text) {
    function oneSymbol(el) {
        return _text = el + _text + el;
    }

    function thowSymbol(el1, el2) {
        return _text = el1 + _text + el2;
    }

    return {
        wrap: function wrap(inputFirstSymbol, inputSecondSymbol) {
            var firstSymbol = inputFirstSymbol || "";
            var secondSymbol = inputSecondSymbol || "";
            var regExp = /[^\d\w\sñç]/ig;

            try {
                //ThrowError if...
                if (typeof (firstSymbol) !== "string" || typeof (secondSymbol) !== "string") throw new Error("Envalid parameters, functions Wrap only accepts Strings Symbols--> Wrap(element {string}, secondOptionalElement {string})")

                if (firstSymbol && !secondSymbol) {
                    //ThrowError if is not a Symbol...
                    if (!firstSymbol.match(regExp)) throw new Error("Only accepts Symbols.")

                    oneSymbol(firstSymbol);
                    return this;
                } else if (firstSymbol && secondSymbol) {
                    //ThrowError if is not a Symbol...
                    if (!firstSymbol.match(regExp) || !secondSymbol.match(regExp)) throw new Error("Only accepts Symbols.")

                    thowSymbol(firstSymbol, secondSymbol);
                    return this;
                }

                throw new Error("Somthing wrong ...");
            } catch (err) {
                console.error(err);
                return false;
            }
        },
        toString: function toString() {
            return _text;
        }
    }
}