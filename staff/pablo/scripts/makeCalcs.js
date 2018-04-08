
function MakeCalcs (inputNumber, eurobase2, eurobase1) {

    var devuelve = Math.round(((eurobase2 / eurobase1) * inputNumber) * 100) / 100;
    return showResults (devuelve);
  
  };
  