function camelCase(text) {
    var regEx = /[A-Z\d]+/g;
    text = text.replace(regEx, function (n) { return ' ' + n; });
    return text;
}
camelCase('hangmanResultsWellDoneWhenAssertingWordOnThe7thAttempt');
 