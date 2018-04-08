function doOnChars(text, operationOnChars) {
  var chars = text.split("");
  var newText = "";

  for (var i = 0; i < chars.length; i++) {
    var char = chars[i];
    newText += operationOnChars(char);
  }

  return newText;
}

function charInBrackets(char) {
  return char !== " " ? "[" + char + "]" : char;
}

console.log(doOnChars("hello world", charInBrackets)); // outputs: [h][e][l][l][o] [w][o][r][l][d]
