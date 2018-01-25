describe("Hangman", function() {
  var game;

  beforeEach(function() {
    game = new Hangman("hello", 10);
  });

  function hangmanResultsWellDoneWhenAssertingWordOnThe7thAttempt() {
    expect(game.try("a")).toBe("9 _ _ _ _ _");
    expect(game.try("b")).toBe("8 _ _ _ _ _");
    expect(game.try("c")).toBe("7 _ _ _ _ _");
    expect(game.try("d")).toBe("6 _ _ _ _ _");
    expect(game.try("e")).toBe("6 _ E _ _ _");
    expect(game.try("l")).toBe("6 _ E L L _");
    expect(game.try("hello")).toBe("You have guessed the word, well done!");
  }

  it(
    hangmanResultsWellDoneWhenAssertingWordOnThe7thAttempt.name,
    hangmanResultsWellDoneWhenAssertingWordOnThe7thAttempt
  );

  function hangmanResultsSorryWhenFailingAssertionOfWordOnThe7thAttempt() {
    expect(game.try("a")).toBe("9 _ _ _ _ _");
    expect(game.try("b")).toBe("8 _ _ _ _ _");
    expect(game.try("c")).toBe("7 _ _ _ _ _");
    expect(game.try("d")).toBe("6 _ _ _ _ _");
    expect(game.try("e")).toBe("6 _ E _ _ _");
    expect(game.try("l")).toBe("6 _ E L L _");
    expect(game.try("bello")).toBe(
      "Sorry, you have not guessed... the correct word is HELLO."
    );
  }

  it(
    hangmanResultsSorryWhenFailingAssertionOfWordOnThe7thAttempt.name,
    hangmanResultsSorryWhenFailingAssertionOfWordOnThe7thAttempt
  );

  function hangmanResultsGameOverWhenTryingToPlayAfterGameEndedWithWellDone() {
    var game = new Hangman("hello", 10);

    expect(game.try("a")).toBe("9 _ _ _ _ _");
    expect(game.try("b")).toBe("8 _ _ _ _ _");
    expect(game.try("c")).toBe("7 _ _ _ _ _");
    expect(game.try("d")).toBe("6 _ _ _ _ _");
    expect(game.try("e")).toBe("6 _ E _ _ _");
    expect(game.try("l")).toBe("6 _ E L L _");
    expect(game.try("hello")).toBe("You have guessed the word, well done!");
    expect(game.try("bello")).toBe("GAME OVER.");
  }

  it(
    hangmanResultsGameOverWhenTryingToPlayAfterGameEndedWithWellDone.name,
    hangmanResultsGameOverWhenTryingToPlayAfterGameEndedWithWellDone
  );

  function hangmanResultsGameOverWhenTryingToPlayAfterGameEndedWithSorry() {
    var game = new Hangman("hello", 10);

    expect(game.try("a")).toBe("9 _ _ _ _ _");
    expect(game.try("b")).toBe("8 _ _ _ _ _");
    expect(game.try("c")).toBe("7 _ _ _ _ _");
    expect(game.try("d")).toBe("6 _ _ _ _ _");
    expect(game.try("e")).toBe("6 _ E _ _ _");
    expect(game.try("l")).toBe("6 _ E L L _");
    expect(game.try("bello")).toBe(
      "Sorry, you have not guessed... the correct word is HELLO."
    );
    expect(game.try("hello")).toBe("GAME OVER.");
  }

  it(
    hangmanResultsGameOverWhenTryingToPlayAfterGameEndedWithSorry.name,
    hangmanResultsGameOverWhenTryingToPlayAfterGameEndedWithSorry
  );

  function hangmanResultsInErrorWhenTryingToInputANonStringValue() {
    var game = new Hangman("hello", 10);
    expect(game.try("a")).toBe("9 _ _ _ _ _");
    expect(game.try("b")).toBe("8 _ _ _ _ _");
    expect(game.try("c")).toBe("7 _ _ _ _ _");
    expect(game.try("d")).toBe("6 _ _ _ _ _");
    expect(game.try("e")).toBe("6 _ E _ _ _");
    expect(game.try("l")).toBe("6 _ E L L _");
    expect(game.try(0)).toBe("Please, enter a valid character or word!");
  }

  it(
    hangmanResultsInErrorWhenTryingToInputANonStringValue.name,
    hangmanResultsInErrorWhenTryingToInputANonStringValue
  );

  function hangmanResultsInErrorWhenTryingToInputANumericStringValue() {
    var game = new Hangman("hello", 10);

    expect(game.try("a")).toBe("9 _ _ _ _ _");
    expect(game.try("b")).toBe("8 _ _ _ _ _");
    expect(game.try("c")).toBe("7 _ _ _ _ _");
    expect(game.try("d")).toBe("6 _ _ _ _ _");
    expect(game.try("e")).toBe("6 _ E _ _ _");
    expect(game.try("l")).toBe("6 _ E L L _");
    expect(game.try("0123.45")).toBe(
      "Please, enter a valid character or word!"
    );
  }

  it(
    hangmanResultsInErrorWhenTryingToInputANumericStringValue.name,
    hangmanResultsInErrorWhenTryingToInputANumericStringValue
  );

  function hangmanResultsInErrorWhenTryingToInputASymbolStringValue() {
    var game = new Hangman("hello", 10);

    expect(game.try("a")).toBe("9 _ _ _ _ _");
    expect(game.try("b")).toBe("8 _ _ _ _ _");
    expect(game.try("c")).toBe("7 _ _ _ _ _");
    expect(game.try("d")).toBe("6 _ _ _ _ _");
    expect(game.try("e")).toBe("6 _ E _ _ _");
    expect(game.try("l")).toBe("6 _ E L L _");
    expect(game.try("hello%")).toBe("Please, enter a valid character or word!");
  }

  it(
    hangmanResultsInErrorWhenTryingToInputASymbolStringValue.name,
    hangmanResultsInErrorWhenTryingToInputASymbolStringValue
  );
});
