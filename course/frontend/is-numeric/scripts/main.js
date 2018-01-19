function isNumericWhenInputaNormalString() {
    var a = "hola"
    should(isNumeric(a)).result(false);
}

test(isNumericWhenInputaNormalString);

function isNumericWhenInputaNormalStringWithToUpperCase() {
    var a = "HoLa"
    should(isNumeric(a)).result(false);
}

test(isNumericWhenInputaNormalStringWithToUpperCase);

function isNumericWhenInputaNormalStringWithToUpperCaseAndSomeNumers() {
    var a = "H1oLa1"
    should(isNumeric(a)).result(true);
}

test(isNumericWhenInputaNormalStringWithToUpperCaseAndSomeNumers);

function isNumericWhenInputaNormalStringWithallNumeric() {
    var a = "12345"
    should(isNumeric(a)).result(true);
}

test(isNumericWhenInputaNormalStringWithallNumeric);

function isNumericWhenInputaNormalStringWithallNumericAndSimbologies() {
    var a = "12@123*`-´"
    should(isNumeric(a)).result(true);
}

test(isNumericWhenInputaNormalStringWithallNumericAndSimbologies);

function isNumericWhenInputanUndefined() {
    var a = undefined
    should(isNumeric(a)).result(false);
}

test(isNumericWhenInputanUndefined);

function isNumericWhenInputanNull() {
    var a = null
    should(isNumeric(a)).result(false);
}

test(isNumericWhenInputanNull);

function isNumericWhenInputanNumber() {
    var a = 12
    should(isNumeric(a)).result(false);
}

test(isNumericWhenInputanNumber);

function isNumericWhenInputanArray() {
    var a = []
    should(isNumeric(a)).result(false);
}

test(isNumericWhenInputanArray);

function isNumericWhenInputanArratWithSitrings() {
    var a = ["123"]
    should(isNumeric(a)).result(false);
}

test(isNumericWhenInputanArratWithSitrings);

function isNumericWhenInputanObject() {
    var a = {}
    should(isNumeric(a)).result(false);
}

test(isNumericWhenInputanObject);


// TODO func to convert camelCase text into normal case and spaces (e.g. "helloWorld" -> "hello world").