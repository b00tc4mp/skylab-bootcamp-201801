function hangmanResultsWellDoneWhenAssertingWordOnThe7thAttempt() {
    var game = new Hangman('hello', 10);

    should(game.try('a')).be('9 _ _ _ _ _');
    should(game.try('b')).be('8 _ _ _ _ _');
    should(game.try('c')).be('7 _ _ _ _ _');
    should(game.try('d')).be('6 _ _ _ _ _');
    should(game.try('e')).be('6 _ E _ _ _');
    should(game.try('l')).be('6 _ E L L _');
    should(game.try('hello')).be('You have guessed the word, well done!');
}

test(hangmanResultsWellDoneWhenAssertingWordOnThe7thAttempt);

function hangmanResultsSorryWhenFailingAssertionOfWordOnThe7thAttempt() {
    var game = new Hangman('hello', 10);

    should(game.try('a')).be('9 _ _ _ _ _');
    should(game.try('b')).be('8 _ _ _ _ _');
    should(game.try('c')).be('7 _ _ _ _ _');
    should(game.try('d')).be('6 _ _ _ _ _');
    should(game.try('e')).be('6 _ E _ _ _');
    should(game.try('l')).be('6 _ E L L _');
    should(game.try('bello')).be('Sorry, you have not guessed... the correct word is HELLO.');
}

test(hangmanResultsSorryWhenFailingAssertionOfWordOnThe7thAttempt);

function hangmanResultsGameOverWhenTryingToPlayAfterGameEndedWithWellDone() {
    var game = new Hangman('hello', 10);

    should(game.try('a')).be('9 _ _ _ _ _');
    should(game.try('b')).be('8 _ _ _ _ _');
    should(game.try('c')).be('7 _ _ _ _ _');
    should(game.try('d')).be('6 _ _ _ _ _');
    should(game.try('e')).be('6 _ E _ _ _');
    should(game.try('l')).be('6 _ E L L _');
    should(game.try('hello')).be('You have guessed the word, well done!');
    should(game.try('bello')).be('GAME OVER.');
}

test(hangmanResultsGameOverWhenTryingToPlayAfterGameEndedWithWellDone);

function hangmanResultsGameOverWhenTryingToPlayAfterGameEndedWithSorry() {
    var game = new Hangman('hello', 10);

    should(game.try('a')).be('9 _ _ _ _ _');
    should(game.try('b')).be('8 _ _ _ _ _');
    should(game.try('c')).be('7 _ _ _ _ _');
    should(game.try('d')).be('6 _ _ _ _ _');
    should(game.try('e')).be('6 _ E _ _ _');
    should(game.try('l')).be('6 _ E L L _');
    should(game.try('bello')).be('Sorry, you have not guessed... the correct word is HELLO.');
    should(game.try('hello')).be('GAME OVER.');
}

test(hangmanResultsGameOverWhenTryingToPlayAfterGameEndedWithSorry);

function hangmanResultsInErrorWhenTryingToInputANonStringValue() {
    var game = new Hangman('hello', 10);

    should(game.try('a')).be('9 _ _ _ _ _');
    should(game.try('b')).be('8 _ _ _ _ _');
    should(game.try('c')).be('7 _ _ _ _ _');
    should(game.try('d')).be('6 _ _ _ _ _');
    should(game.try('e')).be('6 _ E _ _ _');
    should(game.try('l')).be('6 _ E L L _');
    should(game.try(0)).be('Please, enter a valid character or word!');
}

test(hangmanResultsInErrorWhenTryingToInputANonStringValue);

function hangmanResultsInErrorWhenTryingToInputANumericStringValue() {
    var game = new Hangman('hello', 10);

    should(game.try('a')).be('9 _ _ _ _ _');
    should(game.try('b')).be('8 _ _ _ _ _');
    should(game.try('c')).be('7 _ _ _ _ _');
    should(game.try('d')).be('6 _ _ _ _ _');
    should(game.try('e')).be('6 _ E _ _ _');
    should(game.try('l')).be('6 _ E L L _');
    should(game.try('0123.45')).be('Please, enter a valid character or word!');
}

test(hangmanResultsInErrorWhenTryingToInputANumericStringValue);

function hangmanResultsInErrorWhenTryingToInputASymbolStringValue() {
    var game = new Hangman('hello', 10);

    should(game.try('a')).be('9 _ _ _ _ _');
    should(game.try('b')).be('8 _ _ _ _ _');
    should(game.try('c')).be('7 _ _ _ _ _');
    should(game.try('d')).be('6 _ _ _ _ _');
    should(game.try('e')).be('6 _ E _ _ _');
    should(game.try('l')).be('6 _ E L L _');
    should(game.try('hello%')).be('Please, enter a valid character or word!');
}

test(hangmanResultsInErrorWhenTryingToInputASymbolStringValue);

// TODO func to convert camelCase text into normal case and spaces (e.g. "helloWorld" -> "hello world").