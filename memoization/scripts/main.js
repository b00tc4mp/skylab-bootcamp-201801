function _isPrime(value) {
  if (!isPrime.answers) {
    isPrime.answers = {};
  }
  if (isPrime.answers[value] != null) {
    return isPrime.answers[value];
  }

  var prime = value != 1; //1 no puede ser primo

  for (i = 2; i < value; i++) {
    if (value % i == 0) {
      prime = false;
      break;
    }
  }

  return (isPrime.answers[value] = prime);
}

// keeping answers private

var isPrime;
(function() {
    var answers;

    isPrime = function(value){  
        if(!answers){  
            answers = {};  
        }  
        if(answers[value] != null){  
            return answers[value];  
        }  
    
        var prime = value != 1; //1 no puede ser primo
    
        for(i=2; i<value; i++){  
            if(value % i == 0){  
                prime = false;  
                break;  
            }  
        }  
    
        return(answers[value] = prime);               
    }
})();

// testing

console.log(isPrime(5));
console.log(isPrime(7));
console.log(isPrime(10));
console.log(isPrime(13));

console.log(isPrime.answers);