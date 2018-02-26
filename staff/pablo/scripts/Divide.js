
var calcula = (total) => {
    var array = [];
    const divisores = [500, 200, 100, 50, 10, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.01]
    let i = 0;
    while (i != (divisores.length)) {
  
        if (total / divisores[i] >= 1) {
            var local = total / divisores[i];
            onlyDecimals = local % 1;
            var Numero = round(local, onlyDecimals);
            total = round(divisores[i] * onlyDecimals);
            array.push('\n' + Numero + " de " + divisores[i])
        }
        
        i++;
    };
  
    return array;
  }

  var round = (local, onlyDecimals) => {
    var onlyDecimals = onlyDecimals || 0
    return Math.round((local - onlyDecimals) * 1000) / 1000;;
  }



