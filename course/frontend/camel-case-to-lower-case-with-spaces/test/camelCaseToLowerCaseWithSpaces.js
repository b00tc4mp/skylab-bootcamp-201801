describe('camelCaseToLowerCaseWithSpaces ', function () {

    function WhenInputANormalStringWhitOutUpperCase() {
        expect(camelCaseToLowerCaseWithSpaces('hola')).toEqual('hola');
    }
    it(WhenInputANormalStringWhitOutUpperCase.name, WhenInputANormalStringWhitOutUpperCase)

    function WhenInputAStringWhitRandomUpperCase() {
        expect(camelCaseToLowerCaseWithSpaces('hOlA')).toBe('h ol a');
    }
    it(WhenInputAStringWhitRandomUpperCase.name, WhenInputAStringWhitRandomUpperCase)

    function WhenInputAStringWhitCorrectUpperCaseAndEquals() {
        expect(camelCaseToLowerCaseWithSpaces('HelloThisIsThe2ndTestShoudlBeCorrect,Like2=2')).toBe('hello this is the 2nd test shoudl be correct, like 2 = 2');
        expect(camelCaseToLowerCaseWithSpaces('HelloThisIsThe2ndTestShoudlBeCorrect,Like2=2')).not.toBe(' hello this is the 2nd test shoudl be correct, like 2 = 2');
    }
    it(WhenInputAStringWhitCorrectUpperCaseAndEquals.name, WhenInputAStringWhitCorrectUpperCaseAndEquals)
    

    function WhenInputAStringWhitRandomUpperCaseAndNumers() {
        expect(camelCaseToLowerCaseWithSpaces('h1opOlAr3rTyE7afg9')).toBe('h 1op ol ar 3r ty e 7afg 9');
    }
    it(WhenInputAStringWhitRandomUpperCaseAndNumers.name, WhenInputAStringWhitRandomUpperCaseAndNumers)

    function WhenInputAStringWhitTheSameNumber() {
        expect(camelCaseToLowerCaseWithSpaces('11111111')).toBe('1 1 1 1 1 1 1 1');
        expect(camelCaseToLowerCaseWithSpaces('11111111')).not.toBe(' 1 1 1 1 1 1 1 1');
    }
    it(WhenInputAStringWhitTheSameNumber.name, WhenInputAStringWhitTheSameNumber)

    function WhenInputAStringWhitSimbolEqual() {
        expect(camelCaseToLowerCaseWithSpaces('holaQueTalEs=ACosas')).toBe('hola que tal es = a cosas');
    }
    it(WhenInputAStringWhitSimbolEqual.name, WhenInputAStringWhitSimbolEqual)

    function WhenInputAStringWhitRandomSimbol() {
        expect(camelCaseToLowerCaseWithSpaces('hol*Qeu%hol`fgg·2fy/rggs&4fsfsFsd=ACosas')).not.toBeFalsy('hol * qeu %hol`fgg· 2fy /rggs & 4fsfs fsd = a cosas');
        expect(camelCaseToLowerCaseWithSpaces('hol*Qeu%hol`fgg·2fy/rggs&4fsfsFsd=ACosas')).not.toBeUndefined('hol * qeu %hol`fgg· 2fy /rggs & 4fsfs fsd = a cosas');
        expect(camelCaseToLowerCaseWithSpaces('hol*Qeu%hol`fgg·2fy/rggs&4fsfsFsd=ACosas')).toBe('hol * qeu %hol`fgg· 2fy /rggs & 4fsfs fsd = a cosas');
    }
    it(WhenInputAStringWhitRandomSimbol.name, WhenInputAStringWhitRandomSimbol)

    function WhenInputANumber() {
        expect(camelCaseToLowerCaseWithSpaces(1)).toBeFalsy();
    }
    it(WhenInputANumber.name, WhenInputANumber)

    function WhenInputANumberNull() {
        expect(camelCaseToLowerCaseWithSpaces(0)).toBeFalsy();
    }
    it(WhenInputANumberNull.name, WhenInputANumberNull)

    function WhenInputANull() {
        expect(camelCaseToLowerCaseWithSpaces(null)).toBeFalsy();
    }
    it(WhenInputANull.name, WhenInputANull)


    function WhenInputAUndefined() {
        expect(camelCaseToLowerCaseWithSpaces(undefined)).toBeFalsy();
    }
    it(WhenInputAUndefined.name, WhenInputAUndefined)

    function WhenInputAnEmptyObject() {
        expect(camelCaseToLowerCaseWithSpaces({})).toBeFalsy();
    }
    it(WhenInputAnEmptyObject.name, WhenInputAnEmptyObject)

    function WhenInputAnEmptyArray() {
        expect(camelCaseToLowerCaseWithSpaces([])).toBeFalsy();
    }
    it(WhenInputAnEmptyArray.name, WhenInputAnEmptyArray)

    function WhenInputAnEmptyString() {
        expect(camelCaseToLowerCaseWithSpaces("")).toBeFalsy();
    }
    it(WhenInputAnEmptyString.name, WhenInputAnEmptyString)
})