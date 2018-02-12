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

    if (queryInputed === '') return console.error("Empty search")

    clearContent();
    getArtistFromAPI(queryInputed, typeSelected);
    $mainBox.removeClass('hidden')
    goToPosition("#box")
});

//API-CLIENT
function getArtistFromAPI(query, type) {
    spotiApi.getArtists(query, type)
        .then(artists => {
            $mainBox.html(addArtistTemplate(artists))
            addEventsClickOnCardsArtist();
        })
        .catch(err => console.error("err -->", err))
}

function addEventsClickOnCardsArtist() {
    return $document.on('click', '.card-artist', function (e) {
        var id = $(this).attr("id");
        console.log(id)
        getAlbumsFromIdArtist(id);

        goToPosition("#albumBox");
        $albumBox.removeClass('hidden')
        $('button').removeClass('hidden')
    })
}

function getAlbumsFromIdArtist(id) {
    spotiApi.getAlbums(id)
        .then(albums => {
            console.log(albums)
            $albumBox.html(addAlbumTemplate(albums));
            addEventClickAlbumArtis();
        })
        .catch(err => console.error("err -->", err))
}

function addEventClickAlbumArtis() {
    return $document.on('click', '.album-card', function (e) {
        var id = $(this).attr("id")
        getAllTraksFromAlbum(id)
    })
}

function getAllTraksFromAlbum(id) {
    spotiApi.getTraks(id)
        .then(tracks => {
            console.log(tracks)
            $('#modal').html(addTraksTemplate(tracks))
            $('.modal-trak').modal('show')
        })
        .catch(err => console.error("err -->", err))
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

$('button').on('click', () => {
    goToPosition($input)
    $albumBox.addClass("hidden")
    $('button').addClass('hidden')
})