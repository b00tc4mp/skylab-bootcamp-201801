
$('form').submit(function (e) {
    e.preventDefault();
    $('h2').remove();
    $('ul').remove();
    $('.alert').remove();
    var query = $('input').val();
    $('form').trigger('reset');

    $.ajax({
        url: "https://quiet-inlet-67115.herokuapp.com/api/search/all?q=" + query,
        timeout:2000,
        success: function(beers) {
            listResults(query, beers);
        },
        error: function(req, text, error) {
            showError();
        }
    })
});

function listResults(query, beers) {

    $('.results').append('<h2>RESULTS <small>for search: ' + query + '</small></h2>');
    $('.results').append('<ul class="list-group"></ul>');
    beers.forEach(function (v) {
        $('ul').append('<a href="" id="info" data-toggle="modal" data-target="#exampleModalCenter" data-id=' + v.id + '>' + '<li class="list-group-item">' + v.name + '</li>' + '</a>');

    });
}

$(document).on("click", "#info", function (e) {
    e.preventDefault();
    var id = $(this).attr('data-id');

    $.ajax({
        url:"https://quiet-inlet-67115.herokuapp.com/api/beer/" + id,
        success: showDetail
    })
})

function showDetail(beer) {
    if (!beer.labels) {
        $('.modal-title').text('');
        $('.modal-body').text('');
        $('.modal-title').append(beer.name);
        $('.modal-body').append('<img class="mx-auto d-block" src="' + 'https://www.kegworks.com/wp/wp-content/uploads/2013/05/HomerSimpson22.gif' + '" height="auto" width="50%">');
        if (!beer.style.description) {
            $('.modal-body').append('<figcaption>No description found</figcaption>');
        } else {
            $('.modal-body').append('<figcaption>' + beer.style.description + '</figcaption>');
        }
    } else {
        $('.modal-title').text('');
        $('.modal-body').text('');
        $('.modal-title').append(beer.name);
        $('.modal-body').append('<img class="mx-auto d-block" src="' + beer.labels.medium + '">' + '<figcaption>' + beer.style.description + '</figcaption>');
    }
}

function showError () {
    $('.results').append('<div class="alert alert-danger" role="alert">BÚSQUEDA NO ENCONTRADA</div>');
    
}