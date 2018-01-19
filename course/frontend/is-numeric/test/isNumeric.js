function toLowerEspaceCase(string) {
    var array = string.split('');
    for (var i = 0; i < array.length; i++) {
        if (array[i] <= 'Z' && array[i] >= 'A') {
            array[i] = ' ' + array[i].toLowerCase();
        }
    }
    return array.join('');
}
Function.prototype.toLowerEspaceCase = function () {
    console.log(this)
    return toLowerEspaceCase(this.name)
}

for (let index = 0; index < array.length; index++) {
    
}

describe('isNumeric ', function () {
    var a;

    beforeEach(function () {
        a = "hola"
    })

    function WhenInputaNormalString() {
        expect(isNumeric(a)).toBeFalsy();
    }

    
    it(WhenInputaNormalString.toLowerEspaceCase(), WhenInputaNormalString)
})

describe('isNumeric ', function () {
    var a;

    beforeEach(function () {
        a = "h"
    })

    function WhenInputaOmeNormalString() {
        expect(isNumeric(a)).toBeFalsy();
    }

    it(WhenInputaOmeNormalString.toLowerEspaceCase(), WhenInputaOmeNormalString)
})

describe('isNumeric ', function () {
    var a;

    beforeEach(function () {
        a = "1"
    })

    function WhenInputaOneNumberString() {
        expect(isNumeric(a)).toBeTruthy();
    }

    it(WhenInputaOneNumberString.toLowerEspaceCase(), WhenInputaOneNumberString)
})


describe('isNumeric ', function () {
    var a;

    beforeEach(function () {
        a = "hoLa"
    })

    function WhenInputaNormalStringWithToUpperCase() {
        expect(isNumeric(a)).toBeFalsy();
    }

    it(WhenInputaNormalStringWithToUpperCase.toLowerEspaceCase(), WhenInputaNormalStringWithToUpperCase)
})

describe('isNumeric ', function () {
    var a;

    beforeEach(function () {
        a = "H1oLa1"
    })

    function WhenInputaNormalStringWithToUpperCaseAndSomeNumers() {
        expect(isNumeric(a)).toBeTruthy();
    }

    it(WhenInputaNormalStringWithToUpperCaseAndSomeNumers.toLowerEspaceCase(), WhenInputaNormalStringWithToUpperCaseAndSomeNumers)
})

describe('isNumeric ', function () {
    var a;

    beforeEach(function () {
        a = "12345"
    })

    function WhenInputaNormalStringWithAllNumeric() {
        expect(isNumeric(a)).toBeTruthy();
    }

    it(WhenInputaNormalStringWithAllNumeric.toLowerEspaceCase(), WhenInputaNormalStringWithAllNumeric)
})

describe('isNumeric ', function () {
    var a;

    beforeEach(function () {
        a = "12@123*`-´"
    })

    function WhenInputaNormalStringWithAllNumericAndSimbologies() {
        expect(isNumeric(a)).toBeTruthy();
    }

    it(WhenInputaNormalStringWithAllNumericAndSimbologies.toLowerEspaceCase(), WhenInputaNormalStringWithAllNumericAndSimbologies)
})

describe('isNumeric ', function () {
    var a;

    beforeEach(function () {
        a = undefined
    })

    function WhenInputAnUndefined() {
        expect(isNumeric(a)).toBeFalsy();
    }

    it(WhenInputAnUndefined.toLowerEspaceCase(), WhenInputAnUndefined)
})

describe('isNumeric ', function () {
    var a;

    beforeEach(function () {
        a = null
    })

    function WhenInputAnNull() {
        expect(isNumeric(a)).toBeFalsy();
    }

    it(WhenInputAnNull.toLowerEspaceCase(), WhenInputAnNull)
})

describe('isNumeric ', function () {
    var a;

    beforeEach(function () {
        a = 12
    })

    function WhenInputAnNumber() {
        expect(isNumeric(a)).toBeFalsy();
    }

    it(WhenInputAnNumber.toLowerEspaceCase(), WhenInputAnNumber)
})

describe('isNumeric ', function () {
    var a;

    beforeEach(function () {
        a = []
    })

    function WhenInputAnArray() {
        expect(isNumeric(a)).toBeFalsy();
    }

    it(WhenInputAnArray.toLowerEspaceCase(), WhenInputAnArray)
})

describe('isNumeric ', function () {
    var a;

    beforeEach(function () {
        a = ["123"]
    })

    function WhenInputAnArrayWithSitrings() {
        expect(isNumeric(a)).toBeFalsy();
    }

    it(WhenInputAnArrayWithSitrings.toLowerEspaceCase(), WhenInputAnArrayWithSitrings)
})

describe('isNumeric ', function () {
    var a;

    beforeEach(function () {
        a = {}
    })

    function WhenInputAnObject() {
        expect(isNumeric(a)).toBeFalsy();
    }

    it(WhenInputAnObject.toLowerEspaceCase(), WhenInputAnObject)
})