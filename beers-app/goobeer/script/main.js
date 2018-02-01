(function() {
  "use strict";

  beersApi.timeout = 10000;
  // beersApi.baseUrl = 'prepro..'

  $("form").submit(function(e) {
    e.preventDefault();

    var query = $("input").val();

    beersApi.search(query, listResults, handleError);
  });

  function listResults(beers) {
    $("#box").empty();

    beers.forEach(function(beer, i) {
      var description = beer.style ? beer.style.description : "No description";
      $("#box").append(
        "<div class='col-sm-6 beerbox'><div class='card'><div class='card-block'><h3 class='card-title'>" +
          beer.name +
          "</h3><p class='card-text'>" +
          description +
          "</p><button type='button' class='btn btn-primary d-block mx-auto' data-toggle='modal' data-target='#myModal' id=" +
          beer.id +
          ">More beer information</button></div></div></div>"
      );
    });
  }

  $(document).on("click", "button", function() {
    var id = $(this).attr("id");

    $(".contenttable").empty();

    beersApi.retrieve(id, showDetail, handleError);
  });

  function showDetail(beer) {
    var nonimage = beer.labels ? beer.labels.icon : "images/default.png";

    $(".modal-title").html(beer.name);

    $(".contenttable").append(
      "<td>" +
        beer.id +
        "</td> <td>" +
        beer.name +
        "</td> <td><img src=" +
        nonimage +
        " class='logo'></td>"
    );
  }

  function handleError(err) {
    // TODO provide error feedback through the UI
  }
})();
