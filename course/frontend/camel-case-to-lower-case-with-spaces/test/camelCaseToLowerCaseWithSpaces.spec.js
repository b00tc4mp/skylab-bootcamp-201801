describe('camelCaseToLowerCaseWithSpaces ', function () {

    function whenInputANormalStringWhitOutUpperCase() {
        expect(camelCaseToLowerCaseWithSpaces('hola')).toEqual('hola');
    }
    it(whenInputANormalStringWhitOutUpperCase.name, whenInputANormalStringWhitOutUpperCase)

    function whenInputAStringWhitRandomUpperCase() {
        expect(camelCaseToLowerCaseWithSpaces('hOlA')).toBe('h ol a');
    }
    it(whenInputAStringWhitRandomUpperCase.name, whenInputAStringWhitRandomUpperCase)

    function whenInputAStringWhitCorrectUpperCaseAndEquals() {
        expect(camelCaseToLowerCaseWithSpaces('HelloThisIsThe2ndTestShoudlBeCorrect,Like2=2')).toBe('hello this is the 2nd test shoudl be correct, like 2 = 2');
        expect(camelCaseToLowerCaseWithSpaces('HelloThisIsThe2ndTestShoudlBeCorrect,Like2=2')).not.toBe(' hello this is the 2nd test shoudl be correct, like 2 = 2');
    }
    it(whenInputAStringWhitCorrectUpperCaseAndEquals.name, whenInputAStringWhitCorrectUpperCaseAndEquals)
    

    function whenInputAStringWhitRandomUpperCaseAndNumers() {
        expect(camelCaseToLowerCaseWithSpaces('h1opOlAr3rTyE7afg9')).toBe('h 1op ol ar 3r ty e 7afg 9');
    }
    it(whenInputAStringWhitRandomUpperCaseAndNumers.name, whenInputAStringWhitRandomUpperCaseAndNumers)

    function whenInputAStringWhitTheSameNumber() {
        expect(camelCaseToLowerCaseWithSpaces('11111111')).toBe('1 1 1 1 1 1 1 1');
        expect(camelCaseToLowerCaseWithSpaces('11111111')).not.toBe(' 1 1 1 1 1 1 1 1');
    }
    it(whenInputAStringWhitTheSameNumber.name, whenInputAStringWhitTheSameNumber)

    function whenInputAStringWhitSimbolEqual() {
        expect(camelCaseToLowerCaseWithSpaces('holaQueTalEs=ACosas')).toBe('hola que tal es = a cosas');
    }
    it(whenInputAStringWhitSimbolEqual.name, whenInputAStringWhitSimbolEqual)

    function whenInputAStringWhitRandomSimbol() {
        expect(camelCaseToLowerCaseWithSpaces('hol*Qeu%hol`fgg·2fy/rggs&4fsfsFsd=ACosas')).not.toBeFalsy('hol * qeu %hol`fgg· 2fy /rggs & 4fsfs fsd = a cosas');
        expect(camelCaseToLowerCaseWithSpaces('hol*Qeu%hol`fgg·2fy/rggs&4fsfsFsd=ACosas')).not.toBeUndefined('hol * qeu %hol`fgg· 2fy /rggs & 4fsfs fsd = a cosas');
        expect(camelCaseToLowerCaseWithSpaces('hol*Qeu%hol`fgg·2fy/rggs&4fsfsFsd=ACosas')).toBe('hol * qeu %hol`fgg· 2fy /rggs & 4fsfs fsd = a cosas');
    }
    it(whenInputAStringWhitRandomSimbol.name, whenInputAStringWhitRandomSimbol)

    function whenInputANumber() {
        expect(camelCaseToLowerCaseWithSpaces(1)).toBeFalsy();
    }
    it(whenInputANumber.name, whenInputANumber)

    function whenInputANumberNull() {
        expect(camelCaseToLowerCaseWithSpaces(0)).toBeFalsy();
    }
    it(whenInputANumberNull.name, whenInputANumberNull)

    function whenInputANull() {
        expect(camelCaseToLowerCaseWithSpaces(null)).toBeFalsy();
    }
    it(whenInputANull.name, whenInputANull)


    function whenInputAUndefined() {
        expect(camelCaseToLowerCaseWithSpaces(undefined)).toBeFalsy();
    }
    it(whenInputAUndefined.name, whenInputAUndefined)

    function whenInputAnEmptyObject() {
        expect(camelCaseToLowerCaseWithSpaces({})).toBeFalsy();
    }
    it(whenInputAnEmptyObject.name, whenInputAnEmptyObject)

    function whenInputAnEmptyArray() {
        expect(camelCaseToLowerCaseWithSpaces([])).toBeFalsy();
    }
    it(whenInputAnEmptyArray.name, whenInputAnEmptyArray)

    function whenInputAnEmptyString() {
        expect(camelCaseToLowerCaseWithSpaces("")).toBeFalsy();
    }
    it(whenInputAnEmptyString.name, whenInputAnEmptyString)
})