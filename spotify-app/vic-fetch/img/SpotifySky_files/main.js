var $form = $('form');
var $select = $('#selectSearch');
var $input = $('#inputSearch');
var $mainBox = $('#box');
var $albumBox = $('#albumBox')
var $document = $(document);

//Action PAGE
$form.submit(function (e) {
    e.preventDefault();
    var queryInputed = $input.val();
    var typeSelected = 'artist';
    var timeoutDefauld = 3000;

    if (queryInputed === '') return console.error("Empty search")

    clearContent();
    getArtistFromAPI(queryInputed, typeSelected, timeoutDefauld);
    $mainBox.removeClass('hidden')
    goToPosition("#box")
});

//API-CLIENT
function getArtistFromAPI(query, type, timeout) {
    spotiApi.getArtists(query, type, function (err, res) {
        if (err) return console.error("err -->", err);
        $mainBox.html(addArtistTemplate(res.artists.items))
        addEventsClickOnCardsArtist(timeout);
    }, timeout);
}

function addEventsClickOnCardsArtist(timeout) {
    return $document.on('click', '.card-artist', function (e) {
        var id = $(this).attr("id");
        getAlbumsFromIdArtist(id, timeout);

        goToPosition("#albumBox");
        $albumBox.removeClass('hidden')
        $('button').removeClass('hidden')
    })
}

function getAlbumsFromIdArtist(id, timeout) {
    spotiApi.getAlbums(id, function (err, res) {
        if (err) return console.error("err -->", err);

        $albumBox.html(addAlbumTemplate(res.items));

        addEventClickAlbumArtist(timeout);
    }, timeout)
}

function addEventClickAlbumArtist(timeout) {
    return $document.on('click', '.album-card', function (e) {
        var id = $(this).attr("id")
        getAllTraksFromAlbum(id, timeout)
    })
}

function getAllTraksFromAlbum(id, timeout) {
    spotiApi.getTraks(id, function (err, res) {
        if (err) return console.error("err -->", err);

        $('#modal').html(addTraksTemplate(res.items));

        //show modal create in template/traks-template.js
        $('.modal-trak').modal('show')
    }, timeout)
}

//Functions Content jQuery
function clearContent() {
    $albumBox.html("")
    $albumBox.addClass("hidden")
    $mainBox.html("")
    $mainBox.addClass("hidden")
}

function goToPosition(divid) {
    $('html, body').animate({
        scrollTop: $(divid).position().top + 300
    }, 'slow');
}

$('button').on('click', function () {
    goToPosition($input)
    $('button').addClass('hidden')
})