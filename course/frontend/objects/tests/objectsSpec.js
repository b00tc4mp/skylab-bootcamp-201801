describe('Is Object', function () {

    function splitCamelCase(str) {
        var array = str.split('');
        array[0] = array[0].toUpperCase();
        var exp = /[A-Z0-9=*()/&$%·"!-:;<>{}^*]/g;
        var find = str.match(exp);

        for (var i = 1; i < array.length; i++) {
            for (var j = 0; j < find.length; j++) {
                if (array[i] == find[j]) {
                    array[i] = ' ' + array[i].toLowerCase();
                }
            }

        }

        return array.join('');
    }

    var empty;

    function checkNullToBeAnObject() {

        expect(isObject(null)).toBe(false);
    }
    it(splitCamelCase(checkNullToBeAnObject.name), checkNullToBeAnObject);

    function checkStringToBeAnObject() {
        expect(isObject('hello')).toBe(false);
    }
    it(splitCamelCase(checkStringToBeAnObject.name), checkStringToBeAnObject);

    function checkNumberToBeAnObject() {
        expect(isObject(1)).toBe(false);
    }
    it(splitCamelCase(checkNumberToBeAnObject.name), checkNumberToBeAnObject);

    function checkArrayToBeAnObject() {
        expect(isObject([1, 2, 3])).toBe(true);
    }
    it(splitCamelCase(checkArrayToBeAnObject.name), checkArrayToBeAnObject);

    function checkObjectToBeAnObject() {
        expect(isObject({})).toBe(true);
    }
    it(splitCamelCase(checkObjectToBeAnObject.name), checkObjectToBeAnObject);

    function checkVarToBeAnObject() {
        expect(isObject(empty)).toBe(false);
    }
    it(splitCamelCase(checkVarToBeAnObject.name), checkVarToBeAnObject);

    function checkUndefinedToBeAnObject() {
        expect(isObject(undefined)).toBe(false);
    }
    it(splitCamelCase(checkUndefinedToBeAnObject.name), checkUndefinedToBeAnObject);

})