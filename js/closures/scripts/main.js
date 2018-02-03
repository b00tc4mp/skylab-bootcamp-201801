var SECRET = 'a secret';
var PASSWORD = 'a password';

function testBoxGetSecretReturnsSecretOnCorrectPassword() {
    var box = new Box(SECRET, PASSWORD);

    var res = box.getSecret(PASSWORD);

    if (res === SECRET)
        console.log(testBoxGetSecretReturnsSecretOnCorrectPassword.name, 'OK');
    else
        console.error(testBoxGetSecretReturnsSecretOnCorrectPassword.name, 'KO');
}

testBoxGetSecretReturnsSecretOnCorrectPassword();

function testBoxGetSecretReturnsNothingOnIncorrectPassword() {
    var box = new Box(SECRET, PASSWORD);

    var res = box.getSecret('a wrong password');

    if (res === undefined)
        console.log(testBoxGetSecretReturnsNothingOnIncorrectPassword.name, 'OK');
    else
        console.error(testBoxGetSecretReturnsNothingOnIncorrectPassword.name, 'KO');
}

testBoxGetSecretReturnsNothingOnIncorrectPassword();

function testBoxShouldNotExposePassword() {
    var box = new Box(SECRET, PASSWORD);

    if (box.password === undefined)
        console.log(testBoxShouldNotExposePassword.name, 'OK');
    else
        console.error(testBoxShouldNotExposePassword.name, 'KO');
}

testBoxShouldNotExposePassword();

function testBoxShouldNotExposeSecret() {
    var box = new Box(SECRET, PASSWORD);

    if (box.secret === undefined)
        console.log(testBoxShouldNotExposeSecret.name, 'OK');
    else
        console.error(testBoxShouldNotExposeSecret.name, 'KO');
}

testBoxShouldNotExposeSecret();

function testBoxSetsSecretOnCorrectPassword() {
    var box = new Box(SECRET, PASSWORD);

    box.setSecret('new secret', PASSWORD);

    var res = box.getSecret(PASSWORD);

    if (res === 'new secret')
        console.log(testBoxSetsSecretOnCorrectPassword.name, 'OK');
    else
        console.error(testBoxSetsSecretOnCorrectPassword.name, 'KO');
}

testBoxSetsSecretOnCorrectPassword();

function testBoxChangesPasswordOnCorrectPreviousPassword() {
    var box = new Box(SECRET, PASSWORD);

    box.changePassword('new password', PASSWORD);

    var res = box.getSecret('new password');

    if (res === SECRET)
        console.log(testBoxChangesPasswordOnCorrectPreviousPassword.name, 'OK');
    else
        console.log(testBoxChangesPasswordOnCorrectPreviousPassword.name, 'KO');
}

testBoxChangesPasswordOnCorrectPreviousPassword();

// closures!

function A() {
    var value = 1;

    this.setValue = function (v) {
        value = v;
    };

    this.getValue = function () {
        return value;
    };
}

a = new A();

a.getValue(); // => 1

a.setValue(2);

a.getValue(); // => 2

a.getValue2 = function () {
    return value;
}

a.getValue2(); // => ReferenceError: value is not defined