var objectcurrency = {};
var currency1; 
var currency2;
var inputNumber;

$(document).ready(function () {

  $.ajax({
    url: "https://api.fixer.io/latest",
    type: 'GET',
    success: function (results) {
      objectcurrency = results.rates;
      objectcurrency.EUR= 1;
    }
  });

  
  
  $("#boton").on("click", function (e) {

    inputNumber = $("#inputNumber").val();
    currency1 = $("#selectFirstCurrency").val();
    currency2 = $("#selectSecondCurrency").val();
    var eurobase1 = objectcurrency[currency1]
    var eurobase2 = objectcurrency[currency2]
    MakeCalcs(inputNumber, eurobase2, eurobase1);

  });

  $('#boton').attr('disabled', true);
 

});

$('#inputNumber').keyup(function () {
  var disable = false;
      $('#inputNumber').each(function(){
           if($(this).val() == ""){
                disable = true;      
           }
      });
 $('#boton').prop('disabled', disable);
});

function showResults (value){

  var array = calcula(value);
  $("#showhere").html('Estás convirtiendo \n'+inputNumber+' '+ currency1+ ' a '+ currency2+': ' +'\n'+ value+' '+currency2 +' \n  esos '+inputNumber+' si fueran euros serían : '+'\n'+array).wrap('<pre />');
  
  // 
  
  
 
}

$(".resetAll").on("click", function (e) {

  inputNumber = $("#inputNumber").val(0);
  currency1 = $("#selectFirstCurrency").val("EUR");
  currency2 = $("#selectSecondCurrency").val("EUR");
});




